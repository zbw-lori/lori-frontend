<template>
  <v-data-table :items-per-page="itemsPerPage" :headers="headers" :items-length="totalItems" :items="items"
    :sort-by="[{ key: 'id', order: 'asc' }]" class="elevation-1">
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>CRUD</v-toolbar-title>
        <v-spacer></v-spacer>
        <EditDialog v-model:item-object="editedItem" v-model:showDialog="dialog" @onSave="save" @onCancel="close" />
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue-darken-1" variant="text" @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue-darken-1" variant="text" @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon size="small" class="me-2" @click="editItem(item.raw)">mdi-pencil</v-icon>
      <v-icon size="small" @click="deleteItem(item.raw)">mdi-delete</v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template>
  </v-data-table>
</template>

<script>
import EditDialog from '@/components/EditDialog.vue';
import { toRaw } from 'vue';

export default {
  components: {
    EditDialog
  },

  props: {
    headers: Array,
    defaultItem: Object,
    dataItems: Array,
  },

  emit: ['update:dataItems', 'onUpdate', 'onNew', 'onDelete'],

  data: () => ({
    dialog: false,
    dialogDelete: false,
    itemsPerPage: 5,
    totalItems: 0,
    editedIndex: -1,
    editedItem: null,
  }),

  computed: {
    items: {
      get() {
        return this.dataItems;
      },
      set(value) {
        this.$emit('update:dataItems', value);
      },
    }
  },

  watch: {
    dialog(val) {
      val || this.close()
    },
    dialogDelete(val) {
      val || this.closeDelete()
    },
  },

  created() {
    this.editedItem = Object.assign({}, this.defaultItem)
  },

  methods: {
    editItem(item) {
      this.editedIndex = this.items.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem(item) {
      this.editedIndex = this.items.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm() {
      const newItem = toRaw(this.editedItem)
      this.items.splice(this.editedIndex, 1)
      this.$emit('onDelete', newItem.id)
      this.closeDelete()
    },

    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete() {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save() {
      const newItem = toRaw(this.editedItem)
      if (this.editedIndex > -1) {
        Object.assign(this.items[this.editedIndex], newItem)
        this.$emit('onUpdate', newItem.id)
      } else {
        this.$emit('onNew', newItem)
      }
      this.close()
    },
  },
}
</script>
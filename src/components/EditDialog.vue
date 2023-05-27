<template>
  <v-dialog v-model:model-value="dialog" max-width="500px">
    <template v-slot:activator="{ props }">
      <v-btn color="primary" dark class="mb-2" v-bind="props">
        New Item
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">{{ formTitle }}</span>
      </v-card-title>

      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="4" v-for="(header, index) in headers" :key="index">
              <v-text-field :label="header.title"></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue-darken-1" variant="text" @click="$emit('onCancel')">Cancel</v-btn>
        <v-btn color="blue-darken-1" variant="text" @click="$emit('onSave')">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    headers: Array,
    showDialog: Boolean
  },
  emits: ['onCancel', 'onSave', 'update:showDialog'],
  data: () => ({
    editedIndex: -1,
    editedItem: {
      id: 0,
      status: '',
      priority: null,
      created: '',
      receiptType: 'auto',
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    },
    dialog: {
      get() {
        return this.showDialog;
      },
      set(value) {
        this.$emit('update:showDialog', value);
      },
    },
  },
}
</script>
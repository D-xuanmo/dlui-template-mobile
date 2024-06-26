<template>
  <d-form
    :models="FORM_MODEL"
    client-type="MOBILE"
    :store="formStore"
    :disabled="formDisabled"
    :readonly="formReadonly"
    :layout="formLayout"
    label-width="100"
    :view-linkage="ViewLinkageData"
    :hide-label="hideLabel"
    @change="handleChange"
  />
  <d-cell-group title="表单操作" style="margin-top: var(--d-gap-sm)">
    <d-cell title="表单禁用">
      <d-switch v-model="formDisabled" />
    </d-cell>
    <d-cell title="表单只读">
      <d-switch v-model="formReadonly" />
    </d-cell>
    <d-cell title="隐藏 label">
      <d-switch v-model="hideLabel" />
    </d-cell>
    <d-cell title="布局切换">
      <d-radio-group v-model="formLayout" :options="formLayoutOptions" direction="horizontal" />
    </d-cell>
    <d-cell hide-title>
      <d-space :gap="10" wrap>
        <d-button @click="validate">执行校验</d-button>
        <d-button @click="getFormData">获取数据</d-button>
        <d-button @click="updateData">更新数据</d-button>
        <d-button @click="hideFirstRow">隐藏第一行</d-button>
        <d-button @click="showFirstRow">显示第一行</d-button>
        <d-button @click="reset">重置</d-button>
        <d-button @click="updateOptions">更新 options</d-button>
      </d-space>
    </d-cell>
  </d-cell-group>
  <d-cell-group title="表单数据">
    <d-cell>
      <pre style="white-space: break-spaces">
        {{ JSON.stringify(formStore.getFormData(), null, 2) }}
      </pre>
    </d-cell>
  </d-cell-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import FORM_MODEL from './model'
import { DirectionType, FormStore, OnFormChange } from '@xuanmo/dl-ui'
import { ViewLinkageData } from './view-linkage'

const formDisabled = ref(false)
const formReadonly = ref(false)
const hideLabel = ref(false)
const formLayout = ref<DirectionType>('horizontal')

const formStore = new FormStore()

const formLayoutOptions = [
  { label: 'horizontal', value: 'horizontal' },
  { label: 'vertical', value: 'vertical' }
]

const validate = () => {
  formStore
    .validate()
    .then(() => {
      console.log('校验通过')
    })
    .catch((error) => {
      console.log('校验失败', error)
    })
}

const getFormData = () => {
  console.log(formStore.getFormData())
}

const updateData = () => {
  formStore.updateData({
    input: 'input 数据',
    switch: true,
    radio: '3',
    checkbox: ['1', '3'],
    picker: ['3'],
    email: 'example@qq.com',
    rate: 3,
    upload: [
      { url: 'https://upyun.xuanmo.xin/logo/x-logo-1.png', deletable: false },
      { url: 'https://upyun.xuanmo.xin/logo/dl-ui.svg', deletable: true }
    ],
    customInput: '我是自定义数据',
    cascader: ['310000000000', '310100000000', '310104000000', '310104007000'],
    datePicker: '2025/5/18',
    timePicker: '08:35',
    calendarSingle: '2023/3/8',
    calendarMultiple: ['2023/3/8', '2023/3/12'],
    calendarRange: ['2023/3/8', '2023/3/12']
  })
}

const hideFirstRow = () => {
  console.log(formStore.getSingleValue('input'))
  formStore.setDisplay('input', false)
}

const showFirstRow = () => {
  formStore.setDisplay('input', true)
}

const reset = () => {
  formStore.reset()
}

const handleChange: OnFormChange = (value, model) => {
  console.log(value, model)
}

const updateOptions = () => {
  formStore.updateModel('picker', {
    value: [],
    options: [
      { label: '选项11', value: '11' },
      { label: '选项22', value: '22' },
      { label: '选项33', value: '33' }
    ]
  })
}

fetch(
  'https://admin.xuanmo.xin/api/my-admin/p/file/read/335f8ac3-f7f5-4408-ab30-a25000041190'
).then(async (res) => {
  const options = await res.json()
  formStore.updateModel('cascaderPicker', {
    options
  })
  formStore.updateModel('cascader', {
    options
  })
})
</script>

//import * as Vue from 'vue'
const { toRefs, ref } = Vue

//import { onClickOutside } from 'https://cdn.jsdelivr.net/npm/@vueuse/core@9.12.0/+esm'
//import { vOnClickOutside } from 'https://cdn.jsdelivr.net/npm/@vueuse/components@10.0.2/+esm'

import { create } from 'https://cdn.jsdelivr.net/npm/jss@10.10.0/+esm'
import preset from 'https://cdn.jsdelivr.net/npm/jss-preset-default@10.10.0/+esm'
//import bemPlugin from "../../library/jssbem.js";

//import styles from './styles.js'

/*import modal from './modal.css' assert { type: "css" };
document.adoptedStyleSheets = [modal];*/

const url = "./js/components/modal/modal.css";
document.head.innerHTML += `<link type="text/css" rel="stylesheet" href=${url}>`;
//shadowRoot.adoptedStyleSheets = [modal];

//const jss = create(preset())

/*import modal from './modal.css' assert { type: "css" };
document.adoptedStyleSheets = [modal];*/

//console.log("vOnClickOutside",vOnClickOutside)

//Vue.use(vOnClickOutside)

/*

`
<transition name="modal">
  <div>
    <div class="modal-container">
      <div class="modal-header">
        <slot name="header">default header</slot>
      </div>

      <div class="modal-body">
        <slot name="body">default body</slot>
      </div>

      <div class="modal-footer">
        <slot name="footer">
          default footer
          <button
            class="modal-default-button"
            @click="$emit('close')"
          >OK</button>
        </slot>
      </div>
    </div>
  </div>
</transition>
`

<div v-if="show" :class="classes.modal_mask">
      <div class="modal-container">
        <div class="modal-header">
          <slot name="header">default header</slot>
        </div>

        <div class="modal-body">
          <slot name="body">default body</slot>
        </div>

        <div class="modal-footer">
          <slot name="footer">
            default footer
            <button
              class="modal-default-button"
              @click="$emit('close')"
            >OK</button>
          </slot>
        </div>
      </div>
    </div>

*/

const template = /*html*/`
<teleport to="body">
  <transition name="modal">
    <div class="u-modal" v-if="show"> 
      <div class="u-modal__content"> 
        <div class="content"> 
          <div class="content__header">
            <button class="close" @click="$emit('close')"></button>
            <slot name="header">default header</slot>
          </div>
          <div class="content__main"> 
            <slot name="main">default body</slot>
          </div>
          <div class="content__footer"> <a @click="$emit('close')">Entendido </a></div>
        </div>
      </div>
    </div>
  </transition>
</teleport>
`

export default {
  name: 'custom-modal',
  props: {
    show: {
      type: Boolean,
      default: false,
      required: true
    }
  },
  emits: ['close'],
  setup(props) {

    const modalRef = ref(null)

    /*function closeModal() {
      //modal.value = false
      console.log("llegamos close modal")
    }*/

    /*console.log("onClickOutside",onClickOutside)

    onClickOutside(modalRef,
      (event) => {
        console.log(event)
        //$emit('close')
        //show.value = false
      }
    )*/

    //const { classes } = jss.createStyleSheet(styles).attach()

    //const modalRef = ref(null)

    //onClickOutside(modalRef, (event) => console.log(event))

    /*onClickOutside(
      modalRef,
      (event) => {
        console.log(event)
        //$emit('close')
        //show.value = false
      },
    )*/

    //const { show } = toRefs(props)
    //const show$ = ref(false)

    //onClickOutside(show, (event) => console.log(event))
    //onClickOutside(show, (event) => (show.value = false))
    //console.log("props",show.value)
    //let color = ref('orange')
    //let color = ref('#ff0000');
    //onMounted(() => console.log('Mounted from setup!'));

    /*function open(x){
      show$.value = x
    }

    function close(){
      show$.value = false
    }*/

    //open(show)

    //return { classes };
    return { modalRef }
  },
  template: template
}
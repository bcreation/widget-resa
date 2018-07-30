<template>
<div class="tab-pane fade active show">
  <div class="row">
    <div class="col">
      <transition name="fade">
        <div class="alert alert-warning alert-dismissible" role="alert" v-show="errors.show">
          <h6 class="alert-heading">{{translation.errorTitle}}</h6>
          <hr>
          {{errors.msg}}
          <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="errors.show = false">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </transition>
      <form :id="'ticketing-research-form-' + optsWidget.widgetId" method="POST" @submit.prevent="sendDatas">
        <fieldset>
          <legend v-if="translation.widgetTitle">{{translation.widgetTitle}}</legend>
          <div class="form-row">
            <div class="form-group col-md-4">
              <label for="'start-research-' + optsWidget.widgetId">{{translation.dateSelectLabel}}</label>
              <Datepicker 
                :bootstrap-styling="true"
                :calendar-button="true" 
                :calendar-button-icon="'far fa-calendar-alt'" 
                :id="'dp-' + optsWidget.widgetId" 
                :format="translation.dateFormat" 
                :input-class="'dp-input inpt-wdgt'" 
                :language="dpLanguage[optsWidget.language]" 
                :name="'start-research-' + optsWidget.widgetId" 
                v-model="dateStart" 
                />
            </div>
            <div class="form-group col-md-2 offset-md-2">
              <label for="'adult-qty' +  optsWidget.widgetId">{{translation.adultQtyLabel}}</label>
              <select class="form-control slct-wdgt" :id="'adult-qty' +  optsWidget.widgetId" :name="'adult-qty' +  optsWidget.widgetId" v-model="adultQty">
                <option v-for="i of 10" :value="i" :key="i">{{i}}</option>
              </select>
            </div>
            <div class="form-group col-md-2">
                <label for="'adult-qty' +  optsWidget.widgetId">{{translation.childQtyLabel}} {{translation.ageChildLabel}}</label>
                <select class="form-control slct-wdgt" :id="'child-qty' +  optsWidget.widgetId" name="child-qty" v-model="childQty">
                  <option v-for="i of 10" :value="i" :key="i">{{i}}</option>
                </select>
            </div>
            <div class="form-group col-md-2 d-flex align-items-end justify-content-center">
              <button :id="'validSearch-' + optsWidget.widgetId" type="submit" class="btn btn-wdgt btn-primary">Submit</button>
            </div>
          </div>
        </fieldset>
      </form>
      <div class="alert alert-success" v-if="datas">
        {{datas}}
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
import { en, fr } from 'vuejs-datepicker/dist/locale'
import { parseDateGAT } from '@/lib/dateUtils'
import { transformResponse } from '@/lib/globalUtils'
import { getAvailableTicketing } from '@/api/APITicketing'
export default {
  name: 'TicketingTab',
  components: {
    Datepicker,
  },
  props: ['optsWidget', 'dev', 'test'],
  data() {
    return {
      dpLanguage: {
        'fr-FR': fr,
        'en-US': en,
      },
      translation: this.optsWidget.translation[this.optsWidget.language],
      dateStart: new Date(),
      dateEnd: new Date(),
      adultQty: 1,
      childQty: 1,
      nextPage: '',
      urlCORS: this.dev ? 'https://cors-anywhere.herokuapp.com/' : '',
      errors: {
        show: false,
        msg: '',
      },
      datas: '',
    }
  },
  methods: {
    sendDatas() {
      // !Important data format application/x-www-form-urlencoded
      const params = new URLSearchParams()
      params.append('Start', parseDateGAT(this.dateStart))
      params.append('End', parseDateGAT(this.dateStart))
      params.append('AdultQty', this.adultQty)
      params.append('ChildQty', this.childQty)
      let axiosParams = {
        url: this.urlCORS + this.optsWidget.baseWebservice,
        data: params,
        conf: {
          transformResponse: transformResponse,
        },
      }

      return getAvailableTicketing(axiosParams)
        .then((rep) => {
          if (rep.status && rep.status === 200) {
            this.errors.show = false
            this.datas = rep.data
            return true
          }
          return false
        })
        .catch((error) => {
          this.errors.show = true
          this.errors.msg = error
          return error
        })
    },
  },
}
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, 
.fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

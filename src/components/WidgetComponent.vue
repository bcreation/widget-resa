<template>
  <div :id="id" class="row">
    <div class="col">
      <transition name="fade">
        <div class="alert alert-warning alert-dismissible" role="alert" v-show="errors.show">
          {{errors.msg}}
          <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="errors.show = false">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </transition>
      <form :id="'ticketing-research-form-' + opts.widgetId" method="POST" @submit.prevent="sendDatas">
        <fieldset>
          <legend v-if="translation.widgetTitle">{{translation.widgetTitle}}</legend>
          <div class="form-row">
            <div class="form-group col-md-4">
              <label for="'start-research-' + opts.widgetId">{{translation.dateSelectLabel}}</label>
              <Datepicker :id="'dp-' + opts.widgetId" :name="'start-research-' + opts.widgetId" v-model="dateStart" :language="dpLanguage[opts.language]" :format="translation.dateFormat" :input-class="'dp-input inpt-wdgt'" :calendar-button="true" :calendar-button-icon="'far fa-calendar-alt'" :bootstrap-styling="true"/>
            </div>
            <div class="form-group col-md-2 offset-md-2">
              <label for="'adult-qty' +  opts.widgetId">{{translation.adultQtyLabel}}</label>
              <select class="form-control slct-wdgt" :id="'adult-qty' +  opts.widgetId" :name="'adult-qty' +  opts.widgetId" v-model="adultQty">
                <option v-for="i of 10" :value="i" :key="i">{{i}}</option>
              </select>
            </div>
            <div class="form-group col-md-2">
                <label for="'adult-qty' +  opts.widgetId">{{translation.childQtyLabel}} {{translation.ageChildLabel}}</label>
                <select class="form-control slct-wdgt" :id="'child-qty' +  opts.widgetId" name="child-qty" v-model="childQty">
                  <option v-for="i of 10" :value="i" :key="i">{{i}}</option>
                </select>
            </div>
            <div class="form-group col-md-2">
              <label>&nbsp;</label>
              <button :id="'validSearch-' + opts.widgetId" type="submit" class="btn btn-wdgt btn-primary">Submit</button>
            </div>
          </div>
        </fieldset>
      </form>
      <form :id="'valid-families-' + opts.widgetId" method="POST"></form>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
import Datepicker from 'vuejs-datepicker'
import { en, fr } from 'vuejs-datepicker/dist/locale'
import { parseDateGAT } from '@/lib/dateUtils'
import { transformResponse } from '@/lib/globalUtils'

export default {
  name: 'WidgetComponent',
  components: {
    Datepicker,
  },
  props: ['id', 'opts', 'dev', 'test'],
  data() {
    return {
      dpLanguage: {
        'fr-FR': fr,
        'en-US': en,
      },
      translation: this.opts.translation[this.opts.language],
      dateStart: new Date(),
      dateEnd: new Date(),
      adultQty: 1,
      childQty: 1,
      nextPage: '',
      urlCORS: this.dev ? 'https://cors-anywhere.herokuapp.com/' : '',
      validResearch: this.test
        ? this.opts.webservices.validResearchTest
        : this.opts.webservices.validResearch,
      errors: {
        show: false,
        msg: '',
      },
    }
  },
  methods: {
    sendDatas() {
      let form = this.$el.querySelector(
        'form#valid-families-' + this.opts.widgetId,
      )

      // !Important data format application/x-www-form-urlencoded
      const params = new URLSearchParams()
      params.append('Start', parseDateGAT(this.dateStart))
      params.append('End', parseDateGAT(this.dateStart))
      params.append('AdultQty', this.adultQty)
      params.append('ChildQty', this.childQty)
      let axiosParams = {
        url: this.urlCORS + this.validResearch,
        data: params,
        conf: {
          transformResponse: transformResponse,
        },
      }

      return axios
        .post(axiosParams.url, axiosParams.data, axiosParams.conf)
        .then((rep) => {
          if (rep.status && rep.status === 200) {
            this.errors.show = false
            this.nextPage = rep.data.NextPage
            form.action = this.opts.baseWebsiteQA + rep.data.NextPage
            form.submit()
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

import vCharts from './v-charts/v-charts.vue'
import TableForm from './TableForm/index.vue'
import TableList from './TableList/TableList.vue'
import SearchForm from './SearchForm/SearchForm.vue'
import CustomSelect from './custom-select/index.vue'

export * from './v-charts/useCharts';

const components = [SearchForm, TableList, vCharts, CustomSelect, TableForm]

const install = function (Vue: any) {
  components.forEach((app) => {
    Vue.component(app.name, app);
  });
};

export default install;


  <template>
    <div>
      <h1>Data from API</h1>
      <ul>
        <li v-for="item in apiData" :key="item.id">{{ item.name }}</li>
      </ul>
      
      <h1>{{ msg }}</h1>
<p>List all breeds with a checkbox (displaying the number of sub-breeds under every top-level breed)
Max 2 breeds </p>
    </div>
  </template>
  
  <script>
  import ApiService from '../services/APIService'; // Replace with the actual path
  
  export default {
    data() {
      return {
        apiData: [],
      };
    },
    mounted() {
      // Fetch data from the API when the component is mounted
      this.fetchDataFromApi();
    },
    methods: {
      async fetchDataFromApi() {
        try {
          // Call the fetchData method from ApiService
          this.apiData = await ApiService.fetchData();
        } catch (error) {
          // Handle errors here, e.g., show a notification or log the error
          console.error('Error fetching data:', error);
        }
      },
    },
  };
  </script>

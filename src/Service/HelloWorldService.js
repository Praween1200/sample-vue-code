import axios  from "axios";

export default {
    data() {
        return {
            url: 'http://103.60.213.11:9000/',
        }
    },
    methods: {
        getData() {
           return axios.get(this.url + 'admin/bidtype/get-all-bidtypes', {
               headers: {
                'X-CRM-caller-user-id':10,
                'Authorization': 'Basic '+ 'YWRtaW46YWRtaW4='
               }
           }
                ).then((response) => {
                    return response.data;
                })
        },
        postData(postData) {
            return axios.post(this.url + 'admin/region/add-region',
            postData, {
                headers: {
                 'X-CRM-caller-user-id':10,
                 'Authorization': 'Basic '+ 'YWRtaW46YWRtaW4='
                }
            }
                 ).then((response) => {
                     return response.data;
                 })
         }
    }
}
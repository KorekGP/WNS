/**
 * Created by eryk on 28.04.17.
 */

const API_URL = 'localhost:8080/api/';

class ApiConfigurationService {

    static constructUrl(serviceUrl, endpointUrl, id) {
        let resultUrl = API_URL + (serviceUrl || '') + '/' + (endpointUrl || '');
        while (resultUrl.slice(-1) === '/') {
            resultUrl = resultUrl.slice(0, -1);
        }
        if (id) {
            return resultUrl + '/' + id;
        }
        return resultUrl;
    }

}

export default ApiConfigurationService;

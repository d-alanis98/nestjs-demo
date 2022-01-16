import { config } from 'dotenv';
//Contracts
import LoaderService from 'src/shared/services/LoaderService';


/**
 * @author Damian Alanis Ramirez
 * @version 1.0.0
 * Class to load the environment (env variables).
 */
export default class EnvironmentLoader implements LoaderService {
    public load(): void {
        config();
        return;
    }
}


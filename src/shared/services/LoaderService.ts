
/**
 * @author Damian Alanis Ramirez
 * @version 1.0.0
 * Specification for a service loader.
 */
export default interface LoaderService<T = any> {
    load(): void | Boolean | Promise<T>;
}
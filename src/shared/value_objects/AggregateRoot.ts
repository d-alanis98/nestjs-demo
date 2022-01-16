
/**
 * @author Damian Alanis Ramirez
 * @version 1.0.0
 * Abstraction of an aggregate root entity, it provides a method to get entities from primitive values.
 * To be extended in the entity definition.
 */
export class AggregateRoot {

    /**
     * Returns the entity representation of the provided primitive values.
     * 
     * @param {Object} primitiveObject Object with primitive values.
     */
    static fromPrimitives = (primitiveObject: Object) => {
        const entity = new this();
        Object.entries(primitiveObject).forEach(([property, value]) => {
            return entity[property] = value;
        });

        return entity;
    }
}
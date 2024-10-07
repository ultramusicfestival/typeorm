import { EntityManager } from "../../entity-manager/EntityManager"
import { EntityMetadata } from "../../metadata/EntityMetadata"
import { ObjectLiteral } from "../../common/ObjectLiteral"

/**
 * UpdateEvent is an object that broadcaster sends to the entity subscriber when entity is being updated in the database.
 */
export interface TransformEvent<Entity> {
    /**
     * EntityManager used in the event transaction.
     * All database operations in the subscribed event listener should be performed using this entity manager instance.
     */
    manager: EntityManager

    /**
     * Updating entity.
     */
    entity: Entity

    /**
     * Metadata of the entity.
     */
    metadata: EntityMetadata

    /**
     * Updating entity in the database.
     */
    object: ObjectLiteral | undefined
}

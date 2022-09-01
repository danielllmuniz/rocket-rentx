import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class SetDescriptionOnCategories1661458037509 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner. addColumn(
            "categories",
            new TableColumn({
                name: "description",
                type: "varchar",
                isNullable: true
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("categories", "avatar")
    }

}

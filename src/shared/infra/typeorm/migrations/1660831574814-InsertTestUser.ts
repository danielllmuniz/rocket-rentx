import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class InsertTestUser1660831574814 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner. addColumn(
            "users",
            new TableColumn({
                name: "teste",
                type: "varchar",
                isNullable: true
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("users", "avatar")
    }

}

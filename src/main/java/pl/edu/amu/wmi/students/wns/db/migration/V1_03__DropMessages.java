package pl.edu.amu.wmi.students.wns.db.migration;

import org.flywaydb.core.api.migration.spring.SpringJdbcMigration;
import org.springframework.jdbc.core.JdbcTemplate;

/**
 * PartnerCfm Created by eryk on 12.06.17.
 */
public class V1_03__DropMessages implements SpringJdbcMigration {
    @Override
    public void migrate(JdbcTemplate jdbcTemplate) throws Exception {
        jdbcTemplate.execute("DROP TABLE chat_message");
    }
}

package pl.edu.amu.wmi.students.wns.db.migration;

import org.flywaydb.core.api.migration.spring.SpringJdbcMigration;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.security.crypto.password.StandardPasswordEncoder;

/**
 * WNS Created by eryk on 31.05.17.
 */
public class V1_01__StubUsers implements SpringJdbcMigration {


    @Override
    public void migrate(JdbcTemplate jdbcTemplate) throws Exception {
        String password = new StandardPasswordEncoder().encode("admin");
        jdbcTemplate.execute("INSERT INTO wns_user\n" +
                "(\n" +
                "  email,\n" +
                "  enabled,\n" +
                "  password,\n" +
                "  user_role,\n" +
                "  username\n" +
                ") VALUES\n" +
                "  ('dagi12@o2.pl', TRUE, " + password + ", 'ADMIN', 'eryk'),\n" +
                "  ('korek@korek.pl', TRUE, " + password + ", 'GUIDE', 'korek');");
    }
}

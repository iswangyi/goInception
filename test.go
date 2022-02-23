package main

import (
	"database/sql"
	"fmt"
	_ "github.com/go-sql-driver/mysql"
	log "github.com/sirupsen/logrus"
	"github.com/syohex/go-texttable"
)

func main() {

	db, err := sql.Open("mysql", "root:@tcp(127.0.0.1:4000)/")
	if err != nil {
		log.Fatalln(err)
	}
	defer db.Close()

	sql2 := `/*--user=root;--password=fsdaf123bfdsfABCK;--host=127.0.0.1;--port=3306;--execute=1;*/
    inception_magic_start;
    use  ops_gin;
	select * from user ;
    create table t1(id int primary key);
    alter table t1 add index idx_id (id);
    create table t2(jid int primary key);
    inception_magic_commit;`

	rows, err := db.Query(sql2)
	if err != nil {
		log.Fatal(err)
	}
	defer rows.Close()

	cols, err := rows.Columns()
	if err != nil {
		log.Fatalln(err)
	}
	fmt.Println(cols)
	tbl := &texttable.TextTable{}

	tbl.SetHeader(cols[0], cols[1], cols[2], cols[3], cols[4], cols[5], cols[6], cols[7], cols[8], cols[9], cols[10], cols[11])

	var order_id, stage, error_level, stage_status, error_message, sql, affected_rows, sequence, backup_dbname, execute_time, sqlsha1, backup_time []uint8
	for rows.Next() {
		err = rows.Scan(&order_id, &stage, &error_level, &stage_status, &error_message, &sql, &affected_rows, &sequence, &backup_dbname, &execute_time, &sqlsha1, &backup_time)
		tbl.AddRow(string(order_id), string(stage), string(error_level), string(stage_status), string(error_message), string(sql), string(affected_rows), string(sequence), string(backup_dbname), string(execute_time), string(sqlsha1), string(backup_time))
		// tbl.AddRow(string(nil_process(sqlsha1)))
	}

	fmt.Println(tbl.Draw())

}

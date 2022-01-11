(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{416:function(t,_,e){"use strict";e.r(_);var v=e(44),s=Object(v.a)({},(function(){var t=this,_=t.$createElement,e=t._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h3",{attrs:{id:"pt-online-schema-change"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pt-online-schema-change"}},[t._v("#")]),t._v(" pt-online-schema-change")]),t._v(" "),e("ul",[e("li",[t._v("Please download and install "),e("code",[t._v("percona-toolkit")]),t._v(" ("),e("code",[t._v("v3.0.4")]),t._v(" or other campatible version) first.")]),t._v(" "),e("li",[t._v("Please specific pt-osc dir by "),e("code",[t._v("osc_bin_dir")]),t._v(" first，default "),e("code",[t._v("/usr/local/bin")]),t._v(".")])]),t._v(" "),e("h4",{attrs:{id:"options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" Options")]),t._v(" "),e("p",[t._v("you can check "),e("code",[t._v("pt-osc")]),t._v(" options by "),e("code",[t._v("inception show variables like 'osc%';")])]),t._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[t._v("inception "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("show")]),t._v(" variables "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("like")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'osc%'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("Modify in two ways:")]),t._v(" "),e("ul",[e("li",[t._v("one at "),e("code",[t._v("inception set")])])]),t._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[t._v("inception "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" osc_check_interval "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("ul",[e("li",[t._v("another one at config.toml, and start by "),e("code",[t._v("-config=config.toml")])])]),t._v(" "),e("h4",{attrs:{id:"process-command"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#process-command"}},[t._v("#")]),t._v(" process command")]),t._v(" "),e("h5",{attrs:{id:"check-osc-process"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#check-osc-process"}},[t._v("#")]),t._v(" check osc process")]),t._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[t._v("inception get osc processlist"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("result return:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("DBNAME")]),t._v(" "),e("th",[t._v("TABLENAME")]),t._v(" "),e("th",[t._v("COMMAND")]),t._v(" "),e("th",[t._v("SQLSHA1")]),t._v(" "),e("th",[t._v("PERCENT")]),t._v(" "),e("th",[t._v("REMAINTIME")]),t._v(" "),e("th",[t._v("INFOMATION")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("test_inc")]),t._v(" "),e("td",[t._v("t1")]),t._v(" "),e("td",[t._v("alter table t1 add column c33 int")]),t._v(" "),e("td",[t._v("*E53542EFF4E179BE267210114EC5EDBEF9DC5D8F")]),t._v(" "),e("td",[t._v("9")]),t._v(" "),e("td",[t._v("00:36")]),t._v(" "),e("td",[t._v("Copying "),e("code",[t._v("test_inc")]),t._v("."),e("code",[t._v("t1")]),t._v(":   9% 00:36 remain")])])])]),t._v(" "),e("h5",{attrs:{id:"check-specific-osc-process"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#check-specific-osc-process"}},[t._v("#")]),t._v(" check specific osc process")]),t._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[t._v("inception get osc_percent "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*E53542EFF4E179BE267210114EC5EDBEF9DC5D8F'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("result return:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("DBNAME")]),t._v(" "),e("th",[t._v("TABLENAME")]),t._v(" "),e("th",[t._v("SQLSHA1")]),t._v(" "),e("th",[t._v("PERCENT")]),t._v(" "),e("th",[t._v("REMAINTIME")]),t._v(" "),e("th",[t._v("INFOMATION")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("test_inc")]),t._v(" "),e("td",[t._v("t1")]),t._v(" "),e("td",[t._v("*E53542EFF4E179BE267210114EC5EDBEF9DC5D8F")]),t._v(" "),e("td",[t._v("49")]),t._v(" "),e("td",[t._v("00:14")]),t._v(" "),e("td",[t._v("Copying "),e("code",[t._v("test_inc")]),t._v("."),e("code",[t._v("t1")]),t._v(":  49% 00:14 remain")])])])]),t._v(" "),e("h5",{attrs:{id:"stop-specific-osc-process"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#stop-specific-osc-process"}},[t._v("#")]),t._v(" stop specific osc process")]),t._v(" "),e("p",[e("code",[t._v("need to remove auxiliary tables manual")])]),t._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[t._v("inception "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("kill")]),t._v(" osc "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*E53542EFF4E179BE267210114EC5EDBEF9DC5D8F'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- or --")]),t._v("\ninception stop "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("alter")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*E53542EFF4E179BE267210114EC5EDBEF9DC5D8F'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h3",{attrs:{id:"option-description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#option-description"}},[t._v("#")]),t._v(" Option description")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Options")]),t._v(" "),e("th",[t._v("default")]),t._v(" "),e("th",[t._v("type")]),t._v(" "),e("th",[t._v("description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("osc_on")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("bool")]),t._v(" "),e("td",[t._v("OSC switch")])]),t._v(" "),e("tr",[e("td",[t._v("osc_alter_foreign_keys_method")]),t._v(" "),e("td",[t._v("none")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("correspond OSC option "),e("code",[t._v("alter-foreign-keys-method")])])]),t._v(" "),e("tr",[e("td",[t._v("osc_bin_dir")]),t._v(" "),e("td",[t._v("/usr/local/bin")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("pt-online-schema-change script path")])]),t._v(" "),e("tr",[e("td",[t._v("osc_check_alter")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("bool")]),t._v(" "),e("td",[t._v("correspond "),e("code",[t._v("--[no]check-alter")])])]),t._v(" "),e("tr",[e("td",[t._v("osc_check_interval")]),t._v(" "),e("td",[t._v("5")]),t._v(" "),e("td",[t._v("int")]),t._v(" "),e("td",[t._v("correspond "),e("code",[t._v("--check-interval")]),t._v(", means Sleep time between checks for "),e("code",[t._v("--max-lag")]),t._v(".")])]),t._v(" "),e("tr",[e("td",[t._v("osc_check_replication_filters")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("bool")]),t._v(" "),e("td",[t._v("correspond "),e("code",[t._v("--[no]check-replication-filters")])])]),t._v(" "),e("tr",[e("td",[t._v("osc_chunk_size")]),t._v(" "),e("td",[t._v("1000")]),t._v(" "),e("td",[t._v("int")]),t._v(" "),e("td",[t._v("correspond "),e("code",[t._v("--chunk-size")])])]),t._v(" "),e("tr",[e("td",[t._v("osc_chunk_size_limit")]),t._v(" "),e("td",[t._v("4")]),t._v(" "),e("td",[t._v("int")]),t._v(" "),e("td",[t._v("correspond "),e("code",[t._v("--chunk-size-limit")])])]),t._v(" "),e("tr",[e("td",[t._v("osc_chunk_time")]),t._v(" "),e("td",[t._v("1")]),t._v(" "),e("td",[t._v("int")]),t._v(" "),e("td",[t._v("correspond "),e("code",[t._v("--chunk-time")])])]),t._v(" "),e("tr",[e("td",[t._v("osc_check_unique_key_change "),e("code",[t._v("v1.0.5")])]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("bool")]),t._v(" "),e("td",[t._v("correspond "),e("code",[t._v("--[no]check_unique_key_change")]),t._v(", if check unique index.")])]),t._v(" "),e("tr",[e("td",[t._v("osc_critical_thread_connected")]),t._v(" "),e("td",[t._v("1000")]),t._v(" "),e("td",[t._v("int")]),t._v(" "),e("td",[t._v("correspond "),e("code",[t._v("--critical-load中的thread_connected")])])]),t._v(" "),e("tr",[e("td",[t._v("osc_critical_thread_running")]),t._v(" "),e("td",[t._v("80")]),t._v(" "),e("td",[t._v("int")]),t._v(" "),e("td",[t._v("correspond "),e("code",[t._v("--critical-load中的thread_running")])])]),t._v(" "),e("tr",[e("td",[t._v("osc_drop_new_table")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("bool")]),t._v(" "),e("td",[t._v("correspond "),e("code",[t._v("--[no]drop-new-table")])])]),t._v(" "),e("tr",[e("td",[t._v("osc_drop_old_table")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("bool")]),t._v(" "),e("td",[t._v("correspond "),e("code",[t._v("--[no]drop-old-table")])])]),t._v(" "),e("tr",[e("td",[t._v("osc_max_lag")]),t._v(" "),e("td",[t._v("3")]),t._v(" "),e("td",[t._v("int")]),t._v(" "),e("td",[t._v("correspond "),e("code",[t._v("--max-lag")])])]),t._v(" "),e("tr",[e("td",[t._v("osc_max_thread_connected")]),t._v(" "),e("td",[t._v("1000")]),t._v(" "),e("td",[t._v("int")]),t._v(" "),e("td",[t._v("correspond "),e("code",[t._v("--max-load中的thread_connected")])])]),t._v(" "),e("tr",[e("td",[t._v("osc_max_thread_running")]),t._v(" "),e("td",[t._v("80")]),t._v(" "),e("td",[t._v("int")]),t._v(" "),e("td",[t._v("correspond "),e("code",[t._v("--max-load中的thread_running")])])]),t._v(" "),e("tr",[e("td",[t._v("osc_min_table_size")]),t._v(" "),e("td",[t._v("16")]),t._v(" "),e("td",[t._v("int")]),t._v(" "),e("td",[t._v("Switch set，if value is 0, all ALTER will use OSC.if values is not 0, only the table size more than the values, use OSC. unit in MB，table size = "),e("code",[t._v('select (DATA_LENGTH + INDEX_LENGTH)/1024/1024 from information_schema.tables where table_schema = "dbname" and table_name = "tablename"')])])]),t._v(" "),e("tr",[e("td",[t._v("osc_print_none")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("bool")]),t._v(" "),e("td",[t._v("If value is 1, do not print. If values is 0, print osc output in inception result error sets.")])]),t._v(" "),e("tr",[e("td",[t._v("osc_print_sql")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("bool")]),t._v(" "),e("td",[t._v("correspond "),e("code",[t._v("--print")])])]),t._v(" "),e("tr",[e("td",[t._v("osc_recursion_method")]),t._v(" "),e("td",[t._v("processlist")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("correspond "),e("code",[t._v("-ecursion_method")])])])])])])}),[],!1,null,null,null);_.default=s.exports}}]);
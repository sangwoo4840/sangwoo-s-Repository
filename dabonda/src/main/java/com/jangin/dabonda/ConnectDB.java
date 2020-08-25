package com.jangin.dabonda;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class ConnectDB {
	private Connection conn;
	private Statement stmt;
	private ResultSet rs;
	
	public final static String JANGIN_HQ = "Jangin_HQ";
	public final static String JANGIN_HQ_TEST1 = "uniERP_TEST1";
	public final static String JANGIN_HQ_TEST2 = "uniERP_TEST2";
	public final static String JANGIN_SB = "Jangin_SB";
	public final static String WOW2D = "wow2d_new";
	public final static String WOW2D_TEST = "wow2d_new_test";

	public boolean accessDB(String db, String dml, String sql) {
		String url = "jdbc:sqlserver://210.121.237.5:1433;database=" + db + ";user=sa;password=jangin@SQL2008!;";

		try {
			if (conn == null) {
				Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
				conn = DriverManager.getConnection(url);
				stmt = conn.createStatement();
			}

			if (dml.equals("select"))
				rs = stmt.executeQuery(sql);
			else if (dml.equals("procedure")) {
				stmt.execute(sql);
				rs = stmt.getResultSet();
			} else
				stmt.executeUpdate(sql);
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}

		return true;
	}

	public boolean closeDB() {
		try {
			if (rs != null)
				rs.close();
			if (stmt != null)
				stmt.close();
			if (conn != null)
				conn.close();
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
		return true;
	}
	
	public ResultSet rs() {
		return rs;
	}
}

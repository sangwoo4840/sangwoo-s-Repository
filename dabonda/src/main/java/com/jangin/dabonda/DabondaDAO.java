package com.jangin.dabonda;

import java.util.ArrayList;
import java.util.List;

public class DabondaDAO {
	private ConnectDB db;

	public boolean insertLog(UserVO vo) {
		boolean success;
		db = new ConnectDB();
		StringBuilder sql = new StringBuilder();
		sql.append("insert into MoLogin(email, access_time, ip_addr, session_id, os, browser) values('");
		sql.append(vo.getEmail());
		sql.append("', getdate(),'");
		sql.append(vo.getIp_addr());
		sql.append("','");
		sql.append(vo.getSession_id());
		sql.append("','");
		sql.append(vo.getOs());
		sql.append("','");
		sql.append(vo.getBrowser());
		sql.append("')");

		if (db.accessDB(ConnectDB.WOW2D, "insert", sql.toString()))
			success = true;
		else
			success = false;
		db.closeDB();

		return success;
	}
	
	public boolean insertLog(LogVO vo) {
		boolean success;
		db = new ConnectDB();
		StringBuilder sql = new StringBuilder();
		sql.append("insert into MoAccessLog(access_time, email, pid) values(getdate(), '");
		sql.append(vo.getEmail());
		sql.append("', '");
		sql.append(vo.getPid());
		sql.append("')");

		if (db.accessDB(ConnectDB.WOW2D, "insert", sql.toString()))
			success = true;
		else
			success = false;
		db.closeDB();

		return success;
	}

	public List<UserVO> selectProgram(String email) {
		db = new ConnectDB();
		StringBuilder sql = new StringBuilder();
		sql.append("exec usp_mo_user_program '");
		sql.append(email);
		sql.append("'");

		List<UserVO> list = new ArrayList<UserVO>();
		UserVO vo;

		if (db.accessDB(ConnectDB.WOW2D, "select", sql.toString())) {
			try {
				while (db.rs().next()) {
					vo = new UserVO();
					vo.setPid(db.rs().getString("pid"));
					vo.setUrl(db.rs().getString("url"));
					vo.setIcon(db.rs().getString("icon"));
					vo.setMenu(db.rs().getString("menu"));
					vo.setPpid(db.rs().getString("ppid"));
					vo.setPgroup(db.rs().getString("pgroup"));
					list.add(vo);
				}
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		db.closeDB();

		return list;
	}

	public List<UserVO> getUserList() {
		db = new ConnectDB();
		StringBuilder sql = new StringBuilder();
		sql.append("select team, email, name from MoUser order by team, name");

		List<UserVO> list = new ArrayList<UserVO>();
		UserVO vo;

		if (db.accessDB(ConnectDB.WOW2D, "select", sql.toString())) {
			try {
				while (db.rs().next()) {
					vo = new UserVO();
					vo.setTeam(db.rs().getString("team"));
					vo.setEmail(db.rs().getString("email"));
					vo.setName(db.rs().getString("name"));
					list.add(vo);
				}
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		db.closeDB();

		return list;
	}
	
	public boolean insertUser(UserVO vo) {
		db = new ConnectDB();
		StringBuilder sql = new StringBuilder();
		sql.append("insert into MoUser(email, name, team, auth) values('");
		sql.append(vo.getEmail());
		sql.append("','");
		sql.append(vo.getName());
		sql.append("','");
		sql.append(vo.getTeam());
		sql.append("','')");
		
		boolean result = db.accessDB(ConnectDB.WOW2D, "insert", sql.toString()); 
		return result;
	}
	
	public boolean deleteUser(String email) {
		db = new ConnectDB();
		StringBuilder sql = new StringBuilder();
		sql.append("delete from MoUser where email = '");
		sql.append(email);
		sql.append("'");
		
		boolean result = db.accessDB(ConnectDB.WOW2D, "delete", sql.toString()); 
		return result;
	}

	public UserVO selectUser(String email) {
		db = new ConnectDB();
		StringBuilder sql = new StringBuilder();
		sql.append("select email, name, team from MoUser(nolock) where email = '");
		sql.append(email);
		sql.append("'");

		UserVO vo = new UserVO();

		if (db.accessDB(ConnectDB.WOW2D, "select", sql.toString())) {
			try {
				db.rs().next();
				vo.setEmail(db.rs().getString("email"));
				vo.setName(db.rs().getString("name"));
				vo.setTeam(db.rs().getString("team"));
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		db.closeDB();

		return vo;
	}

	public List<UserVO> selectAllProgram() {
		db = new ConnectDB();
		StringBuilder sql = new StringBuilder();
		sql.append("select * from MoProgram(nolock) order by pgroup");

		List<UserVO> list = new ArrayList<UserVO>();
		UserVO vo;

		if (db.accessDB(ConnectDB.WOW2D, "select", sql.toString())) {
			try {
				while (db.rs().next()) {
					vo = new UserVO();
					vo.setPid(db.rs().getString("pid"));
					vo.setUrl(db.rs().getString("url"));
					vo.setIcon(db.rs().getString("icon"));
					vo.setMenu(db.rs().getString("menu"));
					vo.setPpid(db.rs().getString("ppid"));
					vo.setPgroup(db.rs().getString("pgroup"));
					list.add(vo);
				}
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		db.closeDB();

		return list;
	}
	
	public boolean updateAuth(UserVO vo) {
		db = new ConnectDB();
		StringBuilder sql = new StringBuilder();
		sql.append("update MoUser set auth = '");
		sql.append(vo.getPid());
		sql.append("' where email = '");
		sql.append(vo.getEmail());
		sql.append("'");
		
		boolean result = db.accessDB(ConnectDB.WOW2D, "update", sql.toString()); 
		return result;
	}
}

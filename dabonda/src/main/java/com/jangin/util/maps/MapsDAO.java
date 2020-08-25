package com.jangin.util.maps;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.jangin.dabonda.ConnectDB;

public class MapsDAO {
	private ConnectDB db;
	
	public String getUserLevel(String user) {
		db = new ConnectDB();
		StringBuilder sql = new StringBuilder();
		sql.append("select	 level\n");
		sql.append("from	 MoUser\n");
		sql.append("where	 email = '");
		sql.append(user);
		sql.append("'");
		db.accessDB(ConnectDB.WOW2D, "select", sql.toString());
		
		String level = new String();
		try {
			db.rs().next();
			level = db.rs().getString("level");
		} catch (SQLException e) {
			e.printStackTrace();
			db.closeDB();
			return null;
		}
		db.closeDB();
		
		return level;
	}

	public List<AgencyVO> getAgencyInfo() {
		db = new ConnectDB();
		StringBuilder sql = new StringBuilder();
		sql.append("select	 *\n");
		sql.append("from	 Agency_Data\n");
		sql.append("order by office");
		db.accessDB(ConnectDB.WOW2D, "select", sql.toString());
		List<AgencyVO> list = new ArrayList<AgencyVO>();
		AgencyVO vo;

		try {
			while (db.rs().next()) {
				vo = new AgencyVO();
				vo.setOffice(db.rs().getString("office"));
				vo.setAgency(db.rs().getString("agency"));
				vo.setDirect(db.rs().getString("direct"));
				vo.setSpecialty(db.rs().getString("specialty"));
				vo.setManager(db.rs().getString("manager"));
				vo.setBp_cd(db.rs().getString("bp_cd"));
				vo.setLicensee_no(db.rs().getString("licensee_no"));
				vo.setLicensee_nm(db.rs().getString("licensee_nm"));
				vo.setLicensee_email(db.rs().getString("licensee_email"));
				vo.setPhone(db.rs().getString("phone"));
				vo.setBusiness_hours(db.rs().getString("business_hours"));
				vo.setParking_lot(db.rs().getString("parking_lot"));
				vo.setLot_addr(db.rs().getString("lot_addr"));
				vo.setRoad_addr(db.rs().getString("road_addr"));
				vo.setZip_code(db.rs().getString("zip_code"));
				vo.setX(db.rs().getString("x"));
				vo.setY(db.rs().getString("y"));
				vo.setExt1(db.rs().getString("ext1"));
				list.add(vo);
			}
		} catch (Exception e) {
			e.printStackTrace();
			db.closeDB();
			return null;
		}
		db.closeDB();

		return list;
	}
	
	public List<ApartmentVO> getApartmentInfo(String date) {
		db = new ConnectDB();
		StringBuilder sql = new StringBuilder();
		sql.append("select	 *\n");
		sql.append("from	 Apartment_Data\n");
		sql.append("where	 yyyymm = '");
		sql.append(date);
		sql.append("'");
		sql.append("order by location");
		db.accessDB(ConnectDB.WOW2D, "select", sql.toString());
		List<ApartmentVO> list = new ArrayList<ApartmentVO>();
		ApartmentVO vo;

		try {
			while (db.rs().next()) {
				vo = new ApartmentVO();
				vo.setSeq(db.rs().getInt("seq"));
				vo.setYyyymm(db.rs().getString("yyyymm"));
				vo.setApt_nm(db.rs().getString("apt_nm"));
				vo.setHousehold_no(db.rs().getString("household_no"));
				vo.setArea(db.rs().getString("area"));
				vo.setLocation(db.rs().getString("location"));
				vo.setAddr(db.rs().getString("addr"));
				vo.setX(db.rs().getString("x"));
				vo.setY(db.rs().getString("y"));
				vo.setUrl(db.rs().getString("url"));
				list.add(vo);
			}
		} catch (Exception e) {
			e.printStackTrace();
			db.closeDB();
			return null;
		}
		db.closeDB();

		return list;
	}
	
	public boolean insertAgency(AgencyVO vo) {
		db = new ConnectDB();
		StringBuilder sql = new StringBuilder();
		sql.append("insert into Agency_Data(office, agency, direct, specialty, manager, bp_cd, licensee_no, licensee_nm, licensee_email, phone, business_hours, parking_lot, lot_addr, road_addr, zip_code, x, y, ext1, isrt_dt, isrt_user, updt_dt, updt_user)\n");
		sql.append("values('");
		sql.append(vo.getOffice());
		sql.append("', '");
		sql.append(vo.getAgency());
		sql.append("', '");
		sql.append(vo.getDirect());
		sql.append("', '");
		sql.append(vo.getSpecialty());
		sql.append("', '");
		sql.append(vo.getManager());
		sql.append("', '");
		sql.append(vo.getBp_cd());
		sql.append("', '");
		sql.append(vo.getLicensee_no());
		sql.append("', '");
		sql.append(vo.getLicensee_nm());
		sql.append("', '");
		sql.append(vo.getLicensee_email());
		sql.append("', '");
		sql.append(vo.getPhone());
		sql.append("', '");
		sql.append(vo.getBusiness_hours());
		sql.append("', '");
		sql.append(vo.getParking_lot());
		sql.append("', '");
		sql.append(vo.getLot_addr());
		sql.append("', '");
		sql.append(vo.getRoad_addr());
		sql.append("', '");
		sql.append(vo.getZip_code());
		sql.append("', '");
		sql.append(vo.getX());
		sql.append("', '");
		sql.append(vo.getY());
		sql.append("', '");
		sql.append(vo.getExt1());
		sql.append("', getdate(), '");
		sql.append(vo.getUser());
		sql.append("', getdate(), '");
		sql.append(vo.getUser());
		sql.append("')\n");
		
		return db.accessDB(ConnectDB.WOW2D, "insert", sql.toString());
	}
	
	public boolean updateAgency(AgencyVO vo) {
		db = new ConnectDB();
		StringBuilder sql = new StringBuilder();
		sql.append("update Agency_Data\n");
		sql.append("set office = '");
		sql.append(vo.getOffice());
		sql.append("', agency = '");
		sql.append(vo.getAgency());
		sql.append("', direct = '");
		sql.append(vo.getDirect());
		sql.append("', specialty = '");
		sql.append(vo.getSpecialty());
		sql.append("', manager = '");
		sql.append(vo.getManager());
		sql.append("', bp_cd = '");
		sql.append(vo.getBp_cd());
		sql.append("', licensee_no = '");
		sql.append(vo.getLicensee_no());
		sql.append("', licensee_nm = '");
		sql.append(vo.getLicensee_nm());
		sql.append("', licensee_email = '");
		sql.append(vo.getLicensee_email());
		sql.append("', phone = '");
		sql.append(vo.getPhone());
		sql.append("', business_hours = '");
		sql.append(vo.getBusiness_hours());
		sql.append("', parking_lot = '");
		sql.append(vo.getParking_lot());
		sql.append("', lot_addr = '");
		sql.append(vo.getLot_addr());
		sql.append("', road_addr = '");
		sql.append(vo.getRoad_addr());
		sql.append("', zip_code = '");
		sql.append(vo.getZip_code());
		sql.append("', x = '");
		sql.append(vo.getX());
		sql.append("', y = '");
		sql.append(vo.getY());
		sql.append("', ext1 = '");
		sql.append(vo.getExt1());
		sql.append("', updt_dt = getdate(), updt_user = '");
		sql.append(vo.getUser());
		sql.append("'\n");
		sql.append("where agency = '");
		sql.append(vo.getAgency());
		sql.append("'\n");
		
		return db.accessDB(ConnectDB.WOW2D, "update", sql.toString());
	}
	
	public boolean deleteAgency(AgencyVO vo) {
		db = new ConnectDB();
		StringBuilder sql = new StringBuilder();
		sql.append("delete from Agency_Data\n");
		sql.append("where agency = '");
		sql.append(vo.getAgency());
		sql.append("'\n");
		
		return db.accessDB(ConnectDB.WOW2D, "delete", sql.toString());
	}
	
	public boolean insertApartment(ApartmentVO vo) {
		db = new ConnectDB();
		StringBuilder sql = new StringBuilder();
		sql.append("insert into Apartment_Data(yyyymm, apt_nm, household_no, area, location, addr, x, y, url, isrt_dt, isrt_user, updt_dt, updt_user)\n");
		sql.append("values('");
		sql.append(vo.getYyyymm());
		sql.append("', '");
		sql.append(vo.getApt_nm());
		sql.append("', '");
		sql.append(vo.getHousehold_no());
		sql.append("', '");
		sql.append(vo.getArea());
		sql.append("', '");
		sql.append(vo.getLocation());
		sql.append("', '");
		sql.append(vo.getAddr());
		sql.append("', '");
		sql.append(vo.getX());
		sql.append("', '");
		sql.append(vo.getY());
		sql.append("', '");
		sql.append(vo.getUrl());
		sql.append("', getdate(), '");
		sql.append(vo.getUser());
		sql.append("', getdate(), '");
		sql.append(vo.getUser());
		sql.append("')\n");
		
		return db.accessDB(ConnectDB.WOW2D, "insert", sql.toString());
	}
	
	public boolean updateApartment(ApartmentVO vo) {
		db = new ConnectDB();
		StringBuilder sql = new StringBuilder();
		sql.append("update Apartment_Data\n");
		sql.append("set yyyymm = '");
		sql.append(vo.getYyyymm());
		sql.append("', apt_nm = '");
		sql.append(vo.getApt_nm());
		sql.append("', household_no = '");
		sql.append(vo.getHousehold_no());
		sql.append("', area = '");
		sql.append(vo.getArea());
		sql.append("', location = '");
		sql.append(vo.getLocation());
		sql.append("', addr = '");
		sql.append(vo.getAddr());
		sql.append("', x = '");
		sql.append(vo.getX());
		sql.append("', y = '");
		sql.append(vo.getY());
		sql.append("', url = '");
		sql.append(vo.getUrl());
		sql.append("', updt_dt = getdate(), updt_user = '");
		sql.append(vo.getUser());
		sql.append("'\n");
		sql.append("where seq = '");
		sql.append(vo.getSeq());
		sql.append("'\n");
		
		return db.accessDB(ConnectDB.WOW2D, "update", sql.toString());
	}
	
	public boolean deleteApartment(ApartmentVO vo) {
		db = new ConnectDB();
		StringBuilder sql = new StringBuilder();
		sql.append("delete from Apartment_Data\n");
		sql.append("where seq = '");
		sql.append(vo.getSeq());
		sql.append("'\n");
		
		return db.accessDB(ConnectDB.WOW2D, "delete", sql.toString());
	}
}

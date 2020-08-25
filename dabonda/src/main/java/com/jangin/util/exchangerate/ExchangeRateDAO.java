package com.jangin.util.exchangerate;

import java.util.ArrayList;
import java.util.List;

import com.jangin.dabonda.ConnectDB;

public class ExchangeRateDAO {
	private ConnectDB db;

	public List<ExchangeRateVO> selectExchange(String date) {
		db = new ConnectDB();
		StringBuilder sql = new StringBuilder();
		sql.append("exec usp_get_exchange '");
		sql.append(date);
		sql.append("'");
		db.accessDB(ConnectDB.WOW2D, "procedure", sql.toString());
		List<ExchangeRateVO> list = new ArrayList<ExchangeRateVO>();
		ExchangeRateVO vo;

		try {
			while (db.rs().next()) {
				vo = new ExchangeRateVO();
				vo.setDate(db.rs().getString("Date"));
				vo.setUSD(db.rs().getString("USD"));
				vo.setEUR(db.rs().getString("EUR"));
				vo.setJPY(db.rs().getString("JPY"));
				vo.setDatetime(db.rs().getString("datetime"));
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
	
	public List<ExchangeRateVO> selectExchange_dtl(String date) {
		db = new ConnectDB();
		StringBuilder sql = new StringBuilder();
		sql.append("exec usp_get_exchange_dtl '");
		sql.append(date);
		sql.append("'");
		db.accessDB(ConnectDB.WOW2D, "procedure", sql.toString());
		List<ExchangeRateVO> list = new ArrayList<ExchangeRateVO>();
		ExchangeRateVO vo;

		try {
			while (db.rs().next()) {
				vo = new ExchangeRateVO();
				vo.setDate(db.rs().getString("Date"));
				vo.setUSD(db.rs().getString("USD"));
				vo.setEUR(db.rs().getString("EUR"));
				vo.setJPY(db.rs().getString("JPY"));
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
}
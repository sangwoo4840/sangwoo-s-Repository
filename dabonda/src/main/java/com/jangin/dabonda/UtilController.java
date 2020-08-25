package com.jangin.dabonda;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.jangin.util.drivingdaily.DrivingDailyService;
import com.jangin.util.exchangerate.ExchangeRateService;
import com.jangin.util.maps.MapsService;

@Controller
public class UtilController {
	@Autowired
	private HttpServletRequest request;
	@Autowired
	private ModelAndView mav;
	@Autowired
	private ExchangeRateService exchangerate;
	@Autowired
	private MapsService maps;
	@Autowired
	private DrivingDailyService drivingdaily;
	
	// 환율 정보
	@RequestMapping(value = "/exchangerate", method = {RequestMethod.GET, RequestMethod.POST})
	public ModelAndView exchangerate() {
		mav = exchangerate.execute(1);
		return mav;
	}
		
	@RequestMapping(value = "/exchangerate/exchangerate.json", method = RequestMethod.GET)
	public @ResponseBody Map<?, ?> create_exchange(ModelMap model) {
		model.put("exchangerate", exchangerate.create_exchange());
		return model;
	}
	
	@RequestMapping(value = "/exchangerate/dtl", method = {RequestMethod.GET, RequestMethod.POST})
	public ModelAndView exchangerate_dtl() {
		mav = exchangerate.execute(2);
		return mav;
	}
		
	@RequestMapping(value = "/exchangerate/dtl/exchangerate_dtl.json", method = RequestMethod.GET)
	public @ResponseBody Map<?, ?> create_exchange_dtl(ModelMap model) {
		model.put("exchangerate", exchangerate.create_exchange_dtl());
		return model;
	}
	
	// 지도
	@RequestMapping(value = "/maps", method = RequestMethod.GET)
	public ModelAndView maps() {
		mav = maps.execute(1);
		return mav;
	}
	
	@RequestMapping(value = "/maps/agencymap.json", method = RequestMethod.GET)
	public @ResponseBody Map<?, ?> create_agencymap(ModelMap model) {
		model.put("agencymap", maps.create_agencymap());
		return model;
	}
	
	@RequestMapping(value = "/maps/apartmentmap.json", method = RequestMethod.GET)
	public @ResponseBody Map<?, ?> create_apartmentmap(ModelMap model) {
		model.put("apartmentmap", maps.create_apartmentmap());
		return model;
	}
	
	@RequestMapping(value = "/maps/mapsdata", method = RequestMethod.GET)
	public ModelAndView mapsdata() {
		mav = maps.execute(2);
		return mav;
	}
	
	@RequestMapping(value = "/maps/mapsdata/editagency", method = RequestMethod.POST)
	public ModelAndView editagency() {
		mav = maps.execute(3);
		return mav;
	}
	
	@RequestMapping(value = "/maps/mapsdata/editapartment", method = RequestMethod.POST)
	public ModelAndView editapartment() {
		mav = maps.execute(4);
		return mav;
	}
	
	// 업무용승용차 운행기록
	@RequestMapping(value = "/drivingdaily", method = {RequestMethod.GET, RequestMethod.POST})
	public ModelAndView drivingdaily() {
		mav = drivingdaily.execute(1);
		return mav;
	}
	
	@RequestMapping(value = "/drivingdaily/drivingdaily.json", method = RequestMethod.GET)
	public @ResponseBody Map<?, ?> getDrivingdaily(ModelMap model) {
		model.put("drivingdaily", drivingdaily.getDrivingdaily());
		return model;
	}
	
	@RequestMapping(value = "/drivingdaily/drivingdailylist.json", method = RequestMethod.GET)
	public @ResponseBody Map<?, ?> getDrivingdailyList(ModelMap model) {
		model.put("drivingdailylist", drivingdaily.getDrivingdailyList());
		return model;
	}
	
	// 붙박이 시뮬
	@RequestMapping(value = "/ws", method = {RequestMethod.GET, RequestMethod.POST})
	public ModelAndView wardrobeSimulation() {
		mav.setViewName("util/block_page");
		mav.addObject("mwow2d", "");
		mav.addObject("on_user", "n");
		String mw_id = "";
		String auth = "B";

		ConnectDB db = new ConnectDB();
		StringBuilder sql = new StringBuilder();
		
		if (request.getParameter("mwow2d") == null) {
			String ipAddress = getClientIP(request);
			
			sql.append("SELECT	 TOP 1 AUTH \n");
			sql.append("FROM	 WS_AUTH \n");
			sql.append("WHERE	 TYPE = 'IP' \n");
			sql.append("AND		 dbo.ufn_IpToInt('"+ipAddress+"') BETWEEN dbo.ufn_IpToInt(S_IP) AND dbo.ufn_IpToInt(E_IP) \n");
			sql.append("ORDER BY AUTH DESC \n");
			db.accessDB(ConnectDB.WOW2D, "select", sql.toString());
		
			try {
				if (db.rs().next()) {
					auth = db.rs().getString("AUTH");	
				}
			} catch (SQLException e) {
				e.printStackTrace();
				db.closeDB();
				return mav;
			}
			db.closeDB();
		} else {
			mw_id = request.getParameter("mwow2d");
			
			sql.append("SELECT	 COUNT(*) AS COUNT \n");
			sql.append("FROM	 MW_USER \n");
			sql.append("WHERE	 USER_ID = '"+mw_id+"' \n");
			db.accessDB(ConnectDB.WOW2D, "select", sql.toString());
		
			try {
				if (db.rs().next()) {
					if (db.rs().getInt("COUNT") > 0) {
						auth = "A";
						mav.addObject("mwow2d", mw_id);
						mav.addObject("on_user", "y");
					}
				}
			} catch (SQLException e) {
				e.printStackTrace();
				db.closeDB();
				return mav;
			}
			db.closeDB();
		}
		
		if (auth.equals("B"))
			return mav;
		
		mav.setViewName("util/wardrobe_simulation");
		
//		String[] ipAddressTemp = ipAddress.split("\\.");
//		long ipAddressLong = (Long.parseLong(ipAddressTemp[0]) << 24) + (Long.parseLong(ipAddressTemp[1]) << 16) + (Long.parseLong(ipAddressTemp[2]) << 8) + Long.parseLong(ipAddressTemp[3]);
//		System.out.println(ipAddressLong);
//		
//		if (ipAddressLong == 2038791941L
//				|| (ipAddressLong >= 3531205888L && ipAddressLong <= 3531206015L)
//				|| (ipAddressLong >= 990776577L && ipAddressLong <= 990776830L)
//				|| ipAddressLong == 2950637260L)
			return mav;
	}
	
	@RequestMapping(value = "/ws/result", method = RequestMethod.GET)
	public @ResponseBody Map<?, ?> getWsResult(ModelMap model) {
		String type = "";
		if (request.getParameter("type") != null)
			type = request.getParameter("type");
		String kind = "";
		if (request.getParameter("kind") != null)
			kind = request.getParameter("kind");
		int width = 0;
		if (request.getParameter("width") != null)
			width = Integer.parseInt(request.getParameter("width"));
		int height = 0;
		if (request.getParameter("height") != null)
			height = Integer.parseInt(request.getParameter("height"));
		String body = "";
		if (request.getParameter("body") != null)
			body = request.getParameter("body");
		String door = "";
		if (request.getParameter("door") != null)
			door = request.getParameter("door");
		String jabara = "";
		if (request.getParameter("jabara") != null)
			jabara = request.getParameter("jabara");
		String jabara_sub = "";
		if (request.getParameter("jabara_sub") != null)
			jabara_sub = request.getParameter("jabara_sub");
		int pillar = 0;
		if (request.getParameter("pillar") != null)
			pillar = (int) Math.round(Double.parseDouble(request.getParameter("pillar")));
		String ep = "";
		if (request.getParameter("ep") != null)
			ep = request.getParameter("ep");
		String option = "";
		if (request.getParameter("option") != null)
			option = request.getParameter("option");
		
		ConnectDB db = new ConnectDB();
		StringBuilder sql = new StringBuilder();
		sql.append("exec USP_GET_WARDROBE_ITEM @type='");
		sql.append(type);
		sql.append("', @kind='");
		sql.append(kind);
		sql.append("', @width=");
		sql.append(width);
		sql.append(", @height=");
		sql.append(height);
		sql.append(", @body='");
		sql.append(body);
		sql.append("', @door='");
		sql.append(door);
		sql.append("', @jabara='");
		sql.append(jabara);
		sql.append("', @jabara_sub='");
		sql.append(jabara_sub);
		sql.append("', @pillar=");
		sql.append(pillar);
		sql.append(", @ep='");
		sql.append(ep);
		sql.append("', @option='");
		sql.append(option);
		sql.append("' ");
		System.out.println(sql.toString());
		db.accessDB(ConnectDB.WOW2D, "procedure", sql.toString());
		List<Map<String, Object>> jlist = new ArrayList<Map<String,Object>>();
		Map<String, Object> map;
		System.out.println(sql);
		try {
			while (db.rs().next()) {
				map = new HashMap<String, Object>();
				map.put("dp1", db.rs().getString("DP1"));
				map.put("dp2", db.rs().getString("DP2"));
				map.put("item_cd", db.rs().getString("ITEM_CD"));
				map.put("item_nm", db.rs().getString("ITEM_NM"));
				map.put("qty", db.rs().getInt("QTY"));
				map.put("factory_price", db.rs().getInt("FACTORY_PRICE"));
				map.put("factory_amt", db.rs().getInt("FACTORY_AMT"));
				map.put("retail_price", db.rs().getInt("RETAIL_PRICE"));
				map.put("retail_amt", db.rs().getInt("RETAIL_AMT"));
				map.put("issue_qty", db.rs().getInt("ISSUE_QTY"));
				jlist.add(map);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		db.closeDB();
		
		model.put("wsresult", jlist);
		return model;
	}
	
	public String getClientIP(HttpServletRequest request) {
	     String ip = request.getHeader("X-FORWARDED-FOR"); 
	     
	     if(ip == null || ip.length() == 0) {
	         ip = request.getHeader("Proxy-Client-IP");
	     }
	     if(ip == null || ip.length() == 0) {
	         ip = request.getHeader("WL-Proxy-Client-IP");  // 웹로직
	     }
	     if(ip == null || ip.length() == 0) {
	         ip = request.getRemoteAddr() ;
	     }
	     return ip;
	 }
}

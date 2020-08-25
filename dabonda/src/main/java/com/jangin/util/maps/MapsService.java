package com.jangin.util.maps;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.ModelAndView;

import com.jangin.dabonda.DabondaDAO;
import com.jangin.dabonda.LogVO;

@Component
public class MapsService {
	@Autowired
	private HttpServletRequest request;
	@Autowired
	private HttpSession session;
	@Autowired
	private ModelAndView mav;

	public ModelAndView execute(int index) {
		DabondaDAO dao = new DabondaDAO();
		LogVO vo = new LogVO();
		vo.setEmail(session.getAttribute("dabonda").toString());
		
		switch (index) {
		case 1:
			mav = createMap();
			vo.setPid("utl_map");
			break;
		case 2:
			mav = mapsData();
			break;
		case 3:
			mav = editAgency();
			break;
		case 4:
			mav = editApartment();
			break;
		}
		if (vo.getPid() != null)
			dao.insertLog(vo);

		return mav;
	}
	
	private ModelAndView createMap() {
		MapsDAO dao = new MapsDAO();
		Calendar calendar = Calendar.getInstance();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM");
		String date = sdf.format(calendar.getTime());
		String userLevel = dao.getUserLevel(session.getAttribute("dabonda").toString());
		
		mav.addObject("date", date);
		mav.addObject("userLevel", userLevel);
		mav.setViewName("util/maps");
		
		return mav;
	}
	
	public List<Map<String, Object>> create_agencymap() {
		MapsDAO dao = new MapsDAO();

		List<AgencyVO> list = dao.getAgencyInfo();
		List<Map<String, Object>> jlist = new ArrayList<Map<String,Object>>();
		Map<String, Object> map;
		
		if (list != null) {
			int i = 1;
			for (AgencyVO vo : list) {
				map = new HashMap<String, Object>();
				map.put("seq", i++);
				map.put("office", vo.getOffice());
				map.put("agency", vo.getAgency());
				map.put("direct", vo.getDirect());
				map.put("specialty", vo.getSpecialty());
				map.put("manager", vo.getManager());
				map.put("bp_cd", vo.getBp_cd());
				map.put("licensee_no", vo.getLicensee_no());
				map.put("licensee_nm", vo.getLicensee_nm());
				map.put("licensee_email", vo.getLicensee_email());
				map.put("phone", vo.getPhone());
				map.put("business_hours", vo.getBusiness_hours());
				map.put("parking_lot", vo.getParking_lot());
				map.put("lot_addr", vo.getLot_addr());
				map.put("road_addr", vo.getRoad_addr());
				map.put("zip_code", vo.getZip_code());
				map.put("x", vo.getX());
				map.put("y", vo.getY());
				map.put("ext1", vo.getExt1());
				jlist.add(map);
			}
		}
		
		return jlist;
	}
	
	public List<Map<String, Object>> create_apartmentmap() {
		MapsDAO dao = new MapsDAO();
		Calendar calendar = Calendar.getInstance();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM");
		String date;
		if(request.getParameter("date") == null)
			date = sdf.format(calendar.getTime());
		else
			date = request.getParameter("date");

		List<ApartmentVO> list = dao.getApartmentInfo(date);
		List<Map<String, Object>> jlist = new ArrayList<Map<String,Object>>();
		Map<String, Object> map;
		
		if (list != null) {
			int i = 1;
			for (ApartmentVO vo : list) {
				map = new HashMap<String, Object>();
				map.put("seq", i++);
				map.put("id", vo.getSeq());
				map.put("yyyymm", vo.getYyyymm());
				map.put("apt_nm", vo.getApt_nm());
				map.put("household_no", vo.getHousehold_no());
				map.put("area", vo.getArea());
				map.put("location", vo.getLocation());
				map.put("addr", vo.getAddr());
				map.put("x", vo.getX());
				map.put("y", vo.getY());
				map.put("url", vo.getUrl());
				jlist.add(map);
			}
		}
		
		return jlist;
	}
	
	private ModelAndView mapsData() {
		mav.setViewName("util/mapsdata");
		
		return mav;
	}
	
	private ModelAndView editAgency() {
		MapsDAO dao = new MapsDAO();
		String oper = "oper";
		if (request.getParameter("oper") != null)
			oper = request.getParameter("oper");
		
		AgencyVO vo = new AgencyVO();
		
		if (!oper.equals("del")) {
			vo.setOffice(request.getParameter("office"));
			vo.setAgency(request.getParameter("agency"));
			vo.setDirect(request.getParameter("direct"));
			vo.setSpecialty(request.getParameter("specialty"));
			vo.setManager(request.getParameter("manager"));
			vo.setBp_cd(request.getParameter("bp_cd"));
			vo.setLicensee_no(request.getParameter("licensee_no"));
			vo.setLicensee_nm(request.getParameter("licensee_nm"));
			vo.setLicensee_email(request.getParameter("licensee_email"));
			vo.setPhone(request.getParameter("phone"));
			vo.setBusiness_hours(request.getParameter("business_hours"));
			vo.setParking_lot(request.getParameter("parking_lot"));
			vo.setLot_addr(request.getParameter("lot_addr"));
			vo.setRoad_addr(request.getParameter("road_addr"));
			vo.setZip_code(request.getParameter("zip_code"));
			vo.setX(request.getParameter("x"));
			vo.setY(request.getParameter("y"));
			vo.setExt1(request.getParameter("ext1"));
			vo.setUser(session.getAttribute("dabonda").toString());
		} else if (oper.equals("del")) {
			vo.setAgency(request.getParameter("id"));
		}
		
		switch(oper) {
		case "add":
			dao.insertAgency(vo);
			break;
		case "edit":
			dao.updateAgency(vo);
			break;
		case "del":
			dao.deleteAgency(vo);
			break;
		}
		
		return mav;
	}
	
	private ModelAndView editApartment() {
		MapsDAO dao = new MapsDAO();
		String oper = "oper";
		if (request.getParameter("oper") != null)
			oper = request.getParameter("oper");
		
		ApartmentVO vo = new ApartmentVO();
		
		if (!oper.equals("del")) {
			if (oper.equals("edit"))
				vo.setSeq(Integer.parseInt(request.getParameter("id")));
			vo.setYyyymm(request.getParameter("yyyymm"));
			vo.setApt_nm(request.getParameter("apt_nm"));
			vo.setHousehold_no(request.getParameter("household_no"));
			vo.setArea(request.getParameter("area"));
			vo.setLocation(request.getParameter("location"));
			vo.setAddr(request.getParameter("addr"));
			vo.setX(request.getParameter("x"));
			vo.setY(request.getParameter("y"));
			vo.setUrl(request.getParameter("url"));
			vo.setUser(session.getAttribute("dabonda").toString());
		} else if (oper.equals("del")) {
			vo.setSeq(Integer.parseInt(request.getParameter("id")));
		}
		
		switch(oper) {
		case "add":
			dao.insertApartment(vo);
			break;
		case "edit":
			dao.updateApartment(vo);
			break;
		case "del":
			dao.deleteApartment(vo);
			break;
		}
		
		return mav;
	}
}

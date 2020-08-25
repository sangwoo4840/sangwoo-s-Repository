package com.jangin.mis.fix_sales;

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
public class Fix_SalesService {
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
			mav = fix_sales();
			vo.setPid("mis_mes");
			break;
		case 2:
			mav = fix_sales2();
			vo.setPid("mis_mes2");
			break;
		case 3:
			mav = fix_sales_dtl();
			break;
		case 4:
			mav = fix_sales_dtl2();
			break;
		case 5:
			mav = fix_sales_dtl_sal();
			break;
		}
		if (vo.getPid() != null)
			dao.insertLog(vo);

		return mav;
	}
	
	private ModelAndView fix_sales_dtl_sal() {
		Calendar calendar = Calendar.getInstance();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd a hh:mm:ss");
		mav.addObject("now", sdf.format(calendar.getTime()));
		String date = "";
		if(request.getParameter("date") != null)
			date = request.getParameter("date");
		else {
			sdf = new SimpleDateFormat("yyyy-MM");
			date = sdf.format(calendar.getTime());
		}
		String bp_cd = "";
		String bp_nm = "";
		if(request.getParameter("bp_cd") != null)
			bp_cd = request.getParameter("bp_cd");
		if(request.getParameter("bp_nm") != null)
			bp_nm = request.getParameter("bp_nm");
		
		mav.addObject("date", date);
		mav.addObject("bp_cd", bp_cd);
		mav.addObject("bp_nm", bp_nm);
		mav.setViewName("mis/fix_sales_dtl_sal");
		
		return mav;
	}
	
	public List<Map<String, Object>> create_fix_sales_dtl_sal() {
		Fix_SalesDAO dao = new Fix_SalesDAO();
		String bp_cd = "";
		if(request.getParameter("bp_cd") != null)
			bp_cd = request.getParameter("bp_cd");
		String date = "";
		if(request.getParameter("date") != null)
			date = request.getParameter("date").substring(0, 7) + "-01";
		else {
			Calendar calendar = Calendar.getInstance();
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
			date = sdf.format(calendar.getTime());
		}

		List<Fix_Sales_Dtl_SalVO> list = dao.selectFix_Sales_Dtl_Sal(bp_cd.replace("'", "''"), date);
		List<Map<String, Object>> jlist = new ArrayList<Map<String,Object>>();
		Map<String, Object> map;
		
		for(int i = 0; i < list.size(); i++) {
			map = new HashMap<String, Object>();
			map.put("sales_cd", list.get(i).getSales_cd());
			map.put("sales_nm", list.get(i).getSales_nm());
		//	map.put("plan_amt", list.get(i).getPlan_amt());
			map.put("amt1", list.get(i).getAmt1());
			map.put("amt2", list.get(i).getAmt2());
			map.put("amt3", list.get(i).getAmt3());
		//	map.put("amt_percent", list.get(i).getAmt_percent());
			jlist.add(map);
		}
		
		return jlist;
	}

	private ModelAndView fix_sales() {
		Calendar calendar = Calendar.getInstance();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd a hh:mm:ss");
		mav.addObject("now", sdf.format(calendar.getTime()));
		String date = "";
		if(request.getParameter("date") != null)
			date = request.getParameter("date");
		else {
			sdf = new SimpleDateFormat("yyyy-MM");
			date = sdf.format(calendar.getTime());
		}
		
		mav.addObject("date", date);
		mav.setViewName("mis/fix_sales");
		
		return mav;
	}
	
	private ModelAndView fix_sales2() {
		Calendar calendar = Calendar.getInstance();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd a hh:mm:ss");
		mav.addObject("now", sdf.format(calendar.getTime()));
		String date = "";
		if(request.getParameter("date") != null)
			date = request.getParameter("date");
		else {
			sdf = new SimpleDateFormat("yyyy-MM-dd");
			date = sdf.format(calendar.getTime());
		}
		
		mav.addObject("date", date);
		mav.setViewName("mis/fix_sales2");
		
		return mav;
	}
	
	public List<Map<String, Object>> create_fix_sales() {
		Fix_SalesDAO dao = new Fix_SalesDAO();
		String date = "";
		if(request.getParameter("date") != null)
			date = request.getParameter("date") + "-01";
		else {
			Calendar calendar = Calendar.getInstance();
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
			date = sdf.format(calendar.getTime());
		}
		List<Fix_SalesVO> list = dao.selectFix_Sales(date);
		List<Map<String, Object>> jlist = new ArrayList<Map<String,Object>>();
		Map<String, Object> map;
		
		for(int i = 0; i < list.size(); i++) {
			map = new HashMap<String, Object>();
			map.put("province_cd", list.get(i).getProvince_cd());
			map.put("province_nm", list.get(i).getProvince_nm());
			map.put("plan_amt", list.get(i).getPlan_amt());
			map.put("amt1", list.get(i).getAmt1());
			map.put("amt2", list.get(i).getAmt2());
			map.put("amt3", list.get(i).getAmt3());
			map.put("amt_percent", list.get(i).getAmt_percent());
			map.put("sep_cd", list.get(i).getSep_cd());
			jlist.add(map);
		}
		
		return jlist;
	}
	
	public List<Map<String, Object>> create_fix_sales_sub() {
		Fix_SalesDAO dao = new Fix_SalesDAO();
		List<Fix_SalesVO> list = dao.selectFix_Sales_sub();
		List<Map<String, Object>> jlist = new ArrayList<Map<String,Object>>();
		Map<String, Object> map;
		
		for(int i = 0; i < list.size(); i++) {
			map = new HashMap<String, Object>();
			map.put("biz_area", list.get(i).getBiz_area());
			map.put("amt2", list.get(i).getAmt2());
			jlist.add(map);
		}
		
		return jlist;
	}
	
	private ModelAndView fix_sales_dtl() {
		Calendar calendar = Calendar.getInstance();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd a hh:mm:ss");
		mav.addObject("now", sdf.format(calendar.getTime()));
		String date = "";
		if(request.getParameter("date") != null)
			date = request.getParameter("date");
		else {
			sdf = new SimpleDateFormat("yyyy-MM");
			date = sdf.format(calendar.getTime());
		}
		String province_cd = "";
		String province_nm = "";
		if(request.getParameter("province_cd") != null)
			province_cd = request.getParameter("province_cd");
		if(request.getParameter("province_nm") != null)
			province_nm = request.getParameter("province_nm");
		
		mav.addObject("date", date);
		mav.addObject("province_cd", province_cd);
		mav.addObject("province_nm", province_nm);
		mav.setViewName("mis/fix_sales_dtl");
		
		return mav;
	}
	
	private ModelAndView fix_sales_dtl2() {
		Calendar calendar = Calendar.getInstance();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd a hh:mm:ss");
		mav.addObject("now", sdf.format(calendar.getTime()));
		String date = "";
		if(request.getParameter("date") != null)
			date = request.getParameter("date");
		else {
			sdf = new SimpleDateFormat("yyyy-MM-dd");
			date = sdf.format(calendar.getTime());
		}
		String province_cd = "";
		String province_nm = "";
		if(request.getParameter("province_cd") != null)
			province_cd = request.getParameter("province_cd");
		if(request.getParameter("province_nm") != null)
			province_nm = request.getParameter("province_nm");
		
		mav.addObject("date", date);
		mav.addObject("province_cd", province_cd);
		mav.addObject("province_nm", province_nm);
		mav.setViewName("mis/fix_sales_dtl2");
		
		return mav;
	}
	
	public List<Map<String, Object>> create_fix_sales_dtl() {
		Fix_SalesDAO dao = new Fix_SalesDAO();
		String province_cd = "";
		if(request.getParameter("province_cd") != null)
			province_cd = request.getParameter("province_cd");
		String date = "";
		if(request.getParameter("date") != null)
			date = request.getParameter("date").substring(0, 7) + "-01";
		else {
			Calendar calendar = Calendar.getInstance();
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
			date = sdf.format(calendar.getTime());
		}

		List<Fix_Sales_DtlVO> list = dao.selectFix_Sales_Dtl(province_cd.replace("'", "''"), date);
		List<Map<String, Object>> jlist = new ArrayList<Map<String,Object>>();
		Map<String, Object> map;
		
		for(int i = 0; i < list.size(); i++) {
			map = new HashMap<String, Object>();
			map.put("bp_cd", list.get(i).getBp_cd());
			map.put("bp_nm", list.get(i).getBp_nm());
			map.put("plan_amt", list.get(i).getPlan_amt());
			map.put("amt1", list.get(i).getAmt1());
			map.put("amt2", list.get(i).getAmt2());
			map.put("amt3", list.get(i).getAmt3());
			map.put("amt_percent", list.get(i).getAmt_percent());
			jlist.add(map);
		}
		
		return jlist;
	}
}

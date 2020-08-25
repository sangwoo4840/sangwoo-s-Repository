package com.jangin.mis.month_sales;

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
public class Month_SalesService {
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
			mav = month_sales();
			vo.setPid("mis_msp");
			break;
		case 2:
			mav = month_sales_dtl();
			break;
		}
		if (vo.getPid() != null)
			dao.insertLog(vo);

		return mav;
	}
	
	private ModelAndView month_sales() {
		Calendar calendar = Calendar.getInstance();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd a hh:mm:ss");
		mav.addObject("now", sdf.format(calendar.getTime()));
		sdf = new SimpleDateFormat("yyyy-MM-dd");
		String date;
		if(request.getParameter("date") == null)
			date = sdf.format(calendar.getTime());
		else {
			date = request.getParameter("date");
			if(date.length() == 8) {
				String tempDate1 = date.substring(0, 4);
				String tempDate2 = date.substring(4, 6);
				String tempDate3 = date.substring(6, 8);
				date = tempDate1 + "-" + tempDate2 + "-" + tempDate3;
			}
		}
		
		mav.addObject("date", date);
		mav.setViewName("mis/month_sales");
		
		return mav;
	}
	
	public List<Map<String, Object>> create_month_sales() {
		Month_SalesDAO dao = new Month_SalesDAO();
		Calendar calendar = Calendar.getInstance();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		String date;
		if(request.getParameter("date") == null)
			date = sdf.format(calendar.getTime());
		else
			date = request.getParameter("date");

		List<Month_SalesVO> list = dao.selectMonth_Sales(date.replace("'", "''"));
		List<Map<String, Object>> jlist = new ArrayList<Map<String,Object>>();
		Map<String, Object> map;
		
		for(int i = 0; i < list.size(); i++) {
			map = new HashMap<String, Object>();
			map.put("province_cd", list.get(i).getProvince_cd());
			map.put("province_nm", list.get(i).getProvince_nm());
			map.put("plan_amt", list.get(i).getPlan_amt());
			map.put("curr_amt", list.get(i).getCurr_amt());
			map.put("rslt_amt", list.get(i).getRslt_amt());
			map.put("amt_percent", list.get(i).getAmt_percent());
			map.put("sep_cd", list.get(i).getSep_cd());
			jlist.add(map);
		}
		
		return jlist;
	}
	
	private ModelAndView month_sales_dtl() {
		Calendar calendar = Calendar.getInstance();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd a hh:mm:ss");
		mav.addObject("now", sdf.format(calendar.getTime()));
		sdf = new SimpleDateFormat("yyyy-MM-dd");
		String date;
		if(request.getParameter("date") == null)
			date = sdf.format(calendar.getTime());
		else
			date = request.getParameter("date");
		
		String province_cd = "";
		String province_nm = "";
		if(request.getParameter("province_cd") != null)
			province_cd = request.getParameter("province_cd");
		if(request.getParameter("province_nm") != null)
			province_nm = request.getParameter("province_nm");
		
		mav.addObject("date", date);
		mav.addObject("province_cd", province_cd);
		mav.addObject("province_nm", province_nm);
		mav.setViewName("mis/month_sales_dtl");
		
		return mav;
	}
	
	public List<Map<String, Object>> create_month_sales_dtl() {
		Month_SalesDAO dao = new Month_SalesDAO();
		Calendar calendar = Calendar.getInstance();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		String date;
		if(request.getParameter("date") == null)
			date = sdf.format(calendar.getTime());
		else
			date = request.getParameter("date");
		String province_cd = "";
		if(request.getParameter("province_cd") != null)
			province_cd = request.getParameter("province_cd");

		List<Month_Sales_DtlVO> list = dao.selectMonth_Sales_Dtl(date.replace("'", "''"), province_cd.replace("'", "''"));
		List<Map<String, Object>> jlist = new ArrayList<Map<String,Object>>();
		Map<String, Object> map;
		
		for(int i = 0; i < list.size(); i++) {
			map = new HashMap<String, Object>();
			map.put("province_cd", list.get(i).getProvince_cd());
			map.put("bp_cd", list.get(i).getBp_cd());
			map.put("bp_nm", list.get(i).getBp_nm());
			map.put("plan_amt", list.get(i).getPlan_amt());
			map.put("curr_amt", list.get(i).getCurr_amt());
			map.put("rslt_amt", list.get(i).getRslt_amt());
			map.put("amt_percent", list.get(i).getAmt_percent());
			jlist.add(map);
		}
		
		return jlist;
	}
}

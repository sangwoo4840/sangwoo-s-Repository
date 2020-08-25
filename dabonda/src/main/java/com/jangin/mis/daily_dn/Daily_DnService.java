package com.jangin.mis.daily_dn;

import java.util.ArrayList;
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
public class Daily_DnService {
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
			mav = daily_dn();
			vo.setPid("mis_ddn");
			break;
		case 2:
			mav = daily_dn_dtl();
			vo.setPid("mis_ddn");
			break;
		}
		if (vo.getPid() != null)
			dao.insertLog(vo);

		return mav;
	}
	
	private ModelAndView daily_dn() {
		mav.setViewName("mis/daily_dn");
		
		return mav;
	}
	
	public List<Map<String, Object>> get_data() {
		Daily_DnDAO dao = new Daily_DnDAO();
		String date = "";
		if (request.getParameter("date") != null)
			date = request.getParameter("date");
		
		List<Daily_DnVO> list = dao.getDaily_Dn(date);
		List<Map<String, Object>> jlist = new ArrayList<Map<String,Object>>();
		Map<String, Object> map;
		
		for(int i = 0; i < list.size(); i++) {
			map = new HashMap<String, Object>();
			map.put("seq", list.get(i).getSeq());
			map.put("province_cd", list.get(i).getProvince_cd());
			map.put("province_nm", list.get(i).getProvince_nm());
			map.put("month_amt", list.get(i).getMonth_amt());
			map.put("com_amt", list.get(i).getCom_amt());
			map.put("no_amt", list.get(i).getNo_amt());
			map.put("sum_amt", list.get(i).getSum_amt());
			map.put("rate", list.get(i).getRate());
			jlist.add(map);
		}
		
		return jlist;
	}
	
	private ModelAndView daily_dn_dtl() {
		mav.setViewName("mis/daily_dn_dtl");
		
		return mav;
	}
	
	public List<Map<String, Object>> get_dtl_data() {
		Daily_DnDAO dao = new Daily_DnDAO();
		String date = "";
		if (request.getParameter("date") != null)
			date = request.getParameter("date");
		String province_cd = "";
		if (request.getParameter("province_cd") != null)
			province_cd = request.getParameter("province_cd");
		
		List<Daily_Dn_DtlVO> list = dao.getDaily_Dn_Dtl(date, province_cd);
		List<Map<String, Object>> jlist = new ArrayList<Map<String,Object>>();
		Map<String, Object> map;
		
		for(int i = 0; i < list.size(); i++) {
			map = new HashMap<String, Object>();
			map.put("bp_cd", list.get(i).getBp_cd());
			map.put("bp_nm", list.get(i).getBp_nm());
			map.put("month_amt", list.get(i).getMonth_amt());
			map.put("com_amt", list.get(i).getCom_amt());
			map.put("no_amt", list.get(i).getNo_amt());
			map.put("sum_amt", list.get(i).getSum_amt());
			map.put("rate", list.get(i).getRate());
			jlist.add(map);
		}
		
		return jlist;
	}
}

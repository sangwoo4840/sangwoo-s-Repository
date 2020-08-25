package com.jangin.dabonda;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.jangin.mis.daily_dn.Daily_DnService;
import com.jangin.mis.fix_sales.Fix_SalesService;
import com.jangin.mis.month_sales.Month_SalesService;
import com.jangin.mis.month_sales_sb.Month_Sales_SbService;
import com.jangin.mis.month_so.Month_SoService;
import com.jangin.mis.month_so_sb.Month_So_SbService;
import com.jangin.mis.month_sod.Month_SodService;

@Controller
public class MisController {
	@Autowired
	private HttpServletRequest request;
	@Autowired
	private ModelAndView mav;
	@Autowired
	private Month_SalesService month_sales;
	@Autowired
	private Fix_SalesService fix_sales;
	@Autowired
	private Month_SoService month_so;
	@Autowired
	private Month_SodService month_sod;
	@Autowired
	private Month_Sales_SbService month_sales_sb;
	@Autowired
	private Month_So_SbService month_so_sb;
	@Autowired
	private Daily_DnService daily_dn;

	// 월간매출실적
	@RequestMapping(value = "/month_sales", method = {RequestMethod.GET, RequestMethod.POST})
	public ModelAndView month_sales() {
		mav = month_sales.execute(1);
		return mav;
	}
	
	@RequestMapping(value = "/month_sales/month_sales.json", method = RequestMethod.GET)
	public @ResponseBody Map<?, ?> create_month_sales(ModelMap model) {
		model.put("month_sales", month_sales.create_month_sales());
		return model;
	}
	
	@RequestMapping(value = "/month_sales/dtl", method = {RequestMethod.GET, RequestMethod.POST})
	public ModelAndView month_sales_dtl() {
		mav = month_sales.execute(2);
		return mav;
	}
	
	@RequestMapping(value = "/month_sales/dtl/month_sales_dtl.json", method = RequestMethod.GET)
	public @ResponseBody Map<?, ?> create_month_sales_dtl(ModelMap model) {
		model.put("month_sales_dtl", month_sales.create_month_sales_dtl());
		return model;
	}
	
	// 월간확보매출
	@RequestMapping(value = "/fix_sales", method = {RequestMethod.GET, RequestMethod.POST})
	public ModelAndView fix_sales() {
		mav = fix_sales.execute(1);
		return mav;
	}
	
	@RequestMapping(value = "/fix_sales2", method = {RequestMethod.GET, RequestMethod.POST})
	public ModelAndView fix_sales2() {
		mav = fix_sales.execute(2);
		return mav;
	}
	
	@RequestMapping(value = {"/fix_sales/fix_sales.json", "/fix_sales2/fix_sales.json"}, method = RequestMethod.GET)
	public @ResponseBody Map<?, ?> create_fix_sales(ModelMap model) {
		model.put("fix_sales", fix_sales.create_fix_sales());
		return model;
	}
	
	@RequestMapping(value = "/fix_sales/fix_sales_sub.json", method = RequestMethod.GET)
	public @ResponseBody Map<?, ?> create_fix_sales_sub(ModelMap model) {
		model.put("fix_sales_sub", fix_sales.create_fix_sales_sub());
		return model;
	}
	
	@RequestMapping(value = "/fix_sales/dtl", method = {RequestMethod.GET, RequestMethod.POST})
	public ModelAndView fix_sales_dtl() {
		mav = fix_sales.execute(3);
		return mav;
	}
	
	@RequestMapping(value = "/fix_sales2/dtl", method = {RequestMethod.GET, RequestMethod.POST})
	public ModelAndView fix_sales_dtl2() {
		mav = fix_sales.execute(4);
		return mav;
	}
	
	@RequestMapping(value = {"/fix_sales/dtl/fix_sales_dtl.json", "/fix_sales2/dtl/fix_sales_dtl.json"}, method = RequestMethod.GET)
	public @ResponseBody Map<?, ?> create_fix_sales_dtl(ModelMap model) {
		model.put("fix_sales_dtl", fix_sales.create_fix_sales_dtl());
		return model;
	}
	@RequestMapping(value = "/fix_sales/dtl/sal", method = {RequestMethod.GET, RequestMethod.POST})
	public ModelAndView fix_sales_dtl_sal() {
		mav = fix_sales.execute(5);
		return mav;
	}
	@RequestMapping(value = {"/fix_sales/dtl/fix_sales_dtl_sal.json"}, method = RequestMethod.GET)
	public @ResponseBody Map<?, ?> create_fix_sales_dtl_sal(ModelMap model) {
		model.put("fix_sales_dtl_sal", fix_sales.create_fix_sales_dtl_sal());
		return model;
	}
	
	// 월간수주실적
	@RequestMapping(value = "/month_so", method = {RequestMethod.GET, RequestMethod.POST})
	public ModelAndView month_so() {
		mav = month_so.execute(1);
		return mav;
	}
	
	@RequestMapping(value = "/month_so/month_so.json", method = RequestMethod.GET)
	public @ResponseBody Map<?, ?> create_month_so(ModelMap model) {
		model.put("month_so", month_so.create_month_so());
		return model;
	}
	
	@RequestMapping(value = "/month_so/dtl", method = {RequestMethod.GET, RequestMethod.POST})
	public ModelAndView month_so_dtl() {
		mav = month_so.execute(2);
		return mav;
	}
	
	@RequestMapping(value = "/month_so/dtl/month_so_dtl.json", method = RequestMethod.GET)
	public @ResponseBody Map<?, ?> create_month_so_dtl(ModelMap model) {
		model.put("month_so_dtl", month_so.create_month_so_dtl());
		return model;
	}
	
	// 월간수주실적(삭제반영)
	@RequestMapping(value = "/month_sod", method = {RequestMethod.GET, RequestMethod.POST})
	public ModelAndView month_sod() {
		mav = month_sod.execute(1);
		return mav;
	}
		
	@RequestMapping(value = "/month_sod/month_sod.json", method = RequestMethod.GET)
	public @ResponseBody Map<?, ?> create_month_sod(ModelMap model) {
		model.put("month_sod", month_sod.create_month_sod());
		return model;
	}
	
	@RequestMapping(value = "/month_sod/dtl", method = {RequestMethod.GET, RequestMethod.POST})
	public ModelAndView month_sod_dtl() {
		mav = month_sod.execute(2);
		return mav;
	}
	
	@RequestMapping(value = "/month_sod/dtl/month_sod_dtl.json", method = RequestMethod.GET)
	public @ResponseBody Map<?, ?> create_month_sod_dtl(ModelMap model) {
		model.put("month_sod_dtl", month_sod.create_month_sod_dtl());
		return model;
	}
	
	// 월간매출실적((주)장인)
	@RequestMapping(value = "/month_sales_sb", method = {RequestMethod.GET, RequestMethod.POST})
	public ModelAndView month_sales_sb() {
		mav = month_sales_sb.execute(1);
		return mav;
	}
	
	@RequestMapping(value = "/month_sales_sb/month_sales_sb.json", method = RequestMethod.GET)
	public @ResponseBody Map<?, ?> create_month_sales_sb(ModelMap model) {
		model.put("month_sales_sb", month_sales_sb.create_month_sales_sb());
		return model;
	}
	
	@RequestMapping(value = "/month_sales_sb/dtl", method = {RequestMethod.GET, RequestMethod.POST})
	public ModelAndView month_sales_sb_dtl() {
		mav = month_sales_sb.execute(2);
		return mav;
	}
		
	@RequestMapping(value = "/month_sales_sb/dtl/month_sales_sb_dtl.json", method = RequestMethod.GET)
	public @ResponseBody Map<?, ?> create_month_sales_sb_dtl(ModelMap model) {
		model.put("month_sales_sb_dtl", month_sales_sb.create_month_sales_sb_dtl());
		return model;
	}
	
	// 월간수주실적((주)장인)
	@RequestMapping(value = "/month_so_sb", method = {RequestMethod.GET, RequestMethod.POST})
	public ModelAndView month_so_sb() {
		mav = month_so_sb.execute(1);
		return mav;
	}
	
	@RequestMapping(value = "/month_so_sb/month_so_sb.json", method = RequestMethod.GET)
	public @ResponseBody Map<?, ?> create_month_so_sb(ModelMap model) {
		model.put("month_so_sb", month_so_sb.create_month_so_sb());
		return model;
	}
	
	@RequestMapping(value = "/month_so_sb/dtl", method = {RequestMethod.GET, RequestMethod.POST})
	public ModelAndView month_so_sb_dtl() {
		mav = month_so_sb.execute(2);
		return mav;
	}
	
	@RequestMapping(value = "/month_so_sb/dtl/month_so_sb_dtl.json", method = RequestMethod.GET)
	public @ResponseBody Map<?, ?> create_month_so_sb_dtl(ModelMap model) {
		model.put("month_so_sb_dtl", month_so_sb.create_month_so_sb_dtl());
		return model;
	}
	
	// 일일출하조회
	@RequestMapping(value = "/daily_dn", method = RequestMethod.GET)
	public ModelAndView daily_dn() {
		mav = daily_dn.execute(1);
		return mav;
	}
	
	@RequestMapping(value = "/daily_dn/data", method = RequestMethod.GET)
	public @ResponseBody Map<?, ?> daily_dn_data(ModelMap model) {
		model.put("daily_dn", daily_dn.get_data());
		return model;
	}
	
	@RequestMapping(value = "/daily_dn/dtl", method = RequestMethod.GET)
	public ModelAndView daily_dn_dtl() {
		mav = daily_dn.execute(2);
		return mav;
	}
	
	@RequestMapping(value = "/daily_dn/dtl/data", method = RequestMethod.GET)
	public @ResponseBody Map<?, ?> daily_dn_dtl_data(ModelMap model) {
		model.put("daily_dn_dtl", daily_dn.get_dtl_data());
		return model;
	}
}
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

import com.jangin.wow2d.builtin.BuiltInService;
import com.jangin.wow2d.car.CarService;
import com.jangin.wow2d.slide.SlideService;
import com.jangin.wow2d.sms.SmsService;
import com.jangin.wow2d.stock.StockService;
import com.jangin.wow2d.wardrobe.WardrobeService;

/**
 * Handles requests for the application home page.
 */
@Controller
public class Wow2dController {
	@Autowired
	private HttpServletRequest request;
	@Autowired
	private ModelAndView mav;
	@Autowired
	private StockService stock;
	@Autowired
	private CarService car;
	@Autowired
	private SmsService sms;
	@Autowired
	private SlideService slide;
	@Autowired
	private BuiltInService builtin;
	@Autowired
	private WardrobeService wardrobe;
	
	// 재고현황
	@RequestMapping(value = "/stock", method = RequestMethod.GET)
	public ModelAndView stock() {
		mav = stock.execute(1);
		return mav;
	}

	@RequestMapping(value = "/stock/major.json", method = RequestMethod.GET)
	public @ResponseBody Map<?, ?> major(ModelMap model) {
		model.put("major", stock.cboMajor());
		return model;
	}
	
	@RequestMapping(value = "/stock/minor.json", method = RequestMethod.GET)
	public @ResponseBody Map<?, ?> minor(ModelMap model) {
		model.put("minor", stock.cboMinor());
		return model;
	}
	
	@RequestMapping(value = "/stock/stock.json", method = RequestMethod.GET)
	public @ResponseBody Map<?, ?> searchStock(ModelMap model) {
		model.put("stock", stock.searchStock());
		return model;
	}
	
	// 배차현황
	@RequestMapping(value = "/car", method = RequestMethod.GET)
	public ModelAndView car() {
		mav = car.execute(1);
		return mav;
	}
	
	@RequestMapping(value = "/car/car.json", method = RequestMethod.GET)
	public @ResponseBody Map<?, ?> searchCar(ModelMap model) {
		model.put("car", car.searchCar());
		return model;
	}
	
	// 수주SMS현황
	@RequestMapping(value = "/sms", method = RequestMethod.GET)
	public ModelAndView sms() {
		mav = sms.execute(1);
		return mav;
	}
	
	@RequestMapping(value = "/sms/sms.json", method = RequestMethod.GET)
	public @ResponseBody Map<?, ?> getSmsList(ModelMap model) {
		model.put("sms", sms.getSmsList());
		return model;
	}
	
	// 슬라이딩 운영표
	@RequestMapping(value = "/slide", method = RequestMethod.GET)
	public ModelAndView slide() {
		mav = slide.execute(1);
		return mav;
	}
	
	@RequestMapping(value = "/slide/basic.json", method = RequestMethod.GET)
	public @ResponseBody Map<?, ?> getBasic(ModelMap model) {
		model.put("basic", slide.getBasic());
		return model;
	}
	
	@RequestMapping(value = "/slide/option.json", method = RequestMethod.GET)
	public @ResponseBody Map<?, ?> getOption(ModelMap model) {
		model.put("option", slide.getOptionList());
		return model;
	}
	
	@RequestMapping(value = "/slide/info.json", method = RequestMethod.GET)
	public @ResponseBody Map<?, ?> slideInfo(ModelMap model) {
		model.put("info", slide.getSlideInfo());
		return model;
	}
	
	@RequestMapping(value = "/slide/item.json", method = RequestMethod.GET)
	public @ResponseBody Map<?, ?> slideItem(ModelMap model) {
		model.put("item", slide.getItemList());
		return model;
	}
	
	@RequestMapping(value = "/slide/manage", method = RequestMethod.GET)
	public ModelAndView slideManage() {
		mav = slide.execute(2);
		return mav;
	}

	@RequestMapping(value = "/slide/store.json", method = RequestMethod.GET)
	public @ResponseBody Map<?, ?> slideStore(ModelMap model) {
		model.put("store", slide.slideStore());
		return model;
	}
	
	@RequestMapping(value = "/slide/load.json", method = RequestMethod.GET)
	public @ResponseBody Map<?, ?> slideLoad(ModelMap model) {
		model.put("load", slide.slideLoad());
		return model;
	}
	
	// 붙박이장 운영표
	@RequestMapping(value = "/builtin", method = RequestMethod.GET)
	public ModelAndView builtin() {
		mav = builtin.execute(1);
		return mav;
	}
	
	@RequestMapping(value = "/builtin/option.json", method = RequestMethod.GET)
	public @ResponseBody Map<?, ?> getBuiltinOption(ModelMap model) {
		model.put("option", builtin.getOptionList());
		return model;
	}
	
	@RequestMapping(value = "/builtin/item.json", method = RequestMethod.GET)
	public @ResponseBody Map<?, ?> getBuiltinItem(ModelMap model) {
		model.put("item", builtin.getItemList());
		return model;
	}
	
	@RequestMapping(value = "/builtin/save.json", method = RequestMethod.POST)
	public @ResponseBody Map<?, ?> saveBuiltin(ModelMap model) {
		model.put("save", builtin.saveBuiltin());
		return model;
	}
	
	@RequestMapping(value = "/builtin/stock.json", method = RequestMethod.POST)
	public @ResponseBody Map<?, ?> getItemStock1(ModelMap model) {
		model.put("stock", builtin.getItemStock());
		return model;
	}
	
	// 장롱 운영표
	@RequestMapping(value = "/wardrobe", method = RequestMethod.GET)
	public ModelAndView wardrobe() {
		mav = wardrobe.execute(1);
		return mav;
	}
	
	@RequestMapping(value = "/wardrobe/kind.json", method = RequestMethod.GET)
	public @ResponseBody Map<?, ?> getWardrobeKind(ModelMap model) {
		model.put("kind", wardrobe.getWardrobeKind());
		return model;
	}
	
	@RequestMapping(value = "/wardrobe/option.json", method = RequestMethod.GET)
	public @ResponseBody Map<?, ?> getWardrobeOption(ModelMap model) {
		model.put("option", wardrobe.getOptionList());
		return model;
	}
	
	@RequestMapping(value = "/wardrobe/item.json", method = RequestMethod.GET)
	public @ResponseBody Map<?, ?> getWardrobeItem(ModelMap model) {
		model.put("item", wardrobe.getItemList());
		return model;
	}
	
	@RequestMapping(value = "/wardrobe/save/slide.json", method = RequestMethod.POST)
	public @ResponseBody Map<?, ?> saveWardrobeSd(ModelMap model) {
		model.put("save", wardrobe.saveWardrobe("sd"));
		return model;
	}
	
	@RequestMapping(value = "/wardrobe/save/builtin.json", method = RequestMethod.POST)
	public @ResponseBody Map<?, ?> saveWardrobeBI(ModelMap model) {
		model.put("save", wardrobe.saveWardrobe("bi"));
		return model;
	}
	
	@RequestMapping(value = "/wardrobe/save/dressroom.json", method = RequestMethod.POST)
	public @ResponseBody Map<?, ?> saveWardrobeDR(ModelMap model) {
		model.put("save", wardrobe.saveWardrobe("dr"));
		return model;
	}
	
	@RequestMapping(value = "/wardrobe/stock.json", method = RequestMethod.POST)
	public @ResponseBody Map<?, ?> getItemStock(ModelMap model) {
		model.put("stock", wardrobe.getItemStock());
		return model;
	}
	
	
	@RequestMapping(value = "/wardrobe/auth", method = RequestMethod.GET)
	public ModelAndView wrauth() {
		mav = wardrobe.execute(2);
		return mav;
	}
	
	@RequestMapping(value = "/wardrobe/auth/agent.json", method = RequestMethod.GET)
	public @ResponseBody Map<?, ?> getWrauthAgent(ModelMap model) {
		model.put("agent", wardrobe.getWrauthAgent());
		return model;
	}
	
	@RequestMapping(value = "/wardrobe/auth/kind.json", method = RequestMethod.GET)
	public @ResponseBody Map<?, ?> getWrauthKind(ModelMap model) {
		model.put("kind", wardrobe.getWrauthKind());
		return model;
	}
	
	@RequestMapping(value = "/wardrobe/auth/auth.json", method = RequestMethod.GET)
	public @ResponseBody Map<?, ?> getWrauthAuth(ModelMap model) {
		model.put("auth", wardrobe.getWrauthAuth());
		return model;
	}
	
	@RequestMapping(value = "/wardrobe/auth/set", method = RequestMethod.POST)
	public @ResponseBody Map<?, ?> setWrauth(ModelMap model) {
		model.put("result", wardrobe.setWrauth());
		return model;
	}
	
	@RequestMapping(value = "/wardrobe/auth/setall", method = RequestMethod.POST)
	public @ResponseBody Map<?, ?> setWrauthAll(ModelMap model) {
		model.put("result", wardrobe.setWrauthAll());
		return model;
	}
}

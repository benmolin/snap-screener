!function (e) { var n = {}; function t(r) { if (n[r]) return n[r].exports; var o = n[r] = { i: r, l: !1, exports: {} }; return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports } t.m = e, t.c = n, t.d = function (e, n, r) { t.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: r }) }, t.r = function (e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, t.t = function (e, n) { if (1 & n && (e = t(e)), 8 & n) return e; if (4 & n && "object" == typeof e && e && e.__esModule) return e; var r = Object.create(null); if (t.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & n && "string" != typeof e) for (var o in e) t.d(r, o, function (n) { return e[n] }.bind(null, o)); return r }, t.n = function (e) { var n = e && e.__esModule ? function () { return e.default } : function () { return e }; return t.d(n, "a", n), n }, t.o = function (e, n) { return Object.prototype.hasOwnProperty.call(e, n) }, t.p = "", t(t.s = 0) }([function (e, n) { !function () { var e = { showElem: function (e) { return function () { var n = document.getElementById(e); n && n.classList.contains("hidden") && n.classList.remove("hidden") } }, hideElem: function (e) { return function () { var n = document.getElementById(e); n && (n.classList.contains("hidden") || n.classList.add("hidden")) } }, fieldErrorHTML: function (e, n, t) { return '<div class="usa-alert usa-alert--error usa-alert--slim">\n                    <div class="usa-alert__body" role="'.concat(n, '" aria-live="').concat(t, '">\n                        <em class="usa-alert__text">').concat(e, "</em>\n                    </div>\n                </div>") }, validateNumberField: function (n) { return function (r) { var o = t.numberFieldValid(r.target.value), i = document.getElementById(n), s = document.getElementById("".concat(n, "_error_elem")); o ? (s.innerHTML = "", i.setAttribute("aria-invalid", "false")) : (s.innerHTML = e.fieldErrorHTML("Please enter a number.", "alert", "assertive"), i.setAttribute("aria-invalid", "true")) } }, clearClientErrorOnSelect: function (e) { var n = document.getElementById("".concat(e, "_error_elem")); n && (n.innerHTML = ""); var t = document.getElementById(e), r = document.getElementsByName(e)[0]; t && t.setAttribute("aria-invalid", "false"), r && r.setAttribute("aria-invalid", "false") } }, n = { VA: { apply: [{ url: "https://commonhelp.dss.virginia.gov/CASWeb/faces/loginCAS.xhtml", description: "Apply online using CommonHelp. (You may have to create an account to apply.)" }, { url: "https://www.dss.virginia.gov/localagency/index.cgi", description: "Apply at a local Social Services office near you." }], other_resources: [{ url: "https://www.foodpantries.org/st/virginia", description: "Foodpantries.org" }, { url: "https://www.feedingamerica.org/find-your-local-foodbank", description: "Feeding America" }] }, IL: { apply: [{ url: "https://abe.illinois.gov/abe/access/", description: "Apply online using ABE." }], other_resources: [{ url: "https://www.dhs.state.il.us/page.aspx?item=31245", description: "Food Connections" }] } }, t = { showCitizenshipInfobox: e.showElem("citizenship_info_box"), hideCitizenshipInfobox: e.hideElem("citizenship_info_box"), showMedicalExpensesForElderlyOrDisabled: e.showElem("medical_expenses_for_elderly_or_disabled_question"), hideMedicalExpensesForElderlyOrDisabled: e.hideElem("medical_expenses_for_elderly_or_disabled_question"), hideServerErrorMessages: e.hideElem("server-error-messages"), showServerErrorMessages: e.showElem("server-error-messages"), hideResults: e.hideElem("results-section"), showResults: e.showElem("results-section"), numberFieldValid: function (e) { return "" === e || !isNaN(parseInt(e)) } }, r = { checkForm: function () { for (var e = document.getElementById("prescreener-form").elements, n = {}, o = 0; o < e.length; o++) { var i = e[o]; switch (i.type) { case "select-one": n[i.id] = i.value; break; case "radio": var s = document.querySelector('input[name="'.concat(i.name, '"]:checked')); n[i.name] = s ? s.value : void 0; break; case "text": n[i.id] = i.value } } var a = []; "" === n.household_size && a.push({ name: "household_size", message: "Select a household size" }), "" === n.monthly_job_income && a.push({ name: "monthly_job_income", message: "Enter monthly household pre-tax income from jobs or self-employment" }), "" === n.monthly_non_job_income && a.push({ name: "monthly_non_job_income", message: "Enter monthly household income from other sources" }), "" === n.resources && a.push({ name: "resources", message: "Enter total resources amount" }), void 0 === n.household_includes_elderly_or_disabled && a.push({ name: "household_includes_elderly_or_disabled", message: 'Select "yes" or "no" if your household includes someone who is 60 or older, or someone who is disabled' }), void 0 === n.all_citizens_question && a.push({ name: "all_citizens_question", message: 'Select "yes" or "no" if everyone on the application is a U.S. citizen' }); for (var l = ["monthly_job_income", "monthly_non_job_income", "resources", "dependent_care_costs", "medical_expenses_for_elderly_or_disabled", "court_ordered_child_support_payments", "rent_or_mortgage", "homeowners_insurance_and_taxes", "utility_costs"], c = 0; c < l.length; c++) { var d = l[c], u = document.getElementById(d); u && (t.numberFieldValid(u.value) || a.push({ name: d, message: "Please enter a number." })) } return window.hasShownErrors && r.updateClientErrorMessages(a), { errors: a, jsonData: n } }, onSubmit: function () { var e = r.checkForm(), n = e.errors, t = e.jsonData; if (0 === n.length) r.sendData(t); else { window.hasShownErrors = !0, r.updateClientErrorMessages(n), document.getElementById("errors-header").scrollIntoView(); var o = document.querySelector('[aria-invalid="true"]'); o && o.focus() } }, updateClientErrorMessages: function (n) { var t = document.getElementById("errors-header"), r = ""; if (0 !== n.length) { for (var o = 0; o < n.length; o++) { var i = n[o], s = i.name, a = i.message, l = document.getElementById("".concat(s, "_error_elem")), c = document.getElementById(s), d = document.getElementsByName(s)[0]; if (l) { var u = e.fieldErrorHTML(a, "", "off"); l.innerHTML = u } c && c.setAttribute("aria-invalid", "true"), d && d.setAttribute("aria-invalid", "true") } r += '<div class="error-total">'.concat(n.length, " ").concat(1 === n.length ? "error" : "errors", "</div>"), r += '<ul class="usa-list">'; for (var m = 0; m < n.length; m++) { var p = n[m]; r += "<li>".concat(p.message, "</li>") } r += "</ul>", t.innerHTML = r } else t.innerHTML = r }, sendData: function (e) { var n = document.getElementById("prescreener-form"); e.state_or_territory = n.dataset.stateOrTerritory, e.use_emergency_allotment = n.dataset.useEmergencyAllotment; var t = new SnapAPI.SnapEstimateEntrypoint(e).calculate(); r.responseToHTML(t) }, responseToHTML: function (e) { if ("OK" !== e.status) { t.hideResults(), t.hideExplanationButton(), t.hideResultExplanation(); var n = r.responseErrorsToHTML(e.errors); return document.getElementById("server-error-messages").innerHTML = n, void t.showServerErrorMessages() } var o = r.resultToHTML(e); document.getElementById("results").innerHTML = o; var i = r.eligibilityExplanationToHTML(e.eligibility_factors); document.getElementById("why-did-i-get-this-result").innerHTML = i; var s = r.incomeExplanationToHTML(e.eligibility_factors); document.getElementById("how-are-gross-and-net-income-calculated").innerHTML = s, t.showResults(), t.hideServerErrorMessages(), document.getElementById("results").scrollIntoView() }, responseErrorsToHTML: function (e) { for (var n = "<h1>Errors:</h1>", t = 0; t < e.length; t++) { var r = e[t]; n += "<li>".concat(r, "</li>") } return n }, optionsHTML: function (e, n) { for (var t = "<p>".concat(n, '\n                            <ul class="usa-link">'), r = 0; r < e.length; r++) { var o = e[r]; t += '<li>\n                        <a class="usa-link" href="'.concat(o.url, '" rel="noopener noreferrer">\n                            ').concat(o.description, "\n                        </a>\n                    </li>") } return t += "</ul></p>" }, resultToHTML: function (e) { var t = '<h2 id="results-section-title">Results:</h2>', o = e.estimated_eligibility, i = e.estimated_monthly_benefit, s = e.emergency_allotment_estimated_benefit, a = document.getElementById("prescreener-form").dataset.stateOrTerritory, l = n[a]; if (!o) return t += "<p>You <strong>might not</strong> be eligible for SNAP benefits.</p>\n                    <p>This result is only an estimate based on your inputs, not an official application or decision. <strong>You can still apply for SNAP benefits</strong>.</p>", t += r.optionsHTML(l.apply, "Ways to apply:"), t += r.optionsHTML(l.other_resources, "Other resources for food assistance:"); if (t += "<p>You may be <b>eligible</b> for SNAP benefits.</p>", s && i !== s) { var c = s - i; t += "<p>If you apply and are approved, your benefit may be $".concat(i, " per month.</p><p>Due to the current pandemic, you could receive an additional $").concat(c, " per month. (This additional amount is temporary.)</p>") } else t += "<p>If you apply and are approved, your benefit may be $".concat(i, " per month.</p>"); return t += r.optionsHTML(l.apply, "Ways to apply:") }, eligibilityExplanationToHTML: function (e) { var n = ""; e.sort((function (e, n) { return e.sort_order - n.sort_order })); for (var t = e.filter((function (e) { return "test" === e.type })), r = 0; r < t.length; r++) { var o = t[r], i = o.name, s = o.result ? "Pass" : "Fail", a = o.result ? "pass-green" : "fail-red"; n += "<h3>".concat(i, ': <span class="').concat(a, '">').concat(s, "</span></h3>"); for (var l = o.explanation, c = 0; c < l.length; c++) { var d = l[c]; n += "<p>".concat(d, "</p>") } } var u = e.filter((function (e) { return "amount" === e.type }))[0]; n += "<h2>".concat(u.name, "</h2>"); for (var m = 0; m < u.explanation.length; m++) { var p = u.explanation[m]; n += "<p>".concat(p, "</p>") } return n }, incomeExplanationToHTML: function (e) { var n = ""; e.sort((function (e, n) { return e.sort_order - n.sort_order })); for (var t = e.filter((function (e) { return "income" === e.type })), r = 0; r < t.length; r++) { var o = t[r], i = o.name, s = o.explanation; n += "<h3>".concat(i, "</h3>"); for (var a = 0; a < s.length; a++) { var l = s[a]; n += "<p>".concat(l, "</p>") } } return n } }; document.getElementById("prescreener-form").addEventListener("submit", (function (e) { e.preventDefault(), r.onSubmit() })), document.getElementById("input__all_citizens_question_true").addEventListener("change", (function () { t.hideCitizenshipInfobox() })), document.getElementById("input__all_citizens_question_false").addEventListener("change", (function () { t.showCitizenshipInfobox() })), document.getElementById("input__household_includes_elderly_or_disabled_true").addEventListener("change", (function () { t.showMedicalExpensesForElderlyOrDisabled() })), document.getElementById("input__household_includes_elderly_or_disabled_false").addEventListener("change", (function () { t.hideMedicalExpensesForElderlyOrDisabled() })); for (var o = ["monthly_job_income", "monthly_non_job_income", "resources", "dependent_care_costs", "medical_expenses_for_elderly_or_disabled", "court_ordered_child_support_payments", "rent_or_mortgage", "homeowners_insurance_and_taxes", "utility_costs"], i = function (n) { var t = o[n], i = document.getElementById(t); i && i.addEventListener("input", (function (n) { e.validateNumberField(t)(n), r.checkForm() })) }, s = 0; s < o.length; s++)i(s); var a = document.getElementById("household_size"); a && a.addEventListener("change", (function () { e.clearClientErrorOnSelect("household_size"), r.checkForm() })); for (var l = ["household_includes_elderly_or_disabled", "all_citizens_question"], c = function (n) { var t = l[n], o = document.getElementsByName(t); if (o) for (var i = 0; i < o.length; i++) { o[i].addEventListener("change", (function () { e.clearClientErrorOnSelect(t), r.checkForm() })) } }, d = 0; d < l.length; d++)c(d) }() }]);
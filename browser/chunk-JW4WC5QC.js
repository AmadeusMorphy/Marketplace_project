import{a as P,b as S,c as E,d as F}from"./chunk-XE6U646S.js";import"./chunk-AQKUVXN5.js";import{a as D}from"./chunk-NVPYA3FU.js";import"./chunk-EOHU4UWF.js";import"./chunk-OB3R7MWA.js";import"./chunk-HOV5GI77.js";import"./chunk-WDTQ3V22.js";import"./chunk-NKLDHVJZ.js";import"./chunk-ANFO4BS3.js";import{r as _}from"./chunk-DZMPUI2A.js";import"./chunk-PYFSW4WH.js";import{J as y,W as O,k as v,p as x,q as M}from"./chunk-NBA27GJI.js";import{Pb as n,Qb as d,Rb as u,Ua as a,Xb as b,_b as f,cb as m,ec as h,fc as C,ib as p,pb as s,sb as g,wb as t,xb as e,yb as l}from"./chunk-S34SW62A.js";var w=()=>({width:"100%",height:"100%"}),z=(r,o,i)=>({"status-success":r,"status-pending":o,"status-failed":i});function A(r,o){r&1&&(t(0,"tr")(1,"th"),n(2,"Date"),e(),t(3,"th"),n(4,"Customer"),e(),t(5,"th"),n(6,"Amount"),e(),t(7,"th"),n(8,"Status"),e()())}function B(r,o){if(r&1&&(t(0,"tr")(1,"td"),n(2),e(),t(3,"td"),n(4),e(),t(5,"td"),n(6),h(7,"currency"),e(),t(8,"td")(9,"span",33),n(10),e()()()),r&2){let i=o.$implicit;a(2),d(i.date),a(2),d(i.customer),a(2),d(C(7,5,i.amount)),a(3),s("ngClass",f(7,z,i.status==="completed",i.status==="pending",i.status==="failed")),a(),u(" ",i.status," ")}}var k=class r{salesData;revenueData;transactions;chartOptions;data;options;basicData;lineData;basicOptions;lineOptions;pieData;pieOptions;ngOnInit(){this.initializeSalesData(),this.initializeRevenueData(),this.initializeTransactions(),this.initializeChartOptions(),this.data={labels:["Merchant A","Merchant B","Merchant C"],datasets:[{data:[54e3,32500,70200],backgroundColor:["#5A8DEE","#F86666","#6ECB63"],hoverBackgroundColor:["#486FB7","#DC5B5B","#5AA551"]}]},this.options={plugins:{legend:{labels:{usePointStyle:!0,color:"#FFFFFF"}}}},this.basicData={labels:["Q1","Q2","Q3","Q4"],datasets:[{label:"Store A",data:[12e3,15e3,18e3,9e3],backgroundColor:"rgba(90, 141, 238, 0.7)",borderColor:"rgba(90, 141, 238, 1)",borderWidth:1},{label:"Store B",data:[1e4,14e3,1e4,8e3],backgroundColor:"rgba(248, 102, 102, 0.7)",borderColor:"rgba(248, 102, 102, 1)",borderWidth:1},{label:"Store C",data:[2e4,18e3,22e3,12e3],backgroundColor:"rgba(108, 203, 99, 0.7)",borderColor:"rgba(108, 203, 99, 1)",borderWidth:1}]},this.basicOptions={plugins:{legend:{labels:{color:"#FFFFFF"}}},scales:{x:{ticks:{color:"#DDDDDD"},grid:{color:"#333333"}},y:{ticks:{color:"#DDDDDD"},grid:{color:"#333333"}}}},this.lineData={labels:["January","February","March","April","May","June","July"],datasets:[{type:"line",label:"Apple",borderColor:"#5A8DEE",borderWidth:2,fill:!1,tension:.4,data:[4e3,3e3,2e3,5e3,7e3,6e3,8e3]},{type:"bar",label:"Samsung",backgroundColor:"#F86666",data:[3e3,4e3,5e3,3e3,2e3,4e3,5e3],borderColor:"#DC5B5B",borderWidth:2},{type:"bar",label:"Nike",backgroundColor:"#F9C74F",data:[2e3,1e3,4e3,3e3,5e3,4e3,3e3]}]},this.lineOptions={maintainAspectRatio:!1,aspectRatio:.6,plugins:{legend:{labels:{color:"#FFFFFF"}}},scales:{x:{ticks:{color:"#DDDDDD"},grid:{color:"#333333"}},y:{ticks:{color:"#DDDDDD"},grid:{color:"#333333"}}}}}initializeSalesData(){this.salesData={labels:["January","February","March","April","May","June"],datasets:[{label:"Sales",data:[3e3,5e3,4e3,7e3,8e3,12e3],fill:!1,borderColor:"#42A5F5"}]}}initializeRevenueData(){this.revenueData={labels:["Product A","Product B","Product C"],datasets:[{data:[50,25,25],backgroundColor:["#FF6384","#36A2EB","#FFCE56"]}]}}initializeTransactions(){this.transactions=[{date:"2024-12-01",customer:"John Doe",amount:120,status:"completed"},{date:"2024-12-02",customer:"Jane Smith",amount:85,status:"pending"},{date:"2024-12-03",customer:"Michael Brown",amount:250,status:"failed"}]}initializeChartOptions(){this.chartOptions={responsive:!0,plugins:{legend:{position:"top",labels:{font:{size:14}}}},scales:{y:{beginAtZero:!0,ticks:{callback:o=>`$${o}`}}}}}static \u0275fac=function(i){return new(i||r)};static \u0275cmp=m({type:r,selectors:[["app-dashboard"]],decls:68,vars:13,consts:[[1,"dashboard-container"],[1,"dashboard-content","mt-4"],[1,"metrics-grid"],[1,"metric-card","metric-sales"],[1,"metric-icon"],[1,"pi","pi-shopping-cart"],[1,"metric-details"],[1,"metric-title"],[1,"metric-value"],[1,"metric-trend","positive"],[1,"metric-card","metric-orders"],[1,"pi","pi-box"],[1,"metric-trend","negative"],[1,"metric-card","metric-customers"],[1,"pi","pi-users"],[1,"metric-card","metric-revenue"],[1,"pi","pi-chart-line"],[1,"charts"],[1,"flex","justify-content-center","align-items-center","w-full","mt-3"],[1,"grid","justify-content-between","m-auto",2,"width","-webkit-fill-available","gap","1rem"],[1,"pieDiv","mt-3","mb-4",2,"height","32rem","width","29rem"],[1,"chartTitle","flex","justify-content-center","align-items-center"],[1,"text-500","font-medium","mb-3"],["type","pie",3,"data","options"],[1,"barDiv","mt-3","mb-4",2,"width","53rem","height","32rem"],["type","bar",3,"data","options"],[1,"line","w-full","mb-4"],["type","line",3,"data","options"],[1,"transactions-section"],[1,"transactions-header"],["styleClass","p-datatable-striped",3,"value","paginator","rows"],["pTemplate","header"],["pTemplate","body"],[1,"transaction-status",3,"ngClass"]],template:function(i,c){i&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),l(5,"i",5),e(),t(6,"div",6)(7,"h3",7),n(8,"Total Sales"),e(),t(9,"div",8),n(10,"$25,000"),e(),t(11,"div",9),n(12,"+10% from last month"),e()()(),t(13,"div",10)(14,"div",4),l(15,"i",11),e(),t(16,"div",6)(17,"h3",7),n(18,"Orders"),e(),t(19,"div",8),n(20,"320"),e(),t(21,"div",12),n(22,"-2% from last month"),e()()(),t(23,"div",13)(24,"div",4),l(25,"i",14),e(),t(26,"div",6)(27,"h3",7),n(28,"Customers"),e(),t(29,"div",8),n(30,"150"),e(),t(31,"div",9),n(32,"+5 new this month"),e()()(),t(33,"div",15)(34,"div",4),l(35,"i",16),e(),t(36,"div",6)(37,"h3",7),n(38,"Revenue"),e(),t(39,"div",8),n(40,"$12,000"),e(),t(41,"div",9),n(42,"+15% from last month"),e()()()(),t(43,"div",17)(44,"div",18)(45,"div",19)(46,"div",20)(47,"div",21)(48,"span",22),n(49,"Merchants Revenue"),e()(),l(50,"p-chart",23),e(),t(51,"div",24)(52,"div",21)(53,"span",22),n(54,"Stores Sales"),e()(),l(55,"p-chart",25),e(),t(56,"div",26)(57,"div",21)(58,"span",22),n(59,"Categories Monthly Sales"),e()(),l(60,"p-chart",27),e()()()()(),t(61,"div",28)(62,"div",29)(63,"h2"),n(64,"Recent Transactions"),e()(),t(65,"p-table",30),p(66,A,9,0,"ng-template",31)(67,B,11,11,"ng-template",32),e()()()),i&2&&(s("@fadeAnimation",void 0),a(50),g(b(12,w)),s("data",c.data)("options",c.options),a(5),s("data",c.basicData)("options",c.basicOptions),a(5),s("data",c.lineData)("options",c.lineOptions),a(5),s("value",c.transactions)("paginator",!0)("rows",5))},dependencies:[M,v,x,O,y,D,F,E,S,P],styles:["[_ngcontent-%COMP%]:root{--primary-color: #3b82f6;--secondary-color: #10b981;--background-color: #f9fafb;--text-color: #374151;--border-color: #e5e7eb}.dashboard-container[_ngcontent-%COMP%]{background-color:var(--background-color);font-family:Inter,sans-serif;color:var(--text-color)}.dashboard-navbar[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:1rem 2rem;background-color:#fff;box-shadow:0 2px 4px #0000000d}.navbar-brand[_ngcontent-%COMP%]{display:flex;align-items:center}.navbar-toggle[_ngcontent-%COMP%]{margin-right:1rem;color:var(--primary-color);cursor:pointer}.dashboard-title[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:600;margin:0}.logout-btn[_ngcontent-%COMP%]{border-radius:.375rem}.metrics-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,1fr);gap:1rem;margin-bottom:2rem}.metric-card[_ngcontent-%COMP%]{background-color:var(--surface-card);border:1px solid var(--surface-border);border-radius:.75rem;padding:1.5rem;display:flex;align-items:center;box-shadow:0 4px 6px -1px #0000001a;transition:.3s ease-in-out!important}.metric-card[_ngcontent-%COMP%]:hover{background-color:var(--surface-hover)}.metric-icon[_ngcontent-%COMP%]{margin-right:1rem;display:flex;align-items:center;justify-content:center;width:3.5rem;height:3.5rem;border-radius:50%}.metric-sales[_ngcontent-%COMP%]   .metric-icon[_ngcontent-%COMP%]{background-color:#3b82f6;color:#fff}.metric-orders[_ngcontent-%COMP%]   .metric-icon[_ngcontent-%COMP%]{background-color:#f43f5e;color:#fff}.metric-customers[_ngcontent-%COMP%]   .metric-icon[_ngcontent-%COMP%]{background-color:#10b981;color:#fff}.metric-revenue[_ngcontent-%COMP%]   .metric-icon[_ngcontent-%COMP%]{background-color:#8b5cf6;color:#fff}.metric-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:1.75rem}.metric-details[_ngcontent-%COMP%]{flex-grow:1}.metric-title[_ngcontent-%COMP%]{font-size:1rem;color:#6b7280;margin-bottom:.5rem}.metric-value[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:600;margin-bottom:.5rem}.metric-trend[_ngcontent-%COMP%]{font-size:.875rem}.metric-trend.positive[_ngcontent-%COMP%]{color:#10b981}.metric-trend.negative[_ngcontent-%COMP%]{color:#ef4444}.charts-section[_ngcontent-%COMP%]{display:grid;grid-template-columns:2fr 1fr;gap:1rem;margin-bottom:2rem}.chart-container[_ngcontent-%COMP%]{background-color:var(--surface-card);border-radius:.75rem;padding:1.5rem;box-shadow:0 4px 6px #0000001a;transition:.3s ease-in-out;border:1px solid var(--surface-border)}.chart-container[_ngcontent-%COMP%]:hover{box-shadow:0 4px 6px 5px #0000001a}.chart-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0 0 1rem;font-size:1.25rem;color:var(--highlight-text-color)}.transactions-section[_ngcontent-%COMP%]{background-color:var(--surface-card);border-radius:.75rem;padding:1.5rem;box-shadow:0 4px 6px -1px #0000001a;border:1px solid var(--surface-border)}.transactions-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0 0 1rem;font-size:1.25rem;color:var(--highlight-text-color)}.transaction-status[_ngcontent-%COMP%]{padding:.25rem .5rem;border-radius:.375rem;font-size:.875rem}.status-success[_ngcontent-%COMP%]{background-color:#dcfce7;color:#166534}.status-pending[_ngcontent-%COMP%]{background-color:#fef9c3;color:#854d0e}.status-failed[_ngcontent-%COMP%]{background-color:#fee2e2;color:#991b1b}@media (max-width: 1024px){.metrics-grid[_ngcontent-%COMP%], .charts-section[_ngcontent-%COMP%]{grid-template-columns:1fr}}.charts-group[_ngcontent-%COMP%]{display:flex}@media (max-width: 1200px){.charts-group[_ngcontent-%COMP%]{display:flex;flex-direction:column}.pie[_ngcontent-%COMP%], .bar[_ngcontent-%COMP%], .line[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;margin:auto}.line-container[_ngcontent-%COMP%], .pie-container[_ngcontent-%COMP%]{width:100%!important}}.pieDiv[_ngcontent-%COMP%], .barDiv[_ngcontent-%COMP%]{background:var(--surface-card);border:1px solid var(--surface-border);border-radius:8px;padding:20px}.pieDiv[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center}"],data:{animation:[_]}})};export{k as DashboardComponent};

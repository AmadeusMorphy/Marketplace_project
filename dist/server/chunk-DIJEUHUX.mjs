import './polyfills.server.mjs';
import{a as y,b as P,c as S,d as E}from"./chunk-CCDFPK2V.mjs";import"./chunk-SIMPEKYT.mjs";import{a as _}from"./chunk-C5SW5YBE.mjs";import"./chunk-DK246X4T.mjs";import"./chunk-XKWXQFM3.mjs";import"./chunk-WJ4BIIFC.mjs";import"./chunk-EVRZAAZD.mjs";import"./chunk-SGRSZR57.mjs";import"./chunk-CTKWQBWB.mjs";import{p as x}from"./chunk-UJUJTNMG.mjs";import"./chunk-VC7RF3PE.mjs";import{N as M,_ as O,m as b,r as C,s as v}from"./chunk-NONDWBOB.mjs";import{$b as h,Kb as n,Lb as d,Mb as g,Na as r,Vb as u,Xa as m,ac as f,bb as p,kb as l,rb as t,sb as e,tb as c}from"./chunk-26VAK23Y.mjs";import"./chunk-AFOT676I.mjs";var k=(a,o,i)=>({"status-success":a,"status-pending":o,"status-failed":i});function w(a,o){a&1&&(t(0,"tr")(1,"th"),n(2,"Date"),e(),t(3,"th"),n(4,"Customer"),e(),t(5,"th"),n(6,"Amount"),e(),t(7,"th"),n(8,"Status"),e()())}function z(a,o){if(a&1&&(t(0,"tr")(1,"td"),n(2),e(),t(3,"td"),n(4),e(),t(5,"td"),n(6),h(7,"currency"),e(),t(8,"td")(9,"span",28),n(10),e()()()),a&2){let i=o.$implicit;r(2),d(i.date),r(2),d(i.customer),r(2),d(f(7,5,i.amount)),r(3),l("ngClass",u(7,k,i.status==="completed",i.status==="pending",i.status==="failed")),r(),g(" ",i.status," ")}}var D=class a{salesData;revenueData;transactions;chartOptions;lineData;lineOptions;pieData;pieOptions;ngOnInit(){this.initializeSalesData(),this.initializeRevenueData(),this.initializeTransactions(),this.initializeChartOptions(),this.lineData={labels:["January","February","March","April","May","June","July"],datasets:[{type:"line",label:"Apple",borderColor:"#8BA9FF",borderWidth:2,fill:!1,tension:.4,data:[4e3,3e3,2e3,5e3,7e3,6e3,8e3]},{type:"bar",label:"Samsung",backgroundColor:"#A8DFC1",data:[3e3,4e3,5e3,3e3,2e3,4e3,5e3],borderColor:"#67e09e",borderWidth:2},{type:"bar",label:"Nike",backgroundColor:"#66D2D6",data:[2e3,1e3,4e3,3e3,5e3,4e3,3e3]}]},this.lineOptions={maintainAspectRatio:!0,aspectRatio:.6,plugins:{legend:{labels:{color:"#444444"}}},scales:{x:{ticks:{color:"#333333"},grid:{color:"#CCCCCC"}},y:{ticks:{color:"#333333"},grid:{color:"#CCCCCC"}}}},this.pieData={labels:["Merchant A","Merchant B","Merchant C"],datasets:[{data:[54e3,32500,70200],backgroundColor:["#9BAEDB","#FFD866","#88D4B1"],hoverBackgroundColor:["#8197C7","#FFC247","#70B899"]}]},this.pieOptions={plugins:{legend:{labels:{usePointStyle:!0,color:"#4A5568"}}}}}initializeSalesData(){this.salesData={labels:["January","February","March","April","May","June"],datasets:[{label:"Sales",data:[3e3,5e3,4e3,7e3,8e3,12e3],fill:!1,borderColor:"#42A5F5"}]}}initializeRevenueData(){this.revenueData={labels:["Product A","Product B","Product C"],datasets:[{data:[50,25,25],backgroundColor:["#FF6384","#36A2EB","#FFCE56"]}]}}initializeTransactions(){this.transactions=[{date:"2024-12-01",customer:"John Doe",amount:120,status:"completed"},{date:"2024-12-02",customer:"Jane Smith",amount:85,status:"pending"},{date:"2024-12-03",customer:"Michael Brown",amount:250,status:"failed"}]}initializeChartOptions(){this.chartOptions={responsive:!1,plugins:{legend:{position:"top",labels:{font:{size:14}}}},scales:{y:{beginAtZero:!0,ticks:{callback:o=>`$${o}`}}}}}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=m({type:a,selectors:[["app-merchant-dashboard"]],decls:61,vars:7,consts:[[1,"dashboard-container"],[1,"dashboard-content","mt-4","mb-4"],[1,"metrics-grid"],[1,"metric-card","metric-sales"],[1,"metric-icon"],[1,"pi","pi-shopping-cart"],[1,"metric-details"],[1,"metric-title"],[1,"metric-value"],[1,"metric-trend","positive"],[1,"metric-card","metric-orders"],[1,"pi","pi-box"],[1,"metric-trend","negative"],[1,"metric-card","metric-customers"],[1,"pi","pi-users"],[1,"metric-card","metric-revenue"],[1,"pi","pi-chart-line"],[1,"charts-group","w-full","justify-content-between","align-items-center"],[1,"line-container","flex","flex-column","chart-container","justify-content-around","h-full",2,"width","950px"],[1,"chart-header"],["type","line",3,"data","options"],[1,"pie-container","flex","flex-column","chart-container","h-full",2,"width","500px"],["type","pie",3,"data"],[1,"transactions-section"],[1,"transactions-header"],["styleClass","p-datatable-striped",3,"value","paginator","rows"],["pTemplate","header"],["pTemplate","body"],[1,"transaction-status",3,"ngClass"]],template:function(i,s){i&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),c(5,"i",5),e(),t(6,"div",6)(7,"h3",7),n(8,"Total Sales"),e(),t(9,"div",8),n(10,"$25,000"),e(),t(11,"div",9),n(12,"+10% from last month"),e()()(),t(13,"div",10)(14,"div",4),c(15,"i",11),e(),t(16,"div",6)(17,"h3",7),n(18,"Orders"),e(),t(19,"div",8),n(20,"320"),e(),t(21,"div",12),n(22,"-2% from last month"),e()()(),t(23,"div",13)(24,"div",4),c(25,"i",14),e(),t(26,"div",6)(27,"h3",7),n(28,"Customers"),e(),t(29,"div",8),n(30,"150"),e(),t(31,"div",9),n(32,"+5 new this month"),e()()(),t(33,"div",15)(34,"div",4),c(35,"i",16),e(),t(36,"div",6)(37,"h3",7),n(38,"Revenue"),e(),t(39,"div",8),n(40,"$12,000"),e(),t(41,"div",9),n(42,"+15% from last month"),e()()()(),t(43,"div",17)(44,"div",18)(45,"div",19)(46,"h2"),n(47,"Sales Trend"),e()(),c(48,"p-chart",20),e(),t(49,"div",21)(50,"div",19)(51,"h2"),n(52,"Revenue Breakdown"),e()(),c(53,"p-chart",22),e()()(),t(54,"div",23)(55,"div",24)(56,"h2"),n(57,"Recent Transactions"),e()(),t(58,"p-table",25),p(59,w,9,0,"ng-template",26)(60,z,11,11,"ng-template",27),e()()()),i&2&&(l("@fadeAnimation",void 0),r(48),l("data",s.salesData)("options",s.chartOptions),r(5),l("data",s.revenueData),r(5),l("value",s.transactions)("paginator",!0)("rows",5))},dependencies:[v,b,C,O,M,_,E,S,P,y],styles:["[_ngcontent-%COMP%]:root{--primary-color: #3b82f6;--secondary-color: #10b981;--background-color: #f9fafb;--text-color: #374151;--border-color: #e5e7eb}.dashboard-container[_ngcontent-%COMP%]{background-color:var(--background-color);font-family:Inter,sans-serif;color:var(--text-color)}.dashboard-navbar[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:1rem 2rem;background-color:#fff;box-shadow:0 2px 4px #0000000d}.navbar-brand[_ngcontent-%COMP%]{display:flex;align-items:center}.navbar-toggle[_ngcontent-%COMP%]{margin-right:1rem;color:var(--primary-color);cursor:pointer}.dashboard-title[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:600;margin:0}.logout-btn[_ngcontent-%COMP%]{border-radius:.375rem}.metrics-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,1fr);gap:1rem;margin-bottom:2rem}.metric-card[_ngcontent-%COMP%]{background-color:var(--surface-card);border:1px solid var(--surface-border);border-radius:.75rem;padding:1.5rem;display:flex;align-items:center;box-shadow:0 4px 6px -1px #0000001a;transition:.3s ease-in-out!important}.metric-card[_ngcontent-%COMP%]:hover{background-color:var(--surface-hover)}.metric-icon[_ngcontent-%COMP%]{margin-right:1rem;display:flex;align-items:center;justify-content:center;width:3.5rem;height:3.5rem;border-radius:50%}.metric-sales[_ngcontent-%COMP%]   .metric-icon[_ngcontent-%COMP%]{background-color:#3b82f6;color:#fff}.metric-orders[_ngcontent-%COMP%]   .metric-icon[_ngcontent-%COMP%]{background-color:#f43f5e;color:#fff}.metric-customers[_ngcontent-%COMP%]   .metric-icon[_ngcontent-%COMP%]{background-color:#10b981;color:#fff}.metric-revenue[_ngcontent-%COMP%]   .metric-icon[_ngcontent-%COMP%]{background-color:#8b5cf6;color:#fff}.metric-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:1.75rem}.metric-details[_ngcontent-%COMP%]{flex-grow:1}.metric-title[_ngcontent-%COMP%]{font-size:1rem;color:#6b7280;margin-bottom:.5rem}.metric-value[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:600;margin-bottom:.5rem}.metric-trend[_ngcontent-%COMP%]{font-size:.875rem}.metric-trend.positive[_ngcontent-%COMP%]{color:#10b981}.metric-trend.negative[_ngcontent-%COMP%]{color:#ef4444}.charts-section[_ngcontent-%COMP%]{display:grid;grid-template-columns:2fr 1fr;gap:1rem;margin-bottom:2rem}.chart-container[_ngcontent-%COMP%]{background-color:var(--surface-card);border-radius:.75rem;padding:1.5rem;box-shadow:0 4px 6px #0000001a;transition:.3s ease-in-out;border:1px solid var(--surface-border)}.chart-container[_ngcontent-%COMP%]:hover{box-shadow:0 4px 6px 5px #0000001a}.chart-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0 0 1rem;font-size:1.25rem;color:var(--highlight-text-color)}.transactions-section[_ngcontent-%COMP%]{background-color:var(--surface-card);border-radius:.75rem;padding:1.5rem;box-shadow:0 4px 6px -1px #0000001a;border:1px solid var(--surface-border)}.transactions-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0 0 1rem;font-size:1.25rem;color:var(--highlight-text-color)}.transaction-status[_ngcontent-%COMP%]{padding:.25rem .5rem;border-radius:.375rem;font-size:.875rem}.status-success[_ngcontent-%COMP%]{background-color:#dcfce7;color:#166534}.status-pending[_ngcontent-%COMP%]{background-color:#fef9c3;color:#854d0e}.status-failed[_ngcontent-%COMP%]{background-color:#fee2e2;color:#991b1b}@media (max-width: 1024px){.metrics-grid[_ngcontent-%COMP%], .charts-section[_ngcontent-%COMP%]{grid-template-columns:1fr}}.charts-group[_ngcontent-%COMP%]{display:flex}@media (max-width: 1200px){.charts-group[_ngcontent-%COMP%]{display:flex;flex-direction:column}.line-container[_ngcontent-%COMP%], .pie-container[_ngcontent-%COMP%]{width:100%!important}}"],data:{animation:[x]}})};export{D as MerchantDashboardComponent};

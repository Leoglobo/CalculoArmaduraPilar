var calculado=false;
var testc=false;
$(document).ready(function () {
    $("a[href^='#div']").click(function () {
       // alert($(this).attr("href"));
       $("a[href^='#div']").removeClass("active");
       $(this).addClass("active");
       var nomeDiv = $(this).attr("href");
       $("#divDadosTrans").hide();
       $("#divPropConcreto").hide();
       $("#divPropAco").hide();
       $("#divCoeficiente").hide();
       $("#divEsfSolicitante").hide();
       $("#divCalcFinal").hide();
       $(nomeDiv).show();
	   if(nomeDiv=="#divCalcFinal") {
		   selsi(this);
	   }
    });
	$("#selClassAgress").change();
	$("#selsituac").change();
	$("#iptHX, #iptDX, #iptLEX, #iptHY, #iptDY, #iptLEY, #iptFck, #selClassAgress, #vlrCobrimento, #vlrACMAX, #selDMAX, #selsituac, #selsegord, #iptomega").change(function() {
		calculado=false;
	});
	
		$("#iptnumbar, #seldialong").change(function() {
		testc=false;
	});
	
});

function mudaCombo(sel) {
    if (sel.value == 1) {
        $("#vlrACMAX").html("0,65");
        $("#vlrCobrimento").html("2,50");
		
    } else if (sel.value == 2) {
        $("#vlrACMAX").html("0,60");
        $("#vlrCobrimento").html("3,00");
		
    } else if (sel.value == 3) {
        $("#vlrACMAX").html("0,55");
        $("#vlrCobrimento").html("4,00");
		
    } else if (sel.value == 4) {
        $("#vlrACMAX").html("0,45");
        $("#vlrCobrimento").html("5,00");
	
    }
}

function areaproj() {
	diametrolong=document.getElementById("seldialong").value; // le o valor do diametro da barra
	
numbar=document.getElementById("iptnumbar").value; // le o valor do número de barras longitudinais

if (diametrolong==1) { //associação do diametro com a respectiva área
Asbar=0.8;
}
if (diametrolong==1.25) {
Asbar=1.25;
}
if (diametrolong==1.6) {
Asbar=2;
}
if (diametrolong==2) {
Asbar=3.15;
}
if (diametrolong==2.5) {
Asbar=5;
}
if (diametrolong==3.2) {
Asbar=8;
}
if (diametrolong==4) {
Asbar=12.5;
}

if((Math.round(As/Asbar))<0) {
	numbarosug=(Math.round(As/Asbar))+1;
}
else {
	numbarosug=(Math.round(As/Asbar));
}
if(numbarosug%2>0){
	numbarosug=numbarosug+1;
}
else {
	numbarosug=numbarosug;
}
if(numbarosug<4) {
	numbarosug=4;
}
else {
	numbarosug=numbarosug;
}

numbarhtml=numbarosug;
$("#iptnumbar").val(numbarhtml);
Areaproj=Asbar*numbarosug;
document.getElementById('vlrareaproj').innerHTML=Areaproj.toFixed(2);
}

function areaproj2() {
	diametrolong=document.getElementById("seldialong").value; // le o valor do diametro da barra
	
numbar=document.getElementById("iptnumbar").value; // le o valor do número de barras longitudinais

if (diametrolong==1) { //associação do diametro com a respectiva área
Asbar=0.8;
}
if (diametrolong==1.25) {
Asbar=1.25;
}
if (diametrolong==1.6) {
Asbar=2;
}
if (diametrolong==2) {
Asbar=3.15;
}
if (diametrolong==2.5) {
Asbar=5;
}
if (diametrolong==3.2) {
Asbar=8;
}
if (diametrolong==4) {
Asbar=12.5;
}

Areaproj=Asbar*numbar;
document.getElementById('vlrareaproj').innerHTML=Areaproj.toFixed(2);
}
	
	
function selsi(sel) {
    if (sel.value == 1) {
        $("#vlrACMAX").html("0,65");
        
		cobrimento=2.5;
		fcksug=20;
		$("#vlrCobrimento").val(cobrimento);
		$("#iptFck").val(fcksug);
		
    } else if (sel.value == 2) {
        $("#vlrACMAX").html("0,60");
        
		cobrimento=3;
		fcksug=25;
		$("#vlrCobrimento").val(cobrimento);
		$("#iptFck").val(fcksug);
    } else if (sel.value == 3) {
        $("#vlrACMAX").html("0,55");
        
		cobrimento=4;
		fcksug=30;
		$("#vlrCobrimento").val(cobrimento);
		$("#iptFck").val(fcksug);
    } 
	 else if (sel.value == 4) {
        $("#vlrACMAX").html("0,45");
        
		cobrimento=5;
		fcksug=40;
		$("#vlrCobrimento").val(cobrimento);
		$("#iptFck").val(fcksug);
    }
}

function esforco(sel) {
	html=''
	if(sel.value==3) {
		alert('ATENÇÃO: O software desenvolvido considera o momento fletor no centro do pilar em balanço como sendo metade do momento fletor atuante no engaste. Recomenda-se ao usuário verificar as condições de cálculo e adequar a análise estrutural para utilização do software.');
		html= '<div class="row form-group"> <div class="col-3"> </div> <div class="col-2"><span class="float-right">M1d,base,x (kN*cm)</span></div> <div class="col-2"><input class="form-control" type="number" id="iptMdbasex" value="2041"></div> <div class="col-5"></div> </div> <div class="row form-group"> <div class="col-3"></div> <div class="col-2"><span class="float-right">M1d,base,y (kN*cm)</span></div> <div class="col-2"><input class="form-control" type="number" id="iptMdbasey" value="-2041"></div> <div class="col-5"></div>  </div> <div class="row form-group"> <div class="col-3"></div> <div class="col-2"><span class="float-right">Nd (kN)</span></div> <div class="col-2"><input class="form-control" type="number" id="iptNK" value="-1148"></div> <div class="col-5"></div> </div>'
					;
	}
	else { html='<div class="row form-group"> <div class="col-3"> </div> <div class="col-2"><span class="float-right">M1d,base,x (kN*cm)</span></div> <div class="col-2"><input class="form-control" type="number" id="iptMdbasex" value="2041"></div> <div class="col-5"></div> </div> <div class="row form-group"> <div class="col-3"></div> <div class="col-2"><span class="float-right">M1d,topo,x (kN*cm)</span></div> <div class="col-2"><input class="form-control" type="number" id="iptMdtopox" value="-2041"></div> <div class="col-5"></div> </div> <div class="row form-group"> <div class="col-3"></div> <div class="col-2"><span class="float-right">M1d,base,y (kN*cm)</span></div> <div class="col-2"><input class="form-control" type="number" id="iptMdbasey" value="1726"></div> <div class="col-5"></div> </div> <div class="row form-group"> <div class="col-3"></div> <div class="col-2"><span class="float-right">M1d,topo,y (kN*cm)</span></div> <div class="col-2"><input class="form-control" type="number" id="iptMdtopoy" value="-1726"></div> <div class="col-5"></div> </div> <div class="row form-group"> <div class="col-3"></div> <div class="col-2"><span class="float-right">Nd (kN)</span></div> <div class="col-2"><input class="form-control" type="number" id="iptNK" value="-1148"></div> <div class="col-5"></div> </div>' ; 
	}
	document.getElementById('esforcineo').innerHTML=html;
}

function calcular() {
calculado=true;
classeagr=document.getElementById("selClassAgress").value;
cobrimento=document.getElementById("vlrCobrimento").value;
hx=document.getElementById("iptHX").value; // le o valor de hx
hx=Number(hx); 
dx=document.getElementById("iptDX").value; // le o valor de dx
dx=Number(dx);
if(dx<=0){
	alert('ATENÇÃO: Você colocou um valor impróprio para o dx. Volte e corrija o valor!');
	}
lex=document.getElementById("iptLEX").value; // le o valor de lex
lex=Number(lex);
if(lex<=0){
	alert('ATENÇÃO: Você colocou um valor impróprio para o comprimento do pilar. Volte e corrija o valor!');
	}
hy=document.getElementById("iptHY").value; // le o valor de hy
hy=Number(hy);
dy=document.getElementById("iptDY").value; // le o valor de dy
dy=Number(dy);
if(dy<=0){
	alert('ATENÇÃO: Você colocou um valor impróprio para o dy. Volte e corrija o valor!');
	}
ley=document.getElementById("iptLEY").value; // le o valor de ley
ley=Number(ley);
if(ley<=0){
	alert('ATENÇÃO: Você colocou um valor impróprio para o comprimento do pilar. Volte e corrija o valor!');
	}
Fck=document.getElementById("iptFck").value; // le o valor do fck
fckfalso=0;
 if (classeagr == 1) {
		 if(Fck<20) {
      alert('ATENÇÃO: De acordo com a Tabela 7.1 da NBR 6118:2014, para a classe de agressividade I selecionada o fck mínimo é o de 20 MPa. O valor especificado está inferior ao mínimo e, caso prossiga o dimensionamento sem adequar o valor, estará em desacordo com a NBR6118:2014.');
		 fckfalso=1;
		 }	
		 if(cobrimento<2.5) {
      alert('ERRO: O cobrimento mínimo para a classe de Agressividade I é de 2,5 cm. Corrija o valor! ');
	  return;
		 }	
    } else if (classeagr == 2) {
		if(Fck<25) {
      alert('ATENÇÃO: De acordo com a Tabela 7.1 da NBR 6118:2014, para a classe de agressividade II selecionada o fck mínimo é o de 25 MPa. O valor especificado está inferior ao mínimo e, caso prossiga o dimensionamento sem adequar o valor, estará em desacordo com a NBR6118:2014.');
		fckfalso=1;
    }
	 if(cobrimento<3) {
      alert('ERRO: O cobrimento mínimo para a classe de Agressividade II é de 3,0 cm. Corrija o valor! ');
	  return;
		 }
		 } else if (classeagr == 3) {
		if(Fck<30) {
      alert('ATENÇÃO: De acordo com a Tabela 7.1 da NBR 6118:2014, para a classe de agressividade III selecionada o fck mínimo é o de 30 MPa. O valor especificado está inferior ao mínimo e, caso prossiga o dimensionamento sem adequar o valor, estará em desacordo com a NBR6118:2014.');
		fckfalso=1;
    }
	 if(cobrimento<4) {
      alert('ERRO: O cobrimento mínimo para a classe de Agressividade III é de 4,0 cm. Corrija o valor! ');
	  return;
		 }
	} else if (classeagr == 4) {
		if(Fck<40) {
      alert('ATENÇÃO: De acordo com a Tabela 7.1 da NBR 6118:2014, para a classe de agressividade IV selecionada o fck mínimo é o de 40 MPa. O valor especificado está inferior ao mínimo e, caso prossiga o dimensionamento sem adequar o valor, estará em desacordo com a NBR6118:2014.');
    fckfalso=1;
	}
	 if(cobrimento<5) {
      alert('ERRO: O cobrimento mínimo para a classe de Agressividade IV é de 5,0 cm. Corrija o valor! ');
	  return;
		 }
	}
	
if(Fck<=0){
	alert('ATENÇÃO: Você colocou um valor impróprio para o Fck. Volte e corrija o valor!');
	}
//selsi(1);
// $("#vlrACMAX").html("0,65");
// $("#vlrCobrimento").html("2,50");
// cobrimento=2.5;

c=document.getElementById("vlrCobrimento").value; // le o valor do cobrimento
if(c<=0){
	alert('ATENÇÃO: Você não definiu um valor para a classe de agressividade. Volte e defina a classe de agressividade!');
	}
dmax=document.getElementById("selDMAX").value; // le o valor do dmax
selsituac=document.getElementById("selsituac").value; // le a situação de projeto
if(selsituac<=0){
	alert('ATENÇÃO: Você não definiu a situação de projeto do elemento. Volte e defina a situação!');
	}
dlinhax=document.getElementById("iptDX").value; // le o valor de d'x
dlinhay=document.getElementById("iptDY").value; //le o valor de d'y
Fck=Fck/10;
Fcd=Fck/1.4; // Calcula Fcd
if(selsituac>2) {
MDbasexi=document.getElementById("iptMdbasex").value; // Lê o valor de MDbasex
MDbaseyi=document.getElementById("iptMdbasey").value; // Lê o valor de MDbasey
MDCxi=MDbasexi/2; // Lê o valor de MDCx
MDCyi=MDbaseyi/2; // Lê o valor de MDCy
Ndi=Math.abs(document.getElementById("iptNK").value); // Lê o valor de Nd
if(Ndi==0){
	alert('ATENÇÃO: Você definiu um valor nulo para a força Normal. Volte e corrija o valor!');
	}
situ='Pilar em Balanço'; 
	}
	else { 
MDbasexi=document.getElementById("iptMdbasex").value; // Lê o valor de MDbasex
MDbaseyi=document.getElementById("iptMdbasey").value; // Lê o valor de MDbasey
MDtopoxi=document.getElementById("iptMdtopox").value; // Lê o valor de MDtopox
MDtopoyi=document.getElementById("iptMdtopoy").value; // Lê o valor de MDtopoy
Ndi=Math.abs(document.getElementById("iptNK").value); // Lê o valor de Nd
if(Ndi==0){
	alert('ATENÇÃO: Você definiu um valor nulo para a força Normal. Volte e corrija o valor!');
	}
situ='Pilar Biapoiado';
	}
		gaman=1;
		
if (hx<14) {
	alert('Erro: Dimensão mínima da seção transversal em x não respeitada. O mínimo permitido pela normativa é de 14cm.');
		return; //pára o programa
}
if (hy<14) {
	alert('Erro: Dimensão mínima da seção transversal em y não respeitada. O mínimo permitido pela normativa é de 14cm.');
		return; //pára o programa
}
if (hx<19 & hx*hy>=360) {
	alert('ATENÇÃO: Os valores de cálculo dos esforços serão multiplicados por fator adicional, isso deve-se ao fato de que uma das dimensões do pilar é inferior a 19cm.');
	gaman=(1.95-0.05*hx);
}
if (hx<19 & hx*hy<=360) {
	alert('Erro: Área mínima da seção transversal deve ser igual a 360cm². O valor atual é de '+(hx*hy).toFixed(2)+' cm².');
		return; //pára o programa
}
if (hy<19 & hx*hy>=360) {
	alert('ATENÇÃO: Os valores de cálculo dos esforços serão multiplicados por fator adicional, isso deve-se ao fato de que uma das dimensões do pilar é inferior a 19cm.');
	gaman=(1.95-0.05*hy);
}
if (hy<19 & hx*hy<=360) {
	alert('Erro: Área mínima da seção transversal deve ser igual a 360cm². O valor atual é de '+(hx*hy).toFixed(2)+' cm².');
		return; //pára o programa
}
if(selsituac>2) {
MDbasex=MDbasexi*gaman; // Corrige o valor de MDAx
MDbasey=MDbaseyi*gaman; // Corrige o valor de MDAy
MDCx=MDCxi*gaman; // Corrige o valor de MDCx
MDCy=MDCyi*gaman; // Corrige o valor de MDCy
Nd=Ndi*gaman; // Corrige o valor de Nd
	}
	else { 
MDbasex=MDbasexi*gaman; // Corrige o valor de MDAx
MDbasey=MDbaseyi*gaman; // Corrige o valor de MDAy
MDtopox=MDtopoxi*gaman; // Corrige o valor de MDBx
MDtopoy=MDtopoyi*gaman; // Corrige o valor de MDBy
Nd=Ndi*gaman; // Corrige o valor de Nd
 if ((MDbasex>0 & MDtopox>0) || (MDbasex<0 & MDtopox<0)) {
	 MABx=1;
 }
 else {
	 MABx=-1;
 }
 if ((MDbasey>0 & MDtopoy>0) || (MDbasey<0 & MDtopoy<0)) {
	 MABy=1;
 }
 else {
	 MABy=-1;
 }
	}
	
		lamx=(3.46*lex)/(hx); // calcula o índice de esbeltez em X
		lamy=(3.46*ley)/(hy); // calcula o índice de esbeltez em Y
	
	if(lamx>90) {
		alert('Erro: Este programa verifica pilares com esbeltez máxima de 90, esbeltez na direção x está acima do limite. O valor atual de λx é '+lamx+' . ');
		return; //pára o programa
}
	
	if(lamy>90) {
		alert('Erro: Este programa verifica pilares com esbeltez máxima de 90, esbeltez na direção y está acima do limite. O valor atual de λx é '+lamy+' . ');
		return; //pára o programa
}
if(selsituac==3) {
	hix=lex/2;
	hiy=ley/2;
}
else {
	hix=lex;
	hiy=ley;
}
	teta1x=1/(100*Math.pow((hix/100),0.5)); //calcula teta1 em x 
	teta1y=1/(100*Math.pow((hiy/100),0.5)); //calcula teta1 em y 
	if(teta1x<(1/300)) { //definição do valor de tetax
		tetax=1/300;
	} else { tetax=teta1x;}
	if(teta1x>(1/200)){
	tetax=1/200 }
		else {tetax=teta1x; }
	
	if(teta1y<(1/300)) { // definição do valor de tetay
		tetay=1/300;
	} else { tetay=teta1y;}
	if(teta1y>(1/200)){
		tetay=1/200
	}
		else {tetay=teta1y; }
	if(selsituac>2) { // calculo da excentricidade acidental
		eaxtopo=tetax*hix;
		eaytopo=tetay*hiy;
		eax=tetax*hix/2;
		eay=tetay*hiy/2;
	}
		else {
			eax=(tetax*hix)/2;
		eay=(tetay*hiy)/2;
	}
	
	if(selsituac>2) { //calculo da excentricidade inicial pilar em balanço
	eixbase=MDbasex/Nd;
	eiybase=MDbasey/Nd;
	alfabx=0.8+0.2*(MDCx/(eixbase*Nd));
	alfabtestex=0.8+0.2*(MDCx/(eixbase*Nd));
	alfaby=0.8+0.2*(MDCy/(eiybase*Nd));
	alfabtestey=0.8+0.2*(MDCy/(eiybase*Nd));
	if(eixbase==0) {
		alfabx=1;
		alfabtestex=1;
	}
	if(eiybase==0) {
		alfaby=1;
		alfabtestey=1;
	}
	if(alfabx<=0.85) {
	alfabx=0.85;
}
if(alfabx>=1) {
	alfabx=1;
}
if(alfaby<=0.85) {
	alfaby=0.85;
}
if(alfaby>=1) {
	alfaby=1;
}
	eixcentroini=MDCx/Nd; 
	eiycentroini=MDCy/Nd;
	eixcentroini2=alfabx*eixbase;
	eiycentroini2=alfaby*eiybase;
	if((Math.abs(eixcentroini)+eax)>eixcentroini2){
	eixcentro=Math.abs(eixcentroini)+eax;
	}
	else {
	eixcentro=Math.abs(eixcentroini2);
	}
	if((Math.abs(eiycentroini)+eay)>Math.abs(eiycentroini2)) {
	eiycentro=Math.abs(eiycentroini)+eay;
	}
	else {
	eiycentro=Math.abs(eiycentroini2);
	}
	eixtopo=0;
	eiytopo=0;
	if(Math.abs(eixbase)>Math.abs(eixcentro)) {
	MAx=Math.abs(eixbase);
	}
	else {
		MAx=Math.abs(eixcentro);
	}
	if(Math.abs(eiybase)>Math.abs(eiycentro)) {
	MAy=Math.abs(eiybase);
	}
	else {
		MAy=Math.abs(eiycentro);
	}
	
	}
	else { // excentricidade inicial pilares biapoiados
	eixbase=MDbasex/Nd;
	eiybase=MDbasey/Nd;
	eixtopo=MDtopox/Nd;
	eiytopo=MDtopoy/Nd;
	
	if((Math.abs(eixbase))>=(Math.abs(eixtopo))) { // excentricidade inicial no centro em x
	eixci=Math.abs(0.6*(eixbase)+0.4*(eixtopo));
	eixcv=Math.abs(0.4*eixbase);
    MAx=Math.abs(eixbase);
	emaxx=eixbase;
	MBx=Math.abs(eixtopo);
	eminx=eixtopo;
	}
	else {
	eixci=Math.abs(0.6*eixtopo+0.4*eixbase);
	eixcv=Math.abs(0.4*eixtopo);
	MAx=Math.abs(eixtopo);
	emaxx=eixtopo;
	MBx=Math.abs(eixbase);
	eminx=eixbase;
	}
	if(eixci>eixcv) {
		eixcentro=eixci;
	}
	else {
		eixcentro=eixcv;
	}
	if(Math.abs(eiybase)>=Math.abs(eiytopo)) { // excentricidade inicial no centro em y
	eiyci=Math.abs(0.6*eiybase+0.4*eiytopo);
	eiycv=Math.abs(0.4*eiybase);
	MAy=Math.abs(eiybase);
	emaxy=eiybase;
	MBy=Math.abs(eiytopo);
	eminy=eiytopo;
	}
	else {
	eiyci=Math.abs(0.6*eiytopo+0.4*eiybase);
	eiycv=Math.abs(0.4*eiytopo);
	MAy=Math.abs(eiytopo);
	emaxy=eiytopo;
	MBy=Math.abs(eiybase);
	eminy=eiybase;
	}
	if(eiyci>eiycv) {
		eiycentro=eiyci;
	}
	else {
		eiycentro=eiycv;
	}
	}

	mmix=Math.abs(Nd*(1.5+0.03*hx)); // momento mínimo
	mmiy=Math.abs(Nd*(1.5+0.03*hy));
	emix=(1.5+0.03*hx); // excentricidade minima
	emiy=(1.5+0.03*hy);
	
if (Math.abs(eixbase)<emix) { // verificação do momento minimo base x 
	e1basex=emix;
}
else {
	e1basex=eixbase;
}

if (Math.abs(eiybase)<emiy) { // verificação do momento minimo base y
	e1basey=emiy;
}
else {
	e1basey=eiybase;
}
if(selsituac==3) { // PARA PILARES EM BALANÇO
	if (Math.abs(eixtopo+eaxtopo)<emix) { // verificação do momento minimo topo x 
	e1topox=emix;
}
else {
	e1topox=eaxtopo;
}

if (Math.abs(eiytopo+eaytopo)<emiy) { // verificação do momento minimo topo y
	e1topoy=emiy;
}
else {
	e1topoy=eaytopo;
}


if (Math.abs(eixcentro)<emix) { // verificação do momento minimo centro x 
	e1centrox=emix;
}
else {
	e1centrox=eixcentro;
}

if (Math.abs(eiycentro)<emiy) { // verificação do momento minimo centro y
	e1centroy=emiy;
}
else {
	e1centroy=eiycentro;
}
}

else {	// PARA PILARES BIAPOIADOS 
if (Math.abs(eixtopo)<emix) { // verificação do momento minimo topo x 
	e1topox=emix;
}
else {
	e1topox=eixtopo;
}

if (Math.abs(eiytopo)<emiy) { // verificação do momento minimo topo y
	e1topoy=emiy;
}
else {
	e1topoy=eiytopo;
}


if (Math.abs(eixcentro)+eax<emix) { // verificação do momento minimo centro x 
	e1centrox=emix;
}
else {
	e1centrox=eixcentro+eax;
}

if (Math.abs(eiycentro)+eay<emiy) { // verificação do momento minimo centro y
	e1centroy=emiy;
}
else {
	e1centroy=eiycentro+eay;
}
}


if(selsituac==1) {
if (e1basex<=emix & e1topox<=emix) { // calculo de alfab para pilares sem cargas transversais
	alfabx=1;
	if(e1topox>=e1basex) {
		MMAx=e1topox*Nd;
		MMBx=e1basex*Nd;
		alfabtestex=0.6+0.4*(MMBx/MMAx);
	}
	else {
		MMAx=e1basex*Nd;
		MMBx=e1topox*Nd;
		alfabtestex=0.6+0.4*(MMBx/MMAx);
}
}
else {
	
	if(e1topox>=e1basex) {
		MMAx=e1topox*Nd;
		MMBx=e1basex*Nd;
		alfabtestex=0.6+0.4*(MMBx/MMAx);
	}
	else {
		MMAx=e1basex*Nd;
		MMBx=e1topox*Nd;
		alfabtestex=0.6+0.4*(MMBx/MMAx);
}
	alfabx=0.6+0.4*(MMBx/MMAx);
}
if (e1basey<=emiy & e1topoy<=emiy) { // calculo de alfab para pilares sem cargas transversais
	alfaby=1;
	if(e1topoy>=e1basey) {
		MMAy=e1topoy*Nd;
		MMBy=e1basey*Nd;
		alfabtestey=0.6+0.4*(MMBy/MMAy);
	}
	else {
		MMAy=e1basey*Nd;
		MMBy=e1topoy*Nd;
		alfabtestey=0.6+0.4*(MMBy/MMAy);
}
}
else {
	if(e1topox>=e1basex) {
		MMAy=e1topoy*Nd;
		MMBy=e1basey*Nd;
		alfabtestey=0.6+0.4*(MMBy/MMAy);
	}
	else {
		MMAy=e1basey*Nd;
		MMBy=e1topoy*Nd;
		alfabtestey=0.6+0.4*(MMBy/MMAy);
}
	alfaby=0.6+0.4*(MMBy/MMAy);
}
if(alfabx<=0.4) {
	alfabx=0.4;
}
if(alfabx>=1) {
	alfabx=1;
}
if(alfaby<=0.4) {
	alfaby=0.4;
}
if(alfaby>=1) {
	alfaby=1;
}
selrelatoriositu=100;
}

if (selsituac==2) { //alfab para pilares com cargas transversais
	alfabx=1;
	alfaby=1;
	selrelatoriositu=200;
}


lambida1xini=(25+12.5*Math.abs(MAx)/hx)/alfabx; // esbeltez limite x inicial
lambida1yini=(25+12.5*Math.abs(MAy)/hy)/alfaby; //esbeltez limite y inicial

if(lambida1xini<35) {
	lambida1x=35;
}
else {
	lambida1x=lambida1xini;
}
if(lambida1yini<35) {
	lambida1y=35;
}
else {
	lambida1y=lambida1yini;
}
v=Math.abs(Nd/(hx*hy*Fcd));
selsegord=document.getElementById("selsegord").value;
if(selsegord==0){
	alert('ATENÇÃO: Você definiu o método de cálculo dos efeitos de segunda ordem local. Volte e defina o método!');
	}
if(selsegord==2){
	segordrigidez();
	selrelatorioseg=20;
}
else {
	segordcurvatura();
	selrelatorioseg=10;
}

if(lambida1x>=lamx) { //não precisa calcular segunda ordem local em x
e1centrofinx=e1centrox;
selrelatoriox=0;
}
else { //apresenta segunda ordem local em x
	e1centrofinx=Mdtotx/Nd;
	selrelatoriox=1;
}
if(lambida1y>=lamy) {
	e1centrofiny=e1centroy;
	selrelatorioy=0
}
else {
	e1centrofiny=Mdtoty/Nd;
	selrelatorioy=2;
}


dhx=dx/hx;
dhy=dy/hy;
uxtopo=v*e1topox/hx;
uxmeio=v*e1centrofinx/hx;
uxbase=v*e1basex/hx
uytopo=v*e1topoy/hy;
uymeio=v*e1centrofiny/hy;
uybase=v*e1basey/hy;

document.getElementById('dhxtopo').innerHTML=dhx.toFixed(2); // d'/hx
document.getElementById('dhxmeio').innerHTML=dhx.toFixed(2); // d'/hx
document.getElementById('dhxbase').innerHTML=dhx.toFixed(2); // d'/hx
document.getElementById('dhytopo').innerHTML=dhy.toFixed(2); // d'/hy
document.getElementById('dhymeio').innerHTML=dhy.toFixed(2); // d'/hy
document.getElementById('dhybase').innerHTML=dhy.toFixed(2); // d'/hy
document.getElementById('vlrVtopo').innerHTML=v.toFixed(2); // v 
document.getElementById('vlrVmeio').innerHTML=v.toFixed(2); // v 
document.getElementById('vlrVbase').innerHTML=v.toFixed(2); // v 
document.getElementById('vlrUXtopo').innerHTML=uxtopo.toFixed(2); // adimensional x topo
document.getElementById('vlrUXmeio').innerHTML=uxmeio.toFixed(2); // adimensional x meio
document.getElementById('vlrUXbase').innerHTML=uxbase.toFixed(2); // adimensional x base
document.getElementById('vlrUYtopo').innerHTML=uytopo.toFixed(2); // adimensional y topo
document.getElementById('vlrUYmeio').innerHTML=uymeio.toFixed(2); // adimensional y meio
document.getElementById('vlrUYbase').innerHTML=uybase.toFixed(2); // adimensional y base
alert('ATENÇÃO: Na sequência, o ábaco a ser utilizado deve ser compatível com os esforços solicitantes do pilar.');
}

function calcaco() {
	if(calculado){
		
	}
	else {
	alert('ATENÇÃO: Calcule os adimensionais (ν, µx e µy) para prosseguir o dimensionamento.');
	return
	}
hx=document.getElementById("iptHX").value; // le o valor de hx
hy=document.getElementById("iptHY").value; // le o valor de hy
omega=document.getElementById("iptomega").value; //le o valor de omega
if(omega<0) {
	alert('ATENÇÃO: O valor para a taxa mecânica de aço está negativo. Corrija o valor!');
	return;
}
Fck=document.getElementById("iptFck").value;
Fck=Fck/10
Fcd=Fck/1.4;
As=(omega*hx*hy*Fcd)/(50/1.15);
document.getElementById('vlrAreaAco').innerHTML=As.toFixed(2); // mostra o valor do As
} 


function verifnorma() {
	alert('ATENÇÃO: Certifique-se que a quantidade de barras escolhidas está de acordo com o ábaco utilizado para determinação da taxa mecânica de armadura (ω). Caso esteja correto, as verificações seguem normalmente.');
		if(calculado){
		
	}
	else {
	alert('ATENÇÃO: Calcule a área de aço para prosseguir às verificações.');
	return
	}
	
	
diametrolong=document.getElementById("seldialong").value; // le o valor do diametro da barra
numbar=document.getElementById("iptnumbar").value; // le o valor do número de barras longitudinais
dmaxagr=document.getElementById("selDMAX").value; // le o valor de dmax agregado
if(dmaxagr<=0) {
	alert('ATENÇÃO: Você não definiu o diâmetro máximo do agregado. Corrija o valor!');
	return;
}
if(numbar<4) {
	alert('Erro: o número mínimo de barras de aço na seção deve ser 4 por questões construtivas. Corrija o arranjo.');
	return;
}

if(numbar%2>0){
	alert('Erro: O número total de barras deve ser par, pois as barras serão distribuídas simetricamente! Corrija o arranjo.');
	return; //para o programa
}
if (diametrolong==1) { //associação do diametro com a respectiva área
Asbar=0.8;
}
if (diametrolong==1.25) {
Asbar=1.25;
}
if (diametrolong==1.6) {
Asbar=2;
}
if (diametrolong==2) {
Asbar=3.15;
}
if (diametrolong==2.5) {
Asbar=5;
}
if (diametrolong==3.2) {
Asbar=8;
}
if (diametrolong==4) {
Asbar=12.5;
}
Asproj=Asbar*numbar;

if (Asproj<As) {
		alert('ATENÇÃO: Área de aço de projeto menor que área de aço calculada. Recomenda-se revisar o arranjo de armaduras adotado.');
}

hx=document.getElementById("iptHX").value; // le o valor de hx
hy=document.getElementById("iptHY").value; // le o valor de hy
if (hx>hy) { //verifica qual é a menor dimensão do pilar
	b=hy;
	h=hx;
}
else {
	b=hx;
	h=hy;
}

if (diametrolong>(b/8)) {
	alert('Erro: Diâmetro da armadura longitudinal maior que o permitido pela norma. O diâmetro máximo permitido neste caso é de '+(b/0.8).toFixed(0)+' mm. Corrija os valores.');
		return; //pára o programa
}

Asminini=0.15*(Nd/(50/1.15)); //calcula As min pela expressão da norma
Asminabs=0.004*hx*hy; // As min absoluta segundo a norma

if(Asminini<Asminabs) { //verificação de qual área mínima é a maior
	Asmin=Asminabs;
}
else {
	Asmin=Asminini;
}

if (Asproj<Asmin) { //Verificação se As proj é maior que a área mínima
		alert('Erro: Área de Projeto adotada menor que a área mínima de aço permitida. A área mínima permitida, de acordo com a norma, nesse caso, é '+Asmin.toFixed(2)+' cm². Corrija os valores.');
		return; //pára o programa
}

Asmax=0.08*hx*hy; //calculo da área máx
if((Asmax/2)<Asproj) {
	alert('ATENÇÃO: A área de projeto  adotada não permite a realização de emendas caso todas sejam feitas na mesma seção. Recomenda-se revisar a área de projeto ou a realização de emendas alternadas ao longo do elemento. Caso sejam realizadas todas as emendas em uma mesma seção a área de aço seria de '+(2*Asproj).toFixed(2)+' cm² ( 2 x '+(Asproj).toFixed(2)+', porque, na emenda, são 2 barras na mesma seção), sendo maior que a área máxima permitida de '+Asmax.toFixed(2)+' cm² (0,08 x Ac). OBS: O usuário deve atentar-se para a definição de "mesma seção" dada pela NBR 6118:2014 no item 9.5.2.1. ');
	simbolroproj='>';
	textroproj='Cuidado, caso a emenda de todas barras ocorrer na mesma seção transversal, a taxa máxima de aço não será respeitada. Desta forma, recomenda-se prever emendas em seções diferentes ou rever a geometria e/ou disposição das barras visando diminuir a área de aço efetiva.';
}
else {
	simbolroproj='≤';
	textroproj='Ok!';
}
if (Asproj>Asmax) { // verificação do as max 
	alert('Erro: Área de Projeto maior que a área máxima de aço permitida, nesse caso a área máxima é de '+Asmax.toFixed(2)+' cm². Corrija os valores.');
		return; //pára o programa
}


if((diametrolong/4)>0.5) { //definição do diâmetro do estribo
	diamestribocalc=diametrolong/4;
}
else {
	diamestribocalc=0.5;
}
if(diamestribocalc<=0.5) { //definição do diâmetro do estribo
	diamestribo=0.5;
}
if(diamestribocalc>0.5 & diamestribocalc<0.8) { 
	diamestribo=0.63;
}

if(diamestribocalc>0.63 & diamestribocalc<10) {
	diamestribo=0.8;
}

if(diamestribocalc>0.8 & diamestribocalc<1.25) {
	diamestribo=1;
}

if(diamestribocalc>1 & diamestribocalc<1.6) {
	diamestribo=1.25;
}

if(diamestribocalc>1.25 & diamestribocalc<2) {
	diamestribo=1.6;
}

if(diamestribocalc>1.6 & diamestribocalc<2.5) {
	diamestribo=2;
}

if(diamestribocalc>2 & diamestribocalc<3.2) {
	diamestribo=2.5;
}

if(diamestribocalc>2.5 & diamestribocalc<4) {
	diamestribo=3.2;
}

if(diamestribocalc>3.2 & diamestribocalc<5) {
	diamestribo=4;
}

if(2>=diametrolong & 2>=1.2*dmaxagr) { //Cálculo do espaçamento mínimo entre barras
	eminlivre=2;
}
if(diametrolong>=2 & diametrolong>=1.2*dmaxagr) {
	eminlivre=diametrolong;
}
if(1.2*dmaxagr>=2 & 1.2*dmaxagr>=diametrolong) {
	eminlivre=1.2*dmaxagr;
}
	

if(2*b<40){
	emaxeixo=2*b;
}
else {
	emaxeixo=40;
}

ebarra=(h-2*cobrimento-2*diamestribo-(numbar/2)*diametrolong)/((numbar/2)-1); // calcula o espaçamento entre barras
eeixos=(h-2*cobrimento-2*diamestribo-diametrolong)/((numbar/2)-1); // calcula o espaçamento entre eixos

if(eminlivre>ebarra) { // verificação do espaçamento minimo entre barras
		alert('Erro: Espaçamento livre entre as barras é menor que o permitido pela norma. O espaçamento livre atual é de '+ebarra.toFixed(2)+' cm, sendo necessário, nesse caso, o mínimo de '+eminlivre.toFixed(2)+' cm. Corrija o arranjo. ');
		return; //pára o programa
}
if(eeixos>emaxeixo) { //verificação do espaçamento máximo entre eixos
	alert('Erro: Espaçamento entre os eixos das barras é maior que o permitido pela norma. O espaçamento entre eixos atual é de '+eeixos.toFixed(2)+' cm, admite-se, nesse caso, o máximo de '+emaxeixo.toFixed(2)+' cm. Corrija o arranjo.');
		return; //pára o programa
}


smaxini=20;

if(smaxini<=b & smaxini<=(12*diametrolong)) { // verificação do espaçamento máximo entre estribos
	smax=smaxini;
}
if(smaxini>=b & b<=(12*diametrolong)) {
	smax=b;
}
if(smaxini>=12*diametrolong & b>=(12*diametrolong)){
	smax=12*diametrolong;
}

dlinhareal=(cobrimento+diamestribo+0.5*diametrolong); // calculo do cg das armaduras
if(dlinhareal>dlinhax) { //verificação do d'x
	alert("ATENÇÃO: O centro de gravidade das armaduras calculado (d'x,proj="+dlinhareal.toFixed(2)+" cm) é maior que o valor adotado na direção x (d'x="+(dlinhax)+" cm), resultando numa relação d'x,proj/hx  de "+(dlinhareal/hx).toFixed(2)+". Verifique se este valor é atendido pelo ábaco escolhido.");
}
if(dlinhareal>dlinhay) { //verificação do d'y
	alert("ATENÇÃO: O centro de gravidade das armaduras calculado (d'y,proj="+dlinhareal.toFixed(2)+" cm) é maior que o valor adotado na direção y (d'y="+(dlinhay)+" cm), resultando numa relação d'y,proj/hy  de "+(dlinhareal/hy).toFixed(2)+". Verifique se este valor é atendido pelo ábaco escolhido.");
}

edesprot=(h-2*cobrimento-2*20*diamestribo);
if(edesprot>ebarra) {
	alert('Atenção: Pelo arranjo escolhido haverá necessidade de colocar estribos suplementares para proteção da armadura longitudinal contra a flambagem! Esses estribos já estão desenhados no detalhamento.');
simbolprot='>';
textprot='Deve ser feita a utilização de estribos suplementares para proteger a armadura longitudinal contra flambagem!';
}
else {
	simbolprot='≤';
	textprot ='OK';
}

eprot=diamestribo+diametrolong;
barprot=1;
while (eprot<=(20*diamestribo)) { // calcula o numero de barras protegidas pelo estribo
	eprot=eprot+ebarra+(1*diametrolong);
	barprot = barprot+1;
}

fctd=(0.21/1.4)*Math.pow((Fck*10),(2/3)); //cálculo de fctd em mpa
if(diametrolong<3.2) {
	eta3=1;
}
else {
	eta3=(132-(diametrolong*10))/100;
}
fbd=2.25*eta3*fctd; // cálculo de fbd em mpa
lbcalc=(diametrolong*(500/1.15))/(4*fbd); //cálculo de lb em cm
if(lbcalc>=25*diametrolong) { //verificação do lb minimo
	lb=lbcalc;
}
else {
	lb=25*diametrolong;
}

	alert('TODAS AS VERIFICAÇÕES NORMATIVAS FORAM ATENDIDAS. Atenção para os avisos que podem ter sido gerados anteriormente.');
fclearcanvas ();
desenhosecao();

}

function segordcurvatura() { //calcula segunda ordem pelo método do pilarpadrão com curvatura aproximada
	curvix=0.005/(hx*(v+0.5));
	curviy=0.005/(hy*(v+0.5));
	if(curvix>(0.005/hx)) {
		curvx=0.005/hx;
	}
	else {
		curvx=curvix;
	}
	if(curviy>(0.005/hy)) {
		curvy=0.005/hy;
	}
	else {
		curvy=curviy;
	}
	
if(selsituac<3) {
	if(e1basex>e1topox) {
		M1dAx=e1basex*Nd;
	}
	else {
		M1dAx=e1topox*Nd;
	}
	if(e1basey>e1topoy) {
		M1dAy=e1basey*Nd;
	}
	else {
		M1dAy=e1topoy*Nd;
	}
}
else {
	if(e1centrox>e1basex) {
		M1dAx=e1centrox*Nd;
	}
	else {
		M1dAx=e1basex*Nd;
	}
	if(e1centroy>e1basey) {
		M1dAy=e1centroy*Nd;
	}
	else {
		M1dAy=e1basey*Nd;
	}
}
Mdtotx=alfabx*M1dAx+Nd*((Math.pow(lex,2))/10)*curvx;
Mdtoty=alfaby*M1dAy+Nd*((Math.pow(ley,2))/10)*curvy;
}

function segordrigidez() { //calcula segunda ordem pelo pilar padrão com rigidez k
	if(selsituac<3) {
	if(e1basex>e1topox) {
		M1dAx=e1basex*Nd;
	}
	else {
		M1dAx=e1topox*Nd;
	}
	if(e1basey>e1topoy) {
		M1dAy=e1basey*Nd;
	}
	else {
		M1dAy=e1topoy*Nd;
	}
	}
else {
	if(e1centrox>e1basex) {
		M1dAx=e1centrox*Nd;
	}
	else {
		M1dAx=e1basex*Nd;
	}
	if(e1centroy>e1basey) {
		M1dAy=e1centroy*Nd;
	}
	else {
		M1dAy=e1basey*Nd;
	}
}

k1x=1-((Math.pow(lamx,2))/3840);
k2x=k1x*hx*Nd;
M1x=alfabx*M1dAx;
Mdtotx=(5*M1x-k2x+Math.pow((Math.pow(k2x,2)+10*M1x*(2*hx*Nd-k2x)+25*Math.pow(M1x,2)),0.5))/10;

k1y=1-((Math.pow(lamy,2))/3840);
k2y=k1y*hy*Nd;
M1y=alfaby*M1dAy;
Mdtoty=(5*M1y-k2y+Math.pow((Math.pow(k2y,2)+10*M1y*(2*hy*Nd-k2y)+25*Math.pow(M1y,2)),0.5))/10;
}

function fpdfdownload(){
 relatorio();
pdfMake.createPdf(docDefinition).open();
}


//RELATÓRIO PARA PILARES BIAPOIADOS CURVATURA APROXIMADA X E Y
function relatorio(){
	
	if(calculado){
		
	}
	else {
	alert('ATENÇÃO: Execute as verificações normativas para prosseguir ao relatório.');
	return
	}
	
	verifnorma();
	
	//CABEÇALHO DO PDF 
	var data = new Date();
	var dia = data.getDate(); // 1-31
	var mes = data.getMonth(); // 0-11 (zero=janeiro)
	var ano4 = data.getFullYear(); // 4 dígitos;
	docDefinition = {
		pageSize: { width: 595, height: 842 }, //A4
		content: [{
			columns: [
			{ 
				//Logo-vtp.JPG EM http://dopiaza.org/tools/datauri/index.php. O site já dá o link abaixo:
				image: 'data:image/jpeg;base64,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',
				width: 150, //sem a altura ela fica automaticamente proporcional
				alignment: 'left',
			},
			{
				text:
				'NEV: Núcleo de Engenharia Virtual'
				+'\r\nSOFTWARE ON-LINE PARA DIMENSIONAMENTO DAS ARMADURAS PILARES RETANGULARES DE CONCRETO ARMADO'
				+'\r\nAutor: Leonardo Gutierres Lobo'
				+'\r\nOrientação: Prof. Domício Moreira da Silva Junior e Prof. Gustavo Cabrelli Nirschl'
				+'\r\nTipo: Iniciação Científica e Trabalho de Conclusão de Curso'
				+'\r\nCurso: Engenharia Civil'
				+'\r\nNorma Regulamentadora ABNT NBR 6118:2014.'
				+'\r\nData da versão original: 08/01/2021'
				+'\r\nData da última atualização: 10/02/2021' //CORRIGIR
				+'\r\nData da geração do relatório: '+dia+'/'+(mes+1)+'/'+ano4+''
				, fontSize: 9
			},
			],
			// Espaçamento opicional entre colunas
			columnGap: 12
		}]
	}
	//CABEÇALHO DO PDF
	//****************

	var inicial;
	if(selsituac==1) {
inicial = 'data:image/png;base64,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WUCCQGwswwARpToGAqIMYyzwHbxRuGxjdK5TAA6m4t/RBZ5OBsSGRCRc68CEnQeIKA0wEBBlmGjEhFzHgRuVUa+Y0+Mpk90KoXK5HNDOncCJi/cQom+OE1dDYLCyhrXd8y2uRET0NAwERBklKgA3D+zB4Vp1UMIu/oV/QdR+tS0qxOzGqgVrsfVcqL5dQ+i9O7h9NwixYfdw9eh+nD6XODAQEb0YBgKi9KJFI/zhXVw9dx4XL5zCke0bsODPa2jfodSjmQnjWMGn3UcY1q8Korb8ijET52LJgYu4dfEwjhw5ihM3YxDz4AhWDe2D9gNW4CI7FBBRKmAgIEovMTdw8JfBqFesKAoXKY1qXSfhVItBeLXQE3MZGv8yfdFi6AwsmtQSzvtGoWPVpnj580MIK1IXbV9thWpv/4hVW1di47I+KMs+BUSUChgIiNKLtRtyliiB6qV8kbNQP0z48w9M71Yg+T6C1jlQ8qXhWLPvGjTtAnb+9iYaV6qLTm98hU3T30GDCqXgw24ERJRKGAiI0ovBE0VbfoqFJy/jzoUpeK9hAbjou4iIMhoDARERETEQEBEREQMBERERGTEQEBEREQMBERERMRAQERGREQMBERERMRAQERERAwEREREZMRAQERERAwERERExEBAREZERAwERERExEBAREREDARERERkxEBAREREDARERETEQEBERkREDARERETEQEBEREQMBERERGTEQEBEREQMBERERMRAQERGREQMBERERMRAQERERAwEREREZMRAQERERAwERERExEBAREZERAwERERExEBAREREDARERERkxEBAREREDARERETEQEBERkREDARERETEQEBEREQMBERERGTEQEBEREQMBERERMRAQERGREQMBERERMRAQERERAwEREREZMRAQERERAwERERExEBAREZERAwERERExEBAREREDARERERkxEBAREREDARERETEQEBERkREDARERETEQEBEREQMBERERGTEQEBEREQNBYgaDvCQG/V8iIqKsgaVeIrGxMfJ/aJr8S0RElDUwEMQTGHgbR44sMf57H6dPb8aVK4eMW7W4nURERJkYA4EuOPgB9uyZj+XLh+PevRvYvn0GTp36x7jHEHcAERFRJsZAYBQQcBObN0/G+vVjERMTA2tr4wtjZY3AwLvw97+uH0VERJR5ZflAoGkaDh36GwcP/oWHAXdgZQCsja+KFhuNM6c3qn2aFqsfTURElDmxhsAod+4SyJWrKKxtbaG6FGrGQGCwQvYcBeFt3MdmAyIiyuyyfCAwGAwoVaopWjb/H4pU7IB/jYngfhhwIToWboVqo1Tp5uoYIiKizIw1BDr7HIXgWbY1PMs0QrGyNZG9RH1cionC6dtnEMsmAyIiyuQYCHR/7l+AjSfXYVLPGRg+YDXGvz4PEZFhmLRpokxTpB9FRESUOTEQGPmF+iEoLAhOdo7I5Z4bTk4eyOGRG26OboiIisDtwNusJSAiokwtyweC2NhY/H3wb0THRKNrla6wt7FX260N1mhaqimK5iqKaVumISA0QG0nIiLKjLJ8ILCyssLG0xsREhmC+sXqw8bKJm67wQqV8ldCTtecWHhwISKiI9R2IiKizCjLB4JNpzfBy9ULpfKUeqJZQOYoyJ8tPyr7VsbWs1sRGB6o7yEiSh+HDx9G27ZtUalSJZQuXRoNGjTA559/jtDQUP0IotSRZQNBUHgQdpzbgdm7ZqNhsYYJmgtMZLhhw+INMbDJQKw6vgprTqzBveB7+l4iepqJEyeiWbNmqFGjBmrVqoUOHTpg9erV+t6MI0HfZNmyZejcuTNq1qypzrFly5YYP368vjdjnTlzBi+//DLatWuHtWvXqmBw6tQpbN++HZMnT0aFChXwzjvvICIirvYy/s+VXh4+fIiPPvoIDRs2VO9z3bp10a1bN+zbt08/ImPOi16Q8c3KkvZc3KO9NPUl7Y99f2h+IX761qRFREVom09v1t6Y+4b2297f9K1EmdvNmzc1Hx8f+TTXNm/erG99tiVLlmi1a9fWcubMqZ5rullbW2sFChTQjAWvZizg9KPTV2xsrPp3586d2iuvvKJ+Phsbm0fnaLwI0Ly8vLQ6depow4YNU8emJ9P57dixQytTpoxmZWWV4DVMfHNwcNAaN26s3ithen5ai4mJ0YYPH65VqVJFc3V1TXBOtra2WpEiRbT27dtrhw4dUsc/z3n5+vpqvXv31jw9PbX58+frWy2P/L7fvn1bf2QZsmQNgTQN3Au6h4v3L6J47uLwdPLU9yTNzsYO5fOVR0BYAG7430CMWiKZiOILDw/Hl19+iY8//hjGAhd3797V98SRdUIuX76MXbt24c0338SiRYv0PelHav3mzJmjrmr/+OMPXL9+HdHR0fpeY2lmvJq9f/8+jAWyugp/99139T3pQ87vyJEjGDlyJE6cOKH6OD2NvOYbN27E999/D2Phky6TqMn37Nmzp6oBOnDgAIKCgvQ9caKionD+/HlV+9KrVy9VuyHnJa8tmbcsGQj2XtqLw9cO47WaryG3W25969NJc0KHih0QGhmKlcdW6luJSEghsH79eowbNw4XLlyA8cpV35O0a9euYciQIarQSE8nT55UBZlUadvY2MB4FafveZJUh8+aNQtffPGFviV9SBhZs2aNup/SQnT69Om4cuWK/ijtyGsyduxYFaYkCNjZ2el7kiah5uuvv8bevXvTJazQf5MlA8HO8zux/dx2vF7rdXi7e+tbn87JzgmdK3VWfQgWHUr/Kxsic3br1i11RR0cHKwKWqkNeJZLly5h4cKF6do5btKkSfj333/V/eSuWmW7KShI0Jk2bRoCAtJn2LG8jlJ4mqTkdRRhYWHqSjwwMG07Pt+7d08FKiG1FzJsOymyzxQApLbozz//VPfJvGW5QHDlwRX1IVDOp9xzTzYUHRuNojmLwsvFC6dunlJzFxBR3JWj1BAIqYKXgjQl9u/fj7///lt/lPY2b978qBOenGNyBVr8oCBXwj/99FOyx6YmqYKXJoNnsbW1VVfnbm5ucHZ2Vo/luVevXtWPSH0STo4fP66aVIS8fvGbW+KT1y/+ayihYM+ePfojMldZLhDM2zsPd4PuquYCD0cPfWvKONo6olPFTqpWYeSakar5gIjirhxTQmoPpCCTQsze3l71KUhJAZga5Or7WVfQclUrV7dyno6Ojuo8IyMj1RVuUrUJqU36AcjtWeQ8TTUZcr7yWsp7IDU0acXf3z9B7UVyTOcl52QKK9JEFH/kAZmnLBUIIqMjccUvrp2toFfBZ3bYSUx+0X2y+agpjS/cu8B5CYiMpLr63Llz+qPkmQoKUyiQmzw2Vc+nNakdkML9WUyBwHSOEgRCQkL0vWlLClFT/wsJJHJfziHxZ5X8HFLTIU0Zcm5yk6aXlDYxvAj5ng8ePNAfPV3891l+Jqldkd8TMm9ZKhBM3DgRXs5eaFW2FWys42YkfF7SzFCrUC20KN0CP275Edf9r+t7iLImKejlw1/Ih7/cTIVpfFKwSiEmBZdcbUpVvDxOr4JCClghhaupoJWr1/iFrZyjVIXLOUoziNzkZ5NzTI8aApl8qHz58uq+k5OTOmd5PZMLTaamA1GuXDnkypVL3U8L8vObmk1MwUW+v9yPz/Q+S0iR91leS3mv/fz89CPIXGWJQHA/+D4W7l+IozeOonGJxmqyocSTEKWUTGks/Q+kQ+LdwLtYdmQZLty/oO8lynqkYKhataq6L1XE0q4thZmLi4sKC0mRQkyO8fDwgKfn04f9phaZGEm+pxRgprZ3eSyFWmKm2gz52eSYokWLJvuzpKYSJUqgePHi6r5cjZuCU3J9MuSqXYYBSiFcpUoV+Pj46HtSn7yfxYoVU/fltXN1dVWvj9x/2vss++S8ypYtq28lc5UlAsH5e+cx+p/R6FalmwoEqcE3uy8GNxuMf07+g61ntupbibImucqWQlauAqUtW6qy5X5yV9VSkMmVY5EiRVRBll5y5MihrvZljgQpbKUGwNTJ0MTUZCDV73KOclUsUwenRyCQ7ysz/uXOnbLh0KZz8vLyUs+TAjqtuLu7q1kThel9Nl35P+19ltcxb968qvaDzFumDwQyRfGdwDvI4ZZDjQ5IzT9qdyd3tfiRfI8HwSlrWyPKjKSglSlrn5fULJgKmfQgE+pkz55df5Q0CQDxr8ilBkOmCE7cjp9WZCrlUaNG6Y+SZwoucps6dSoqV66s70k7EjhS+n3if9bKlMalSpXSH5G5yvSBYOeFndj07ya8XfdtNSthasrmlA09a/TErYe38Pfh9Bs6RWRupO16xIgRKFmypL4leab28Pbt26N///7qfnoZNGgQGjVqlGQzQXxSmElBK1e2s2fPfqKdPK1JjYRMiPS085SrcgkFn332GZo0aaLON60VLFgQ8+fPT1Ezj+l9ltkeBw8erO6Tecv0gUDmHTh24xiqF6z+zCmKn5eDrYNaIln6Ehy+eljfSpQ1SShYuXKlagZ4Wk2cVCFXq1YNH3zwQYZcNcrsg61atXpqASqFrTSBSIBo3Dh1mhmfhzQBfPXVV2qyofz586vCVQp/ucl9OXfp17Bq1SoMGzYs3fphCHl/Ze4IqWl52vsscxS0adMGb731lupnQOYvUweCA1cOwD/EX40qkJkG04KMVmhQogE8nDyw9uRaRMWkbEIWosyoUKFCOHr0qLryT6qQKlCggCpk586dq1bIywjSGW7p0qWYMGECfH199a2PSc9+WWVQ1lqQNQ8ykix1LFNBS1u9zNewYsUKNf2y9OCXf6W2Iz1qBuKT7yfvnUyVLB01k6o9yZcvn5oV8tdff0XFihX1rWTuDMYknPZjaTLI0KVDERIeguHthqvq/bQiL+HY9WOx6fQmLH9vOWytn14dSWQJZCIfuZKXBYBkDL8UTiklPd+lQ5mQZXul0JDqZrlSlAJFep+nV5t8cuT8TJ0bz549izt37qhAIz3p5cpXztlU7W0OpG+D3OScnnZlnp7ktZP+FvJebtq0CYULF0aePHkeDUc0DYl8HhIa5Xdt+fLlajrsHj166Hssi/ye37hxI02HgqY2iw0EgWGBuBFwAxHREU/8cRiM/0mhPHL1SIRHhWNA4wHI7pQdMdrjSTtk+KDcZF6BpKYwlq8hv+Tyr6xuqKmVPROS72tjZaMmPPp5x8/YcX4Hpr4yFS6OLgl63cr3kWPlv5xuOZHDJYe+h8h8/ZdAEJ80Ecjvf0YHgKeRc5SbFGTmUthaGgkGUgj+19cvMwUCmRlThq3GJ2WDuf6OWWwg2Hd5H2Zsm4Fr/teSnFMgPDocF+9dVAW2zEoox8Qv+GVdAgkTDjYOsLZK+iogIiZCJXLpKyCFeXwqKBgDhoQBeXNlJINfiB/K5i2b4OtJGJBmhNCoUDVVssxf0K58+vWqJnpRqRUIiJ6HJQaCM2fOqGGf3t6PF8s7ffq06m8hIVPCkqwBIatENm/eXD/C/FhsIJDOgtvPb0dAaIAq9E3kvvGaH1+u+BLl8pZTSxYLCQOmQt3Oxg5Hrx/FzB0z8Xa9t1E8V3FjbFO7FCng5fbngT9VLcS79d+FnXXCqi+pgfAL9cOULVNQIV8FtCvXTgWBsKiwBF9LwsS5u+cwe9dsNbvhR00+UqGByNwxEFBGsMRAIDUBP/zwA4YPH65vSahMmTJqEq7vvvsONWvW1Lean0zZh0BmJdx9cTc6V+6M2kVq61sfk1qFvw/9rcLER40/UvMJJLb5zGbsOLcDRXIVwStVX9G3PibNCBIopGZArvgr5ku644zUGvyy6xdVS9ClchcUzlFY30Nk3hgIKCNYapOBLOAk533x4kV9SxzpYCl/Sz/++CN69+6dppNH/VeZapTB7Ye3MXfPXKz/dz26Vu2aZBg4dv0Yft31K4LCgvB+o/efCANR0VFYcXQFlh9druYteLnSy/qex676XVXrGBy7dkytfpg4DEjGOnD5AP7Y/wembZumzktCBcMAEVHmJM0FI0eO1B89JlNRy+Rb9erVM+swIDJNIJAljdedXIcTN07gjdpvoIrvk9Ohnr1zFksOL4GDnYOaUCibc8KRB0ERQdhydguWH1uOekXroXnp5k+MGJDahVXHV6lmgP4N+z8x2ZHUHBy6egiLDy3G3N1zERoRigGNBiCfZz79CCIiymykE6FMKBV/OK2MWpE1KWSmS5k3wtxlikAgnQOXHV2Gk7dOolWZVqhasGqCglw6Bt7wv4GpW6bCyd4J7cu3Vx0N45PRCHsu7FFX9S3KtEDDEg3h7piw9uB+0H0sPbxULaEsoaNUnlJPBIbTt09j4YGF8PbwVmsd9KzeE77ZfJPtuEhERJmDzGHx5ZdfPhquKkMwK1SogNKlS6vAYO4yRSAYv348jlw9oiYgql+sfoJOhuLSg0v4YsUX8HL1QqdKnVAkZxF9z2NrTqxR0w9Lx7+25dqqEQHxSR+AqVunqmmKpRkhqT4Dx28cx+g1o1HIqxA6VuqoFlIq6f3sqVyJzFH8oVGW8GFGmYe5Dst7FhlaW6dOHXTt2lU9lovRfv36pXixqoxm0Z0KpZlARgJIFb200Tct1VTf89jBKwdV7UFoZKi6Ys/llnCSCKnilw6G+y7tU4X3G3Xe0Pc8JiMNZJSAdEKUPgM1CyfsJSpDGHdf2I2FBxcil0suvNfwvSeaI4gsTfxOhUuWLFHz5ctKgURpxbTEsiyGJNNgyzoSnTp10vdaDpnkqmPHjmomx48//ljfav4sOhBIe77MRdCgeINklzXeeHojDl05hFdrvIrc7k+mNCnMZ26fqdY5eKnCS2qYYGIX7l3AT9t/Ussny9oFiUntgfQrkA6Lg5oNgrMd5+0myyczDMqc/7dv31YrGUp7aHLr8hOlBpnZUEYWmKbAHjBggBq3b2lBVH4OCdGy5LPMVPg8k3JJkSxzF8jiX+nNogOBFMQyrM/NwQ2Odo761oSCI4JV/4DszkkvxCEzEMp6B7ImgXydpMjkQzLngEx/LHMYJCYvoSyBLH0ZcrhyFkLKHGQBm7ffflt1iiJKb7IWhiygJO3xllhMSX8CCdAyA+bznL8cK1N8SyBPb5lyHgIi+u9kpjUZVy0fyO7uT87VQZQW5MLt1KlTqnZAhvHJYlSUPhgIiChZcoUmbbnmPLsaZT4y5a9M5NOiRQt9C6WHTDUxERGlPo4woIzA/irpj4GAiIiIGAiIiIiIgYCIiIiMGAiIiIiIgYCIiIgYCIiIiMiIgYCIiIgYCIiIiIiBgIiIiIwYCIiIiIiBgIiIiBgIiIiIyIiBgIiIiBgIiIiIiIGAiIiIjBgIiIiIiIGAiIiIGAiIiIjIiIGAiIiIGAiIiIiIgYCIiIiMGAiIiJ5H1C2cPLYcY1q/jKHTN+N0kL6dyMIxEBARpVTUYfzUqiHat+iNL1bvxYl7EYiJ1fcRWTgGAiKilLIuiBYjJ+CTdkXgbLBGhGaAlUHfR2ThGAiIiFLKygO+1VqiQcX88HCwhqZp0PRdRJaOgYCI6LmEIzwyBrHGMCAMrCGgTIKBgIjohRhgZWsPmwg/XN/5G74b+h76fjkFfx6+i2j9CCJLwkBARPQCDNZA+LV/cfzsVdwMiYV19B2cWv0zfpgwDX+eDtOPIrIcDARERC8oNjQQQfBEkSavYtB3czD1tbIwbF6AqX8dRYh+DJGlYCAgInoBWowGx2JVUbuiL7KpT1I7uOUriLwG4MHhC7imjiKyHAwEREQvSIuOQmSU/gCxiImOQYzBABs7W9gat0TdPYtdq9Zg3cZN2Lx5MzZv3Ir9V4MQbfwv6PJh7Ny+EWtWb8HBc3cR9OjrEGUMBgIiotRmsIY1wnH/6DKM7N4JrZs0RqNGjdCoyRv4Zss1455I3N4yDm82b4pWrd/Bd8uO4Qa7HVAGYyAgIkplmhaNKDjAu+lgrLq5B3PerQYXO1ugyecY3b0UnOGEoq8NxHvNPsEPf/2FyYOaoISb/mSiDMJAQESUlpzL4pVREzCqUV7YHNmMbacCjGEhBoH7jyDsrZ54qWlp5ORcBmQGGAiIiJ7XMwpw2f34EAOs3Cqj94j30ThgLj79eglOnl6ML+dZoVrh3Mjjzo9hMg/8TSQiel7Jzlcct0P+n+AQK3u4VuqJUWPaIGxJH1TqsRMV3miD6sWzqc6HROaAgYCI6LlEITQwErExUQgKj0T0o9UOoxETE4vwYH8EXjuP8376Zp3BOjsqvfkBBnkbH1zwQ1CUhlg2FZAZYSAgIkqpqH0YX70YWg5bg+tR17FnTHtUefUbzFvzJ8b1bYHSncdgtd9tXNs1DF1qtcVHGx/oTxShuLxyO7SPP0MXxz/w7fhlOHwnXN9HlPEMmizXRUSUhOzZs+Off/5B1apV9S1ZnBaBgBu38dB4da/Juscx0dCcssHLzRYxIQ/hFxgBKxvjdVas8WPVxgEuXjnh5WhtfByG+3tn4YcjlfDWq6UQu/xjNOl7GFW+m4rxfaojr4P+9UkpUqQIJkyYgLZt2+pbKD2whoCIKKUM9vDw8YVvwQIo4OuLAoUKo2BuT7g6ucAjR14UKlzIuN24r2BBFMjnHRcGEINYv72YvSEvOnWpgvwuHijY5WOMeNkKWyfPwNztlxEc99WJMhQDARFRmolB5M29+OWrZbBv0QQVs9vFjT6wKYEe77+MIkGrMWrkdCw67q+OJspIDARERGkiFqE3d+LXAa/hvR+nY1z/CVh9LdK41bjnzAK8O2QO9t64jZCt3+Ltxm9i2JxDuBkT90yijMBAQETPJX63o/DwcJw9exaRkZH6ForPxiU/Kr4yBD/MmIJhfWqigKt13BwFnsXQqOcQTP95Fmb/Mh3jP+uC+qVzwjkLjDoICAjA1q1b1e8OmRd2KiSiZCXXqTA0NBSrVq3CihUr4OrqijFjxqh/iZ7l+PHj6N69O2rVqoVOnTqhWbNm+p7H2KkwY7CGgIhSTK4fdu7ciWHDhuHTTz/FvHnz1OOYGNZ1U8oEBQXhxIkTmDFjhvod+vbbb9VjyngMBESULAkA1tbSUx44deoUJk6ciA8++EBdvV24cEFtd3FxYe0ApVj835VDhw7hk08+wdChQ/HLL7/g+vXraruVFYumjMAmAyJKlpeXFxYtWoTg4GBMmTIF69evV7UBdnZ2MBgMiIiIQIECBTB48GA4OzsjNvbRtH1ET5Dfm9OnT+Obb77Rtzzm5OSEbt26oW/fvujQoQNmzpyJ1q1b63spPTAQEFGycubMiWnTpqmrt9WrV6ttUvDLFZwEAvn4cHBwQK5cuWBvb5+gwyFRYvJ7I00GZ86c0bfEkVomCZ3i3XffxezZs7F48WK0bNlSbaP0wUBARMmSToUrV65EdHQ0vv/+e+zduxeBgYGPeoi7ubmhT58+GD16tAoGRM8iTU+lS5dW9yUISJNU/vz5VUdV6UQ4YMAANGzYUNVItWnTRh1H6YMNNUT0VDY2Nqhbty6WLl2qOoJJz3BfX1+1T0KA1AyYru6InkUCpZAwWahQIfX7VLhwYfz999+qb4pss7W1ZW1TBmAgIKIUkere9u3bqyaEIUOGqJDg4eGBq1evquYDopSSAl9qAe7fv48ePXpgyZIlKF++vL6XMgoDARE9F+kl3q9fPyxcuBBNmjRR7cFSi0CUEt7e3njzzTdRu3ZtXLlyBY0aNdL3UEZjHwIiStazVjuMiopSbb+Ojo6qBzlRauDERBmDNQRE9MKk6tfd3Z1hgCgTYCAgIiIiBgIiIiJiICAiIiIjBgIiIiJiICAiIiIGAiJ6Cj8/PzVtMVF6CggIQGRkpP6I0gsDAREla/r06WoqWaL0NG7cOFSqVEl/ROmFExMRUZLko4FTElN6i/97x9/B9MVAQERERGwyICIiIgYCIiIiMmIgICIiIgYCIiIiYiAgIiIiIwYCIiIiYiAgIiIiBgIiIiIyYiAgIiIiBgIiIiIC/g/0UFdlnzf/hwAAAABJRU5ErkJggg==';
	}
else if(selsituac==2) {
inicial = 'data:image/png;base64,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WUCCQGwswwARpToGAqIMYyzwHbxRuGxjdK5TAA6m4t/RBZ5OBsSGRCRc68CEnQeIKA0wEBBlmGjEhFzHgRuVUa+Y0+Mpk90KoXK5HNDOncCJi/cQom+OE1dDYLCyhrXd8y2uRET0NAwERBklKgA3D+zB4Vp1UMIu/oV/QdR+tS0qxOzGqgVrsfVcqL5dQ+i9O7h9NwixYfdw9eh+nD6XODAQEb0YBgKi9KJFI/zhXVw9dx4XL5zCke0bsODPa2jfodSjmQnjWMGn3UcY1q8Korb8ijET52LJgYu4dfEwjhw5ihM3YxDz4AhWDe2D9gNW4CI7FBBRKmAgIEovMTdw8JfBqFesKAoXKY1qXSfhVItBeLXQE3MZGv8yfdFi6AwsmtQSzvtGoWPVpnj580MIK1IXbV9thWpv/4hVW1di47I+KMs+BUSUChgIiNKLtRtyliiB6qV8kbNQP0z48w9M71Yg+T6C1jlQ8qXhWLPvGjTtAnb+9iYaV6qLTm98hU3T30GDCqXgw24ERJRKGAiI0ovBE0VbfoqFJy/jzoUpeK9hAbjou4iIMhoDARERETEQEBEREQMBERERGTEQEBEREQMBERERMRAQERGREQMBERERMRAQERERAwEREREZMRAQERERAwERERExEBAREZERAwERERExEBAREREDARERERkxEBAREREDARERETEQEBERkREDARERETEQEBEREQMBERERGTEQEBEREQMBERERMRAQERGREQMBERERMRAQERERAwEREREZMRAQERERAwERERExEBAREZERAwERERExEBAREREDARERERkxEBAREREDARERETEQEBERkREDARERETEQEBEREQMBERERGTEQEBEREQMBERERMRAQERGREQMBERERMRAQERERAwEREREZMRAQERERAwERERExEBAREZERAwERERExEBAREREDARERERkxEBAREREDARERETEQEBERkREDARERETEQEBEREQMBERERGTEQEBEREQNBYgaDvCQG/V8iIqKsgaVeIrGxMfJ/aJr8S0RElDUwEMQTGHgbR44sMf57H6dPb8aVK4eMW7W4nURERJkYA4EuOPgB9uyZj+XLh+PevRvYvn0GTp36x7jHEHcAERFRJsZAYBQQcBObN0/G+vVjERMTA2tr4wtjZY3AwLvw97+uH0VERJR5ZflAoGkaDh36GwcP/oWHAXdgZQCsja+KFhuNM6c3qn2aFqsfTURElDmxhsAod+4SyJWrKKxtbaG6FGrGQGCwQvYcBeFt3MdmAyIiyuyyfCAwGAwoVaopWjb/H4pU7IB/jYngfhhwIToWboVqo1Tp5uoYIiKizIw1BDr7HIXgWbY1PMs0QrGyNZG9RH1cionC6dtnEMsmAyIiyuQYCHR/7l+AjSfXYVLPGRg+YDXGvz4PEZFhmLRpokxTpB9FRESUOTEQGPmF+iEoLAhOdo7I5Z4bTk4eyOGRG26OboiIisDtwNusJSAiokwtyweC2NhY/H3wb0THRKNrla6wt7FX260N1mhaqimK5iqKaVumISA0QG0nIiLKjLJ8ILCyssLG0xsREhmC+sXqw8bKJm67wQqV8ldCTtecWHhwISKiI9R2IiKizCjLB4JNpzfBy9ULpfKUeqJZQOYoyJ8tPyr7VsbWs1sRGB6o7yEiSh+HDx9G27ZtUalSJZQuXRoNGjTA559/jtDQUP0IotSRZQNBUHgQdpzbgdm7ZqNhsYYJmgtMZLhhw+INMbDJQKw6vgprTqzBveB7+l4iepqJEyeiWbNmqFGjBmrVqoUOHTpg9erV+t6MI0HfZNmyZejcuTNq1qypzrFly5YYP368vjdjnTlzBi+//DLatWuHtWvXqmBw6tQpbN++HZMnT0aFChXwzjvvICIirvYy/s+VXh4+fIiPPvoIDRs2VO9z3bp10a1bN+zbt08/ImPOi16Q8c3KkvZc3KO9NPUl7Y99f2h+IX761qRFREVom09v1t6Y+4b2297f9K1EmdvNmzc1Hx8f+TTXNm/erG99tiVLlmi1a9fWcubMqZ5rullbW2sFChTQjAWvZizg9KPTV2xsrPp3586d2iuvvKJ+Phsbm0fnaLwI0Ly8vLQ6depow4YNU8emJ9P57dixQytTpoxmZWWV4DVMfHNwcNAaN26s3ithen5ai4mJ0YYPH65VqVJFc3V1TXBOtra2WpEiRbT27dtrhw4dUsc/z3n5+vpqvXv31jw9PbX58+frWy2P/L7fvn1bf2QZsmQNgTQN3Au6h4v3L6J47uLwdPLU9yTNzsYO5fOVR0BYAG7430CMWiKZiOILDw/Hl19+iY8//hjGAhd3797V98SRdUIuX76MXbt24c0338SiRYv0PelHav3mzJmjrmr/+OMPXL9+HdHR0fpeY2lmvJq9f/8+jAWyugp/99139T3pQ87vyJEjGDlyJE6cOKH6OD2NvOYbN27E999/D2Phky6TqMn37Nmzp6oBOnDgAIKCgvQ9caKionD+/HlV+9KrVy9VuyHnJa8tmbcsGQj2XtqLw9cO47WaryG3W25969NJc0KHih0QGhmKlcdW6luJSEghsH79eowbNw4XLlyA8cpV35O0a9euYciQIarQSE8nT55UBZlUadvY2MB4FafveZJUh8+aNQtffPGFviV9SBhZs2aNup/SQnT69Om4cuWK/ijtyGsyduxYFaYkCNjZ2el7kiah5uuvv8bevXvTJazQf5MlA8HO8zux/dx2vF7rdXi7e+tbn87JzgmdK3VWfQgWHUr/Kxsic3br1i11RR0cHKwKWqkNeJZLly5h4cKF6do5btKkSfj333/V/eSuWmW7KShI0Jk2bRoCAtJn2LG8jlJ4mqTkdRRhYWHqSjwwMG07Pt+7d08FKiG1FzJsOymyzxQApLbozz//VPfJvGW5QHDlwRX1IVDOp9xzTzYUHRuNojmLwsvFC6dunlJzFxBR3JWj1BAIqYKXgjQl9u/fj7///lt/lPY2b978qBOenGNyBVr8oCBXwj/99FOyx6YmqYKXJoNnsbW1VVfnbm5ucHZ2Vo/luVevXtWPSH0STo4fP66aVIS8fvGbW+KT1y/+ayihYM+ePfojMldZLhDM2zsPd4PuquYCD0cPfWvKONo6olPFTqpWYeSakar5gIjirhxTQmoPpCCTQsze3l71KUhJAZga5Or7WVfQclUrV7dyno6Ojuo8IyMj1RVuUrUJqU36AcjtWeQ8TTUZcr7yWsp7IDU0acXf3z9B7UVyTOcl52QKK9JEFH/kAZmnLBUIIqMjccUvrp2toFfBZ3bYSUx+0X2y+agpjS/cu8B5CYiMpLr63Llz+qPkmQoKUyiQmzw2Vc+nNakdkML9WUyBwHSOEgRCQkL0vWlLClFT/wsJJHJfziHxZ5X8HFLTIU0Zcm5yk6aXlDYxvAj5ng8ePNAfPV3891l+Jqldkd8TMm9ZKhBM3DgRXs5eaFW2FWys42YkfF7SzFCrUC20KN0CP275Edf9r+t7iLImKejlw1/Ih7/cTIVpfFKwSiEmBZdcbUpVvDxOr4JCClghhaupoJWr1/iFrZyjVIXLOUoziNzkZ5NzTI8aApl8qHz58uq+k5OTOmd5PZMLTaamA1GuXDnkypVL3U8L8vObmk1MwUW+v9yPz/Q+S0iR91leS3mv/fz89CPIXGWJQHA/+D4W7l+IozeOonGJxmqyocSTEKWUTGks/Q+kQ+LdwLtYdmQZLty/oO8lynqkYKhataq6L1XE0q4thZmLi4sKC0mRQkyO8fDwgKfn04f9phaZGEm+pxRgprZ3eSyFWmKm2gz52eSYokWLJvuzpKYSJUqgePHi6r5cjZuCU3J9MuSqXYYBSiFcpUoV+Pj46HtSn7yfxYoVU/fltXN1dVWvj9x/2vss++S8ypYtq28lc5UlAsH5e+cx+p/R6FalmwoEqcE3uy8GNxuMf07+g61ntupbibImucqWQlauAqUtW6qy5X5yV9VSkMmVY5EiRVRBll5y5MihrvZljgQpbKUGwNTJ0MTUZCDV73KOclUsUwenRyCQ7ysz/uXOnbLh0KZz8vLyUs+TAjqtuLu7q1kThel9Nl35P+19ltcxb968qvaDzFumDwQyRfGdwDvI4ZZDjQ5IzT9qdyd3tfiRfI8HwSlrWyPKjKSglSlrn5fULJgKmfQgE+pkz55df5Q0CQDxr8ilBkOmCE7cjp9WZCrlUaNG6Y+SZwoucps6dSoqV66s70k7EjhS+n3if9bKlMalSpXSH5G5yvSBYOeFndj07ya8XfdtNSthasrmlA09a/TErYe38Pfh9Bs6RWRupO16xIgRKFmypL4leab28Pbt26N///7qfnoZNGgQGjVqlGQzQXxSmElBK1e2s2fPfqKdPK1JjYRMiPS085SrcgkFn332GZo0aaLON60VLFgQ8+fPT1Ezj+l9ltkeBw8erO6Tecv0gUDmHTh24xiqF6z+zCmKn5eDrYNaIln6Ehy+eljfSpQ1SShYuXKlagZ4Wk2cVCFXq1YNH3zwQYZcNcrsg61atXpqASqFrTSBSIBo3Dh1mhmfhzQBfPXVV2qyofz586vCVQp/ucl9OXfp17Bq1SoMGzYs3fphCHl/Ze4IqWl52vsscxS0adMGb731lupnQOYvUweCA1cOwD/EX40qkJkG04KMVmhQogE8nDyw9uRaRMWkbEIWosyoUKFCOHr0qLryT6qQKlCggCpk586dq1bIywjSGW7p0qWYMGECfH199a2PSc9+WWVQ1lqQNQ8ykix1LFNBS1u9zNewYsUKNf2y9OCXf6W2Iz1qBuKT7yfvnUyVLB01k6o9yZcvn5oV8tdff0XFihX1rWTuDMYknPZjaTLI0KVDERIeguHthqvq/bQiL+HY9WOx6fQmLH9vOWytn14dSWQJZCIfuZKXBYBkDL8UTiklPd+lQ5mQZXul0JDqZrlSlAJFep+nV5t8cuT8TJ0bz549izt37qhAIz3p5cpXztlU7W0OpG+D3OScnnZlnp7ktZP+FvJebtq0CYULF0aePHkeDUc0DYl8HhIa5Xdt+fLlajrsHj166Hssi/ye37hxI02HgqY2iw0EgWGBuBFwAxHREU/8cRiM/0mhPHL1SIRHhWNA4wHI7pQdMdrjSTtk+KDcZF6BpKYwlq8hv+Tyr6xuqKmVPROS72tjZaMmPPp5x8/YcX4Hpr4yFS6OLgl63cr3kWPlv5xuOZHDJYe+h8h8/ZdAEJ80Ecjvf0YHgKeRc5SbFGTmUthaGgkGUgj+19cvMwUCmRlThq3GJ2WDuf6OWWwg2Hd5H2Zsm4Fr/teSnFMgPDocF+9dVAW2zEoox8Qv+GVdAgkTDjYOsLZK+iogIiZCJXLpKyCFeXwqKBgDhoQBeXNlJINfiB/K5i2b4OtJGJBmhNCoUDVVssxf0K58+vWqJnpRqRUIiJ6HJQaCM2fOqGGf3t6PF8s7ffq06m8hIVPCkqwBIatENm/eXD/C/FhsIJDOgtvPb0dAaIAq9E3kvvGaH1+u+BLl8pZTSxYLCQOmQt3Oxg5Hrx/FzB0z8Xa9t1E8V3FjbFO7FCng5fbngT9VLcS79d+FnXXCqi+pgfAL9cOULVNQIV8FtCvXTgWBsKiwBF9LwsS5u+cwe9dsNbvhR00+UqGByNwxEFBGsMRAIDUBP/zwA4YPH65vSahMmTJqEq7vvvsONWvW1Lean0zZh0BmJdx9cTc6V+6M2kVq61sfk1qFvw/9rcLER40/UvMJJLb5zGbsOLcDRXIVwStVX9G3PibNCBIopGZArvgr5ku644zUGvyy6xdVS9ClchcUzlFY30Nk3hgIKCNYapOBLOAk533x4kV9SxzpYCl/Sz/++CN69+6dppNH/VeZapTB7Ye3MXfPXKz/dz26Vu2aZBg4dv0Yft31K4LCgvB+o/efCANR0VFYcXQFlh9druYteLnSy/qex676XVXrGBy7dkytfpg4DEjGOnD5AP7Y/wembZumzktCBcMAEVHmJM0FI0eO1B89JlNRy+Rb9erVM+swIDJNIJAljdedXIcTN07gjdpvoIrvk9Ohnr1zFksOL4GDnYOaUCibc8KRB0ERQdhydguWH1uOekXroXnp5k+MGJDahVXHV6lmgP4N+z8x2ZHUHBy6egiLDy3G3N1zERoRigGNBiCfZz79CCIiymykE6FMKBV/OK2MWpE1KWSmS5k3wtxlikAgnQOXHV2Gk7dOolWZVqhasGqCglw6Bt7wv4GpW6bCyd4J7cu3Vx0N45PRCHsu7FFX9S3KtEDDEg3h7piw9uB+0H0sPbxULaEsoaNUnlJPBIbTt09j4YGF8PbwVmsd9KzeE77ZfJPtuEhERJmDzGHx5ZdfPhquKkMwK1SogNKlS6vAYO4yRSAYv348jlw9oiYgql+sfoJOhuLSg0v4YsUX8HL1QqdKnVAkZxF9z2NrTqxR0w9Lx7+25dqqEQHxSR+AqVunqmmKpRkhqT4Dx28cx+g1o1HIqxA6VuqoFlIq6f3sqVyJzFH8oVGW8GFGmYe5Dst7FhlaW6dOHXTt2lU9lovRfv36pXixqoxm0Z0KpZlARgJIFb200Tct1VTf89jBKwdV7UFoZKi6Ys/llnCSCKnilw6G+y7tU4X3G3Xe0Pc8JiMNZJSAdEKUPgM1CyfsJSpDGHdf2I2FBxcil0suvNfwvSeaI4gsTfxOhUuWLFHz5ctKgURpxbTEsiyGJNNgyzoSnTp10vdaDpnkqmPHjmomx48//ljfav4sOhBIe77MRdCgeINklzXeeHojDl05hFdrvIrc7k+mNCnMZ26fqdY5eKnCS2qYYGIX7l3AT9t/Ussny9oFiUntgfQrkA6Lg5oNgrMd5+0myyczDMqc/7dv31YrGUp7aHLr8hOlBpnZUEYWmKbAHjBggBq3b2lBVH4OCdGy5LPMVPg8k3JJkSxzF8jiX+nNogOBFMQyrM/NwQ2Odo761oSCI4JV/4DszkkvxCEzEMp6B7ImgXydpMjkQzLngEx/LHMYJCYvoSyBLH0ZcrhyFkLKHGQBm7ffflt1iiJKb7IWhiygJO3xllhMSX8CCdAyA+bznL8cK1N8SyBPb5lyHgIi+u9kpjUZVy0fyO7uT87VQZQW5MLt1KlTqnZAhvHJYlSUPhgIiChZcoUmbbnmPLsaZT4y5a9M5NOiRQt9C6WHTDUxERGlPo4woIzA/irpj4GAiIiIGAiIiIiIgYCIiIiMGAiIiIiIgYCIiIgYCIiIiMiIgYCIiIgYCIiIiIiBgIiIiIwYCIiIiIiBgIiIiBgIiIiIyIiBgIiIiBgIiIiIiIGAiIiIjBgIiIiIiIGAiIiIGAiIiIjIiIGAiIiIGAiIiIiIgYCIiIiMGAiIiJ5H1C2cPLYcY1q/jKHTN+N0kL6dyMIxEBARpVTUYfzUqiHat+iNL1bvxYl7EYiJ1fcRWTgGAiKilLIuiBYjJ+CTdkXgbLBGhGaAlUHfR2ThGAiIiFLKygO+1VqiQcX88HCwhqZp0PRdRJaOgYCI6LmEIzwyBrHGMCAMrCGgTIKBgIjohRhgZWsPmwg/XN/5G74b+h76fjkFfx6+i2j9CCJLwkBARPQCDNZA+LV/cfzsVdwMiYV19B2cWv0zfpgwDX+eDtOPIrIcDARERC8oNjQQQfBEkSavYtB3czD1tbIwbF6AqX8dRYh+DJGlYCAgInoBWowGx2JVUbuiL7KpT1I7uOUriLwG4MHhC7imjiKyHAwEREQvSIuOQmSU/gCxiImOQYzBABs7W9gat0TdPYtdq9Zg3cZN2Lx5MzZv3Ir9V4MQbfwv6PJh7Ny+EWtWb8HBc3cR9OjrEGUMBgIiotRmsIY1wnH/6DKM7N4JrZs0RqNGjdCoyRv4Zss1455I3N4yDm82b4pWrd/Bd8uO4Qa7HVAGYyAgIkplmhaNKDjAu+lgrLq5B3PerQYXO1ugyecY3b0UnOGEoq8NxHvNPsEPf/2FyYOaoISb/mSiDMJAQESUlpzL4pVREzCqUV7YHNmMbacCjGEhBoH7jyDsrZ54qWlp5ORcBmQGGAiIiJ7XMwpw2f34EAOs3Cqj94j30ThgLj79eglOnl6ML+dZoVrh3Mjjzo9hMg/8TSQiel7Jzlcct0P+n+AQK3u4VuqJUWPaIGxJH1TqsRMV3miD6sWzqc6HROaAgYCI6LlEITQwErExUQgKj0T0o9UOoxETE4vwYH8EXjuP8376Zp3BOjsqvfkBBnkbH1zwQ1CUhlg2FZAZYSAgIkqpqH0YX70YWg5bg+tR17FnTHtUefUbzFvzJ8b1bYHSncdgtd9tXNs1DF1qtcVHGx/oTxShuLxyO7SPP0MXxz/w7fhlOHwnXN9HlPEMmizXRUSUhOzZs+Off/5B1apV9S1ZnBaBgBu38dB4da/Juscx0dCcssHLzRYxIQ/hFxgBKxvjdVas8WPVxgEuXjnh5WhtfByG+3tn4YcjlfDWq6UQu/xjNOl7GFW+m4rxfaojr4P+9UkpUqQIJkyYgLZt2+pbKD2whoCIKKUM9vDw8YVvwQIo4OuLAoUKo2BuT7g6ucAjR14UKlzIuN24r2BBFMjnHRcGEINYv72YvSEvOnWpgvwuHijY5WOMeNkKWyfPwNztlxEc99WJMhQDARFRmolB5M29+OWrZbBv0QQVs9vFjT6wKYEe77+MIkGrMWrkdCw67q+OJspIDARERGkiFqE3d+LXAa/hvR+nY1z/CVh9LdK41bjnzAK8O2QO9t64jZCt3+Ltxm9i2JxDuBkT90yijMBAQETPJX63o/DwcJw9exaRkZH6ForPxiU/Kr4yBD/MmIJhfWqigKt13BwFnsXQqOcQTP95Fmb/Mh3jP+uC+qVzwjkLjDoICAjA1q1b1e8OmRd2KiSiZCXXqTA0NBSrVq3CihUr4OrqijFjxqh/iZ7l+PHj6N69O2rVqoVOnTqhWbNm+p7H2KkwY7CGgIhSTK4fdu7ciWHDhuHTTz/FvHnz1OOYGNZ1U8oEBQXhxIkTmDFjhvod+vbbb9VjyngMBESULAkA1tbSUx44deoUJk6ciA8++EBdvV24cEFtd3FxYe0ApVj835VDhw7hk08+wdChQ/HLL7/g+vXraruVFYumjMAmAyJKlpeXFxYtWoTg4GBMmTIF69evV7UBdnZ2MBgMiIiIQIECBTB48GA4OzsjNvbRtH1ET5Dfm9OnT+Obb77Rtzzm5OSEbt26oW/fvujQoQNmzpyJ1q1b63spPTAQEFGycubMiWnTpqmrt9WrV6ttUvDLFZwEAvn4cHBwQK5cuWBvb5+gwyFRYvJ7I00GZ86c0bfEkVomCZ3i3XffxezZs7F48WK0bNlSbaP0wUBARMmSToUrV65EdHQ0vv/+e+zduxeBgYGPeoi7ubmhT58+GD16tAoGRM8iTU+lS5dW9yUISJNU/vz5VUdV6UQ4YMAANGzYUNVItWnTRh1H6YMNNUT0VDY2Nqhbty6WLl2qOoJJz3BfX1+1T0KA1AyYru6InkUCpZAwWahQIfX7VLhwYfz999+qb4pss7W1ZW1TBmAgIKIUkere9u3bqyaEIUOGqJDg4eGBq1evquYDopSSAl9qAe7fv48ePXpgyZIlKF++vL6XMgoDARE9F+kl3q9fPyxcuBBNmjRR7cFSi0CUEt7e3njzzTdRu3ZtXLlyBY0aNdL3UEZjHwIiStazVjuMiopSbb+Ojo6qBzlRauDERBmDNQRE9MKk6tfd3Z1hgCgTYCAgIiIiBgIiIiJiICAiIiIjBgIiIiJiICAiIiIGAiJ6Cj8/PzVtMVF6CggIQGRkpP6I0gsDAREla/r06WoqWaL0NG7cOFSqVEl/ROmFExMRUZLko4FTElN6i/97x9/B9MVAQERERGwyICIiIgYCIiIiMmIgICIiIgYCIiIiYiAgIiIiIwYCIiIiYiAgIiIiBgIiIiIyYiAgIiIiBgIiIiIC/g/0UFdlnzf/hwAAAABJRU5ErkJggg==';
}
else if (selsituac==3) {
		inicial = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgQAAAG4CAYAAAA64v8FAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAFsuSURBVHhe7d0FnBTl/wfwz153wBF3xBFHSHc3SIeAhIL4EwWVPxggiIQoShiANBKCCgqCdEg3SDfS3Xlc9/zn+9wsHnAHh1zs3n3evkZ2Z2bvZuP2+cwzT5g0HYiIiChTszH+JSIiokyMgYCIiIgYCIiIiIiBgIiIiHQMBERERMRAQERERAwEREREpGMgICIiIgYCIiJKAxwCz+JxpEIiIko5UqKYgOi7V3H92FrM2BQEU8EG+LRTMTjH70EWijUERESUcvQwEHHkZ3zUvT1qte+FkbM34PjdyMcqCGIQcXMLfmxTC9X+bx6OhcYizthC6YeBgIiIUpSdbxV06twcVbK5IOpqIEyOtpIT/hUbgruH12P0shiUrFkc2e1tHt1O6YKBgIiIUpSdTxFUa/0G3qxbHLkdYhHz2IXpmOA7OLfnHAr0H4ahHUsgm4OJgcACMBAQEVEqsIOjkx1cHTU82lItHMEPruJoeDUM7FMHOYy1lP4YCIiI6MVp93Fmy28YM3wwhkxfhcM37iFaL2KeOPPXw4G9e0681LQ9anixXsCSMBAQEdGLib2Ov6fMwtyVm7F930EcOrQDazbvxYkr9wE7W2Mng8kZblmKoE7VrMYKshQMBLoTJ9bj8uWDxj0iIkq+EFxYNQGjZh6GXe3P8Nufy7B4fA9Ud7yF4+ev4HqcLeyMPcmyZepxCGJjo3H79lnMmfMefH2LoVGjT5E1q7+xlYhSlobwGydx7Mw13IsA7G3t4ZzFF7kL5ENu9+QUGbEIPn8cp67fw4PwSETFZUGewgEo5O8FB2MPSgd31+CTOr1w5uN5mNq5DLKb34y76zG06/9hyNqc6DBmHGa9WwpOUUG4ceEEDl4IhpOTvToj1WKzIKBSMeRyDsaFPYdxNSwCIVpOFC4VgDw+zgwTaShT1xCEhNzBuHGNcfr0VmzdOhXz539sbCGilKfhzq7f8P2Ad/BKo/qoV68Wqjb/BKPXXDG2P8tZLPqsI+pVr4P6TV7Bq299i59Wn0WQsZXSQxTu7VyGX46XQ53COeFib6wWntmR38sb3rZxqpeBai0QfBG7532JNs0boG7t2qitL3Xajsfm61FAzDms7vcq6tRriMYdx2HZkdvQcyOloUwdCKRyRGoJNC0OcXGxOHlyEyZNaqWCAhGlMM0GeVoNxdwtJ7Bv+gdomkdfd+U4ti/ejsPJqKeM2PInZu6+pAeAuugxYzeuXPkDo7qXh4+xndKBdg8HNm7FPZ8cyOrjBPuEbQTtssAvhzuyu+rfr/r7qwYeyloSLQcvxrUdE9HV3wH29gXQdMJneD3ACXAoi3dH9UX9ftOwdOv36FU3L9zUD6K0kmkDwbVrR7F06WCEhz8w1gBhYfdVe4KFCz9V24koBT0sLBzgnjMPqtapjHz+UTh+YCHmbLxrbEvKGSyZfRR+ed1hkyUbPBwea6hG6UBK+Xu4euIOtJhYdYL1aK7T9BOtx7scCnt4lX8TI2YNQU3TVexbtRMnwvW4oN3Grp126NWtNeoU9uS4BOkg0waC2NgYREaGqA9xQnJf1st2IkoNGqIj4pClRFW0alwBxW8fxOoVu/C0CwdRB9dhT4N2qJUrB3IhGjFPFD6UPmxga6sXI/J+PM8bYnJF1sqd8eXndXF79jAMXXgUpxeMws8u1fFSdk+4Mw2ki0wbCPLkKYOOHScgf/7KcHJyh7t7dvj5lVD3Zb1sJ6JUEheDGLd8KF6/IeoVjcKpFX/gj32hxsbHXcO6mVdQtXReZPV2jj/rNLZQetJLbZus8C/tB7v7F3D5ehiinmNCAltnP1R65xN8Xf025nZuhDe2V0HPdmWQ34PNCNNLpm5D4O7ugw8++AuFCtVCzZrdMXDgXnVf1hNRaopDTLQD/ErVRbNGleF1cgt+XXgg8QaCl7ZgRa6XUT5vVnjba4hlGrAcpiwoW78+ctutwPdzt+H8g2hjgwhHSHQkQk22sLNzSKQniB0cfKqi24BOyI4bOH07DHF6xmDlQPrJ1IFAPnryQTWZbGBjY6ffdlT3+ZEkSgOxMYh190fxevXRongYTi+ajUVnHy/tg7Bn1ha8VKsosjs7w+a56qUp9dnCtWY3TOnTAOEzh2Lg96txPEzWB+HQuk3Yd+IWXO5uwfzu1VGmyWDMO5/w/YtDXNh5rNrsiH6DWsN23vcYtfQM7kUZmynNZfJAQETpJw4xsQ7wKlUTLV8pD+/T6zBn5VH8Wx7ohcf9vzE3uD4aFvGGix7UpbV6qokJxr1LWzBv/PcY3HYE1t431tPT2fqj3qAJWDWhCUzTuqK6Rw6UfW0STnrkQwG/qqhUri0+mDwFw4e8g5b5zCdbGmLDLmPnpEUIbdsD3fsOwTdtwjFvyFQsOXE/wWeA0hIDARGlGy1W/59LQZSoVxe1ve/iwMxV2KfOMKWdWgjOLl4Hl7oV4OsmNXepmAZizmPD6D5oUqwR3howCQtPBiOSE/Qnkwm2bkVQ+43+mLBuNdZuXY6ZX3bByyWro+3Xw/HN3PH4vEsrNKrkD2dzHogOxu2/l2NT4VZoXy4P3DxK4rUhvdEq4md8P3YBdl3nCATpgYGAiNKPKuOdkadEHbTqUAx3jv2C71fG9zcwRZ7Gkl350bxyTjirAW+SaEyYEjnBNifKduyGfp91RFVTIG5rdrDllcPnYuvqA/9SZVGhakWUKewHb2cXeObyRa78vsjq4gAHc2kTdx8Xdy3AiHnOaNy8JLKoNoQ2cCreCR/9rwhuL/sBX0/YgFPmNqapWStEj2AgIKJ0Z5M9AOWbN0IDj8vYNHo+dgdH4fbWRThfoS6Kezk8ffhaUxRu7pmH7zs3RK1GLdC27Sto1f41/ex0C24iFqH7p+ONlq+gWYPaaPrtWpy8n0iFtMkZ3nkronHbRqhaIgtiY1g9kCriAnFx7XR82Op9jJs1Gr2/3ozrakMwjv/6Kfr/cQi3bx/HmuGdULfT9/jj6F3EMpilGQYCIrIAXvAtVgtt6/nh3t6F+HX5Wixd6YD6zQvAxeZZJYItXP0Ko2S5QvC+tgULFy7B0uV3kL1IbrhKw+Fs/vAP3oNTEXlQsrAvPJ2THtTIRlrEuznqZ6U8LU0VJge456+GjgO/xaSJH+G1Sr5wURvs4V24Nl7rOxZTp03D1ElfoHebCgjwdmQT7zTEQEBEacykevbIgDY2Cb6BnHO+hBqvvoxi0TuwaNQvOJK/OerndNALaWMHveC30x+jegXpy8PVmi3ccpVFo94jMHrkZ2hb1Bcm11yoWLkA3PSvOMc8xVGhencMHf0dhrxSAjmd/g0EERd3YM63/dH1fwPx7YLdOBUGOOnHxDjwfJI9R57JBVkKV0fH3h/i/XfewXvNCsNTbXCCb+VX0b1bN3TT13d7/0P06VIH5XLJO/gcP59eCAMBEaWNBN/pdojEncAwhCQcENQ+GwpWaYVudXPi6nUXlGtVEu7GpngRuHsnCJFRYYjSw8HDfu0m8w/2QMFGXTCgb0sUw078NGk9biAUZ/9cgrOFWqPZw7NRoeH+3t/wy28rsPVcKGwco3DvxEHs2rYfp2LtYcfT0udiMpkwduxY3Lx501iTMubNm4fdu3ern0+pz/YLnXE709qz53d4evqhSJE6xhoiSnF6wf3g5Bb8tXwufv59EVbsPIFTZ+/oZyV2cPLNAx8nE+wdXeGZPRxb7Zti6GtF4KrKgSCc+WsBFi2ag+mzV+GfwECERNzHlSuRsHX2Rk5fdzycZM/GHT65ssLj4gbM+HEHAl0cEXQ1BmVfb4AAV7uHtQra1bX4bsw87LKpjLcHfoZeHRqiXv5onN20Css2nEKwU1m06loPhZyNB9AzVa1aFR06dICfn5+x5sW9/fbbsLGxUbMiUupjDQERpRENYVcPYvO6LTgclhMBeX1gf2Y71mw6iqtGV0M4eiJ/tY74+o1KyP7wpDAM1/euw7J1Z+FQqTXatK2O/FEnsG3VNuw5fQ+Rxl5m9tnLoeWH7+JV7y2Y0ncazr/8Omplc0zwZReMQ7Mm4rfrxVCjTUt9W/xamzylUblqUfhevoXYZ7ZboMd5eXnB1jZlJ51yd3eHszNTWVphICCitKHZwLfehxgzeyW2rluJZctXYe2WFZg9phvq+RpXFExOcMpaGi0qZ1UPiZcTNQfNxOLVa7B66UL8uWAxlq3ejJ0bf0D/DsXh/cQVfwe46IV7/Y51kSdbIA5vOYYbUQn2iTiAxX+eQ958uVEmb/wV7Hj2cM7mh7zFsiM2lr0MKPNhICCitPGMk+7/fk7+6CNjgi/h6O4DuJTvbYx8Oxu2DRuBGXtuIdzIBNrxXVhz3R427j7wdk74FWgHZ48syJLbE1omnDAhPDwcoaGhehiS0aKsW0xMDEJCQtRziotjuEsuBgIiyjiibuHC/p1YdSw/3uvdCa9/1A8f+q/BN1/Pw94bYaouIfDWddyLiUCk3Hu83NdkDv8XL0CkMDp8+DDOnTtnrLF8GzduxOzZs7F69WocP34cly9fVo0E7927h+DgYERHJ5y4yDLIMYWFheH+/fu4ceMGrly5gosXL+Kvv/7C1KlT1b8PHjww9qZnYSAgogwiBFeOH8b2bRFo8cHLUHOWZq+PvmM+gt9fP+CrSVtxKjQWNg4OsDfFF/ypNTfCvn37UKtWLdStW9dYY/nmzp2L9957D82aNUPx4sXV0rZtW/Tq1QujR4/GmjVrcOLECdy9exeBgYEqJEiNgjkoSNdAaQCYkqR3gTmgRUREqN8pv1tCyqVLl7BixQpMmzYNn3zyCVq2bImKFSsiX758aNGiBfr06YPp06fj9u3b6vH0bAwERJQBROHOvqX4/cdpWOZbBcUdjdUwwb10HbzqfxFrvx6IofMOIcTDH/ndw/Qz4Cu4/uDRJolqcOQXDAlSWEnhKWemUoANHz7c2JJ6pLCUwlnOlv/LYubo+PCFU8e+fft2/Pbbb5DOaM2bN8dLL70EHx8fvPzyy+jevTsGDBiAZcuW4dSpU6qaXqro5ZJDYr/jeRez8+fPY8OGDapbo/xOCVkBAQHw9/dH69at8dFHH+Gnn37Cnj17VC1BQhIo5Jjk2BL7Hc9a5DXNVJcc9FSX6U2Y0EJbuvQL4x4RWZvoi+u0se+UlKJcc8ldS3t7+U19bawWdWO51jcnNDuTSdOzgb7dQ6s8dILWt3p+LYddA63nrEPanfgfoYvWbu35Sfu4QoCWtfAAbcW/G56LfqatOTs7q2ORRS+8NL3ANramjqpVqz78fWmx2NjYaHny5NFy5syp6YVuovtklGXnzp3Gq5zxmeR/+pPO1CZObIm8ecujRYshxhoisipanH5mGoPoWL3cl1EQ7exgJ10H9fUx0dH4t42gCbaODog8/jMGtPsEs1EH7307EoObFYTDxT1YPmcSRq1cjS3br8OUJS/KfrYYf39S9t9xDp5BqtQHDx6MBQsWqPtSha4XmqoKe8qUKWpdaoiKinqh0fykZuDNN99Ulw3kZ5l5e3urSwd58+aFvb29alNw7NgxXL16Fb1794avr696fuXLl1eLnMlXqlQJkZGPdwZ9fnJMUhNRqlQpdOnSRb220kZAagLk90gNTOPGjdUlhKCgIBw8eNB45L+kVmPEiBHqOSR8Xsklr6mDg0OKXwqxVAwEOgYCoswmBvdOrsP8cd9i7G8b8Y9TVTTr3R99y97Fvrk/YZlHF/SsXRJlm1RGAYfk93+YOHEievbsadz7lxSaS5cuVde4LdX777+PI0eOwMPDA3fu3FEFb+HChdGxY0dkz54defLkUVX1MjaALFJgS0Epi4QFGYdg06ZNKFOmjPETX5wEAln69eun2ipI9b1ckpDAIZc05BKBtCWQoCLHvn79epw5cwY1atRQIaFo0aL48ssv1b/0bAwEOgYCokxIi0Z40H3cfxCKcM0Rrl7e8HbWEBOq37dzh4eTPRzskz/QjrTS//TTT1VB+jg7OztVsK1cudJYY3mkIeTRo0dVeJHRBl1cXODm5qb+lUJfnoMU/EmdLUttgpy5ly1b1ljz4ho0aIBGjRqhb9++xppHSdsACQiySGCQ9gISFKT24MKFC+pYa9asiWzZjNGn6KnYqJCIMieTPZw9s8Mvb34U9PdDTk9nODq4wNU7G3zcnZ4rDMh5lRT2iYUBIQXX3r17sXz58heq2k9NpUuXVr0K6tSpgxIlSqBgwYLIkSOHqg1wdXV9WCNgSSSkyHFJaPH09FRhplChQiqUSG8JuaSQJUsWY296FgYCIqIX9Pvvv+OPP/4w7iVOuutJ9zhpuW6JpHCVGgEpYK19MiEZQlmGPJagkNLDKWdkDARERC9AuhlK1zu5lv00cv1butBJeEiJRndEKY2BgIjoBYwcOVK1zn9cYmfZ0tJdWufLSIZEloaBgIjoBVSpUgVfffWVGs3vhx9+ULfr1aun2grItfdXX30V48ePV9tHjRqF/v37cwY/skjsZaBjLwOyNPJnaT7DTHibLEti783JkyfRtWtX7NixA05OTioQ/Prrr8bWjCs9ehlQymINAZEFkkJGqqGlTzXDgOV6/L2RSwE///yzCgNChhSWCXbMAxURWTIGAiILJS3SzQULWYd169Zhzpw5xj39C9bGRnU5lPkMLLV3AZEZAwGRhZJ+1TJsKlkHGd1vyZIlqreBueZAehbI0Loy7K5Mx0tkyRgIiIhSgIxDsHjxYnX78aZZMoLe0KFDcevWLWMNkeVhICAiekFSAyBzFUhtQFKktkBCgQyxS2SJGAiIiF7QL7/8ouYyMI+OJ90NpYeBXDqQ27JOgsCPP/6Ic+fOPVGDQGQJGAiIiF6ATLsr3e1kiuDOnTur2QFff/11NSeABAHzuvbt26tJdgYNGsSBicgiMRAQEb0AGalw165daljiGTNmYNasWerf1atXq54F06ZNU+tkLAJpQyBdEDl0MVkiBgIiohcg3QxlSGJpOCjjDsgi0/HK7Ie5c+dWt83rZR/Z18fHx3g0keVgICAiegEym569vf0ji5B/zd0PE9tOZGkYCIiIUgEbDpK1YSAgIiIiBgIiIiJiICAiIiIdAwGRhZLGatKP3YzXpIkoNTEQEFmQ2bNnY+zYsWoinNu3b6vx8aXf+uXLl5+YapeIKCUxEBBZEJlL/8svv0S/fv0eBoLu3btj8+bNxh5ERKmDgYDIgnh5eSEoKAgPHjxQA9rIZQO5VCAT4xARpSYGAiILEhAQoCbFMZOR7tq1a4eSJUsaa4iIUgcDAZEFKVy48CMj2WXJkkWFApkxj4goNTEQEFmQihUrPlJDYGdnpwKBt7e3sYaIKHUwEBBZELlkICHATBoWStdDaVtARJSaGAiILIjUDiSsITh9+rSaQpcT4hBRamMgILIw5cqVg4ODg7rt5+enLhkQEaU2BgIiC5M/f3512SBXrlyoVasWcubMaWwhIko9DAREFiZPnjwqEOTIkQPFixdn+wEiShMMBEQWpkKFCqohobOzswoFCdsUEBGlFgYCIgtTtGhRFQKioqKQPXt2uLu7G1uIMpewsDD1d0Bpg4GAKClRd3HjwkbM+vxrDOs5HX+HGutTmaenpwoEe/bsUV+GCWc8JMpMZC6PHj16GPcotTEQECUm8ijmftIdTcq1wHsj5uCvc6GIfmT24RhE39uGiY1K4aVOM7D7XhRijS0pQUYslJoBth+wXvL+2dhknq9YmY1TwmxK4qBcacukcZJ1TJzYEnnzlkeLFkOMNZTpxQbh2qm9WDXpW/ww6TDiGg7EtAX/h2rmEYRjQ3Bn+xhUa7AOjX+fjEHNiyK7Y/K+/OVP7llTGX/xxRc4deoURowYAX9/f2Nt2rp16xY++ugj9a9MskTJJ0FABpU6duwY6tWrh5iYGGNLxiSfj7Vr16r2LxJiX3QyrpCQEAwZMgQNGzY01lBaYCDQMRDQ4+SPQorsu1u+xUfv/ITd/j0wc/EHDwNBTMhl7B37KYZr72Fq/1rI+e/ggsly9uxZvPHGG4nOUSBfrocPH1aXDeQMSf5N6z/TVatWYenSpejcuTPCw8ONtURpp1SpUvD19VWzfloTc02J/B1HRkaqdhD/NSBJkFy2bBnc3NyMNamLgUDHQEBJub9jDHr/30zsyPoOZi4xB4JIhFzfjVkTT6DCJ11Rxev5z57lrHvKlClwdHQ01jxKqkkHDhyI+vXro0qVKuqLJS317dsXW7duRfv27dWxEqWHDh06oGrVqoiIiDDWWDapGZLl888/V0FAug3Lc5AeQ/8l2EiQ+Pjjj9OspxEDgY6BgOLFIeTURvw+bzX2Xs+KSh1boUrcKozrPRMbs7yDWQ8DQRQig65g3ykvVKuQRT0yNcgZ0rBhw/TPZQtjTdq6fv06KlWqhCtXruDtt99W7Rqio6ONrfQ0MtT0P//8g0WLFmHQoEFpHujSmjxfqeLv2rWrGkfjv57Vywidw4cPV4NzHThwAEuWLEHLli2Nrdbh/PnzapKyu3fvonbt2pg9e7bVjDbKQKBjICBpJHhr20zM2XAB/1y8hQgtC/IWLYp89rux6JddOO/zP0xPcMkgLcjZxeDBg9GxY0djTdq6ceOG+mKTQLB3716UL1/e2ELJsWvXLnV2eOHCBWNNxiZTdUvPmIIFCxpr/psCBQqgQYMGWLhwIcaOHYtOnToZWyyf1GS89tprWLx4sbovNQNy2e3rr79WXYgtHXsZEOmizy/DiPErsM+hGj6YMA2//PQNPmvii9hzZ3HmYhDsbDPfn0rCc4Xg4GDjFiWXvGYv2rjOmsjnJSgoyLj338lrJt1tre21k+PdsmXLwzAgpP3N3LlzcfDgwTRvB/RfMBAQ4TZ2TxyN2VGN8frr9VDCOX6ta8mqqFjYD1nv30WsjSm+lSGiEHrtKNb+Ng9/Ll6CpUsXYcG8Ndh/LQwx6vsrDkFn/8balUswf97vmL9xP07cydjVxUQU3y5Iegc9ThoXTps2DefOnTPWWC4GAqLAPZj7+2VUrFQQhTwTNvJzhnee3Mjp643Y+NJeF4GgU+sx5aO30a71K2jVqgPe7T8Fq04FIcoIBPcOLcYPfTujfcc30HPiCvx9la30iTIyqQlYsWIFdu7caaz5V2BgIBYsWIDVq1db/KiLDASU6YUf2o4Vd71Uy34Xh4R/Eg5wz5YVnjncoMVp8X0R4QHfOh/iz6NLMbLVS3CxaYfRWxZiYJ2ccJGuh5od8rUZie/ffQdDxs7Hkh8H43+lvYzHElFGJO1spGfO00yaNEldOrBkDASUyUXj7o0ruBcXg2hNw+OX+bS4uPgw8Lhs1fDeoPdQ1/4Ytu26iNBYYx+5rBC7Eys35EABv6IomjV+dfzlBiLKiKT9gPSsyJs378NFyBTmMrCYLDL2yJ07d9R6S8VAQJmcCbZ29rAzaYh7nkY/Jge4FKuFdi/fxfQxS3EkNAbmiwqxu3fgfJuKyFOpADjwMFHGV6RIETx48AAXL158uEjbAel6Kr1MZJHLCk2bNrXoxoUMBJTJ2SGbfyHkdbiLkxeu4354cvvZ28DWoQDqvtkKeXYsx8q9txGuul6HYf+WOyifwxv5ciQ+6BBRRvWsIbkzGxmc6HGW/BoxEFCmZ1e6Dl4PCMPJcfOw+uhNhBjr5XJCeEgYwkJiYLIx6X/IxmqDyc4Vueo0Rye/Nfhx8T7ciJDkfwxbThSEr1cO5GQeICIrwkBAZF8Bb08egtauCzH88+8we1f8UL2RRzdj89+HccrlFk6u/QDVi1dBy5mn1bZ4trDxLoc2vRrhzsK/sPlSKCL3b8fxqgXg5ZcFRu/FTEkmp3n33XeRL18+NSCLj4+PGnlx/PjxKdJXPSXI6IHffPMNihUrpo4va9as6njfe+89XL582dgrfUmrdBnpznyMOXLkUCMByoBHp08n/CymDzmG5s2bq2OSKnPzUNsyD0ZmGoMho2AgINILdu8q/4cxa2ahr+9WDG+QA6aAFvhgnx38i5dEowoV0azvdCyaMgnjOxcyHhPPZJMVZVu0Qt1rK/Dn9tWYM/IgSvtlQ67smTMOyPVRGW5Zhp79+eef1bVUmfVPhnGVmf8+/fRTVej++uuvxiPSlvn67Zw5c9QojDIS5IkTJ9Tx3bt3Tx3vzJkzUaZMmXQfMnfbtm1qtMru3bs/PEbp6y4t2mVIZDl+KYylIE5rUhUuwxRXrlxZdaeTY5LXVl5DGa1QRusrUaLEI4P0kBXQ38RMb8KEFtrSpV8Y9yjTio3Qgm9f0S6cOan9c/aKdiMoXIsIDdQC79zUbj8I16KiYo0dE4rTtOgT2pzXSmhZfFy1LPW+0padvKdFG1tfhH5WqP3+++/GvbR37do1LXfu3FKCahs3bjTWJi0wMFBr06aN5urqqh7ztMXe3l4bOXKk8ci0pYcAzc/PL9HjSriYTCatWrVqxqOe39q1azX9zNm493z0Al/z8PBI9LgSLra2tlpAQIB29uxZ45GpT95nPTBpjo6OiR5TwsXd3V0bP3688cjk8ff31958803N29tbmz17trHW+sh7c+PGDeOedWANAZGZjSPcfHLBv2BhFC2QCzncneDo4gnPrNnh4+EEe/vE/lxMgF0BNOlUHy53vVHu5Voo5uuJ55wN2eqFhobit99+U2euMp57YtM6JySTJH311VeYMGGCsSZtzJ8/X9VcyDwNMqWsTMqTGJmxTlqJy0Azbdu2NdamjZUrV6qaFLm0Isf4tJnu7OzscObMGbW/TKqT2m7evIkPP/xQ9aeXSwIuLi7GlsTJ8M1ymUjmJSDLx0BA9MLs4V2jEVrnbohXqxdAVvfM92clMyPKwCv6SYZakjO7n4SIzZs3p2nfbLkcINXbUphJcElqVj55DrKP/LtmzRqcPHlS3U4Lhw4dwqlTp1RrdDnGp80wKfPlCxkJTx6T2mTUPQl+Ql675LzPclwbNmww7pElYyAgSgmxMQitXQfl8nnCzVj1oqypC5f0sT569Ki6LQWpuaB6lk2bNqVpewIp2M2N3eQYzbcfZw4EQp7b999/nyaBQM68JSQJ+X1yjE+bSjjhtvXr16v2GqlFCn+ZwdEcUOT1edqxJbRx40YsW7bMuEeWioGAKAWEHdoF1CsJXy9n2BrrkpLcgkUKA3d3d+Oe5ZKCIbkt3qWK29HRER4eHuq5SW8EOWNPCzKFc3JmbZTLBXKMUh0uU/rKbXlsWgQCCVUymE1yyKUE8zE6ODiox0mVfmqR2oEDBw4Y955OjkeOz9PTUx2jvO7SYJMsm0n/kKdNPZgFmzixJfLmLY8WLYYYa4ieQ9RBTOn5K+x79EeHktng9qxEoJNubQMGDEjyGqwUSr/88otqxS1dzp5WbZySzF8HEydOVK3apSW7FNhyhlenTh217XFS9T9r1iz07NnTWJM0uS4vz02u3cvvkjAhj5Mz8NQmz0le82d1e5SaGQkucqxSsEkw8/X1VbULsi651q1bp1riX7p0yVjzbHLZZeDAgarwfRY5NjlW+Vc+H9Kqf9y4cahataqxR8q6evUqhgwZghkzZhhrkiavX8L32dnZGb169VKPfxbphSKfNem6KO0POnXqZGyxLvIayGsmXUWtBWsIiJ6TFhWIizt/x1cjv8G3w4diQK9p2O3dAHXye8E1+eXFwwLx8UUKHfkylEIoW7ZsD6u202KRYzKHguSSUCP90IWc9UtDOGlUKOvl7DrhpQ+pYpbCS6rh5fq4VEOn1QxwUlCaj0cKUSmsErssI89fjlGOT8KDvP5SuKUFee1kEXKscoxJ/W553eT1k7NvOVbzc0ot5qAkEr7Psjz+e+U1k+OTsCjHJveTe3mB0pH+4c/02O2Qnkds8Flt07CaUmrqS06tcPXPtSUXw7XEOiUmRi94jVtJa9GihVagQAHtyJEjxpq09zzdDg8ePKj2k65iXl5eqsucdDnTzwxV97341+rfRS/kVLc1/exJGzZsmPFTUp9+9ql+t5OTk6YXoOp2wuOSY5XjksV8nJ6entqrr76q6YWa8VOS5790O5TXsXHjxup3y2uX2DHKYj5GOV49QKp1PXv21PQzUuMnpTy9cNemTJmifleWLFkevs+yyHEm9j6bj61UqVLa4sWLjZ/0dOx2mH5YQ0D0nEyOWVCw1v8woFVbvDpsEn5ZNBAt8zolu7pNzrSeRa7Jnzt3TnUpswZydpozZ07cv39fVXfLmbWcuUpNgP49Y+z1L6mNkLNbuRzSsGFDY23qk1nn5HfLWaucwcrthPTCV53tyvMR5loTvYBKk1qC0qVLo2TJkuq2vHaJHaOQ4zOflZvPvCtUqAA/Pz91OzVIjU/t2rXVbRmAyPw+yyLHmdj7bD42GaiqVq1a6jZZLgYCoudksvdC7hpdMWzxAswf0BqVs8UXHinF/AUr11KlMEir9gMvQsKAjKiXnELTHIhk37p166qCLK3INf3cuXMb954kBZg0dEzY+FCGXJYRAZMT5FKCFLoBAQHGvcTJ8clxmklbk0qVKhn3Uo9cKmjdurVx7+nMr5c8RoY01s/41X2yXAwERBZGWnLLtVf5IpV/E5sxzdLIl32/fv3Qpk2bZza8kzNJCQNvvfUWunTpYqxNG/L73njjDdUyPzmkoZ40mExLzZo1w4gRIx62JXgWeS5TpkzBSy+9ZKxJPTK//y+//KKGVH4WeZ+lJqNPnz54//33jbVkyRgIiCyMjPkvVdpytiot1BOerVoyaVwmA/9IgSbdzRI7o5YgIN3RZPS/jz76SFXhp7Xhw4ejW7duqnBLKrxIq3iZz0BGACxYsKCxNu00atRITbwkx2i+fPE4OUapRZKeCUWLFjXWpj4JKjKmgLw+SYUWeV1lW48ePdRrbW6MSJaNgYDIwkiXRDm7On78uJooxloCgZBCYMmSJfj6669VVbvMdCi1B3IW6+XlpS4PSBdDOaOVs+/0MnLkSEybNk0VvHLd3XyMssj1bpmpUUYo7Ny5s/GItCW1Q1KYStdFqaI3zxgpxyn/yjFLu4bdu3ermQ+fNrxxapDXSGqypMtooUKFVG8YeX9lxkg5xurVq6uaFQk1qdmugVKY/sWT6bGXAVmSVq1aqcl/5M+zbNmy2vbt240taet5JzdKivycwMBA455l0kOXdv/+feNeyniRyY2ScuXKFeOW5Tl27Nhz98RIDHsZpB/WEBBZGBm+1tyQUM7CLGHe+xch4ynIJQRLJjUbcoZr6eQSgqWSHiPPaj9Clo2BgMiCSBBI2M1MRjmTL9nEup4REaUkBgIiC3L48GHV5dBMriVLf31r6GlARNaNgYDIgsglAgkAZjIJkIxLkJyx7YmIXgQDAZEFuXDhwiMDEUlAkClnHzx4YKwhIkodDAREFkS6Gia8PKBpGs6fP88aAiJKdQwERBbk2rVrarAZ6cMvfcvltrQr2Ldvn7EHEVHqYCAgsiAyep/MGf/VV1+pAWheeeUVDBs2DOXLlzf2ICJKHQwERBakffv2auS5li1bqh4GZcuWRe/evdVc/kREqYmBgMiCmMf6T+w2EVFq4rcMkYWSBoUckIiI0goDARERETEQEBEREQMBERER6RgIiIiIiIGAiIiIGAiIiIhIx0BAREREDARERETEQEBEREQ6BgIiIiJiICAiIiIGAiKL9eDBA0RFRRn3iIhSFwMBkYX67bff0KBBA+MeEVHqYiAgskAy02GtWrXg5+enbhMRpTYGAiILZDKZjFuP3iYiSi0MBERERMRAQERERAwEREREpGMgICIiIgYCIiIiYiAgIiIiHQMBERERMRAQERERAwERERHpGAiIiIiIgYCIiIgYCIiIiEjHQEBEREQMBERERMRAQERERDoGAiIiImIgICIiIgYCIiIi0jEQEBEREQMBERERMRAQERGRjoGAiIiIGAiIiIiIgYCIiIh0DARERETEQEBEREQMBERERKRjICAiIiIGAiIiImIgICIiIh0DARERETEQEBEREQMBERER6RgIiIiIiIGAiIiIGAiIiIhIx0BAREREDARERETEQEBEREQ6BgIiIiJiICAiIiIGAiIiItIxEBAREREDARERETEQEBERkY6BgIiIiBgIiIiIiIGAiIiIdAwERERExEBAREREDARERESkYyAgIiIiBgIiIjPN+JcoM2IgICLrFn4dRzbMw/fDv8HoMWMxbtpszNlyGVHG5sdFXNiCX6aNx7ejx2HihHH44bvRmLRgMw7ejobJ2IcoM2IgICLrFh2Iqyf2YNWiefh5/BD06f4GOvcZhTmH7yHG2CWhmDun8Pe2v/D72MH4oO9QfD15PtbvP40rwbHGHkSZEwMBEVkx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QQbfx40QDRGxpicvC0gQiItjGCCiFMdAQJRu9ALfyRcFS9ZHuxr54GQu/p3d4O1iQlxo5KNzHZix8QARpQIGAqJ0E4PY0CvYe7U8ahV2+XfIZI8CKF8qG7TTR3H03G2EGqvjxdcQmGxsYevwfJMrERE9DQMBUXqJDsS1vX/jQLUaKOqQ8MQ/P6q/0QJlYndixdzV2Hw6zFivIez2Tdy4FYy48Nu4dGgPTpx+PDAQEf03DAREaUWLQcSDW7h0+gzOnT2Og1vXYe4fl9GqdbGHIxPGs0Hulh9jUI8KiN70C0aO/RmL9p7D9XMHcPDgIRy9FovYuwexYkBXtOq1DOfYoICIUgADAVFaib2KfT/1Ra3ChVAwoDgqdRiH44374I0CT4xlqP9l+qPxgKlYMK4JXHcPR5uKL+PVwfsRHlATLd5oikrvTsCKzcuxfklXlGSbAiJKAQwERGnF1gPZixZF5WL+yF6gB8b88TumdMyXdBtB22x46ZUhWLX7MjTtLLbPeQf1y9VE27e/xIYp76FOmWLIzWYERJRCGAiI0orJG4WafIZ5xy7g5tmJ+L+6+eBmbCIiSm8MBERERMRAQERERAwEREREpGMgICIiIgYCIiIiYiAgIiIiHQMBERERMRAQERERAwERERHpGAiIiIiIgYCIiIgYCIiIiEjHQEBEREQMBERERMRAQERERDoGAiIiImIgICIiIgYCIiIi0jEQEBEREQMBERERMRAQERGRjoGAiIiIGAiIiIiIgYCIiIh0DARERETEQEBEREQMBERERKRjICAiIiIGAiIiImIgICIiIh0DARERETEQEBEREQMBERER6RgIiIiIiIHAmgwfPty4RURElLIYCKzIwIEDjVtEREQpi4HAimiaZtwiIiJKWQwERERExEBAREREDARERESkYyAgIiIiBgIiIiJiICAiIiIdAwERERExEBAREREDAREREekYCIiIiIiBgIiIiBgIiIiISMdAQERERAwERERExEBAREREOgYCIiIiYiAgIiIiBgIiIiLSMRAQERERAwERERExEBAREZGOgYCIiIgYCIiIiIiBgIiIiHQMBERERMRAQERERAwEREREpGMgICIiIgYCIiIiYiAgIiIiHQMBERERMRAQERERAwERERHpGAiIiIiIgYCIyJIdOHAALVq0QLly5VC8eHHUqVMHgwcPRlhY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';
}
	// VARIÁVEIS COM AS IMAGENS PARA USAR NOS DADOS INICIAIS


	//CORPO DO PDF
	docDefinition.content.push(
	{
	text:
	'\r\n \r\nDADOS DE ENTRADA'
	+'\r\n \r\n' //pula linha
	, color: '#3A5FCD'
	, bold: true
	, fontSize: 16
	, alignment: 'center'
	}
	);

	docDefinition.content.push({
		image: inicial   //IMAGEM INICIAL
		,width: 258
		,height: 220
		, alignment: 'center',
	});

if(selsituac==3) {
	docDefinition.content.push({
	columns: [	
	{
		text:
		'\r\n \r\nAço CA-50 (fyk) = 50 kN/cm²'
		+'\r\n' //pula linha
		+'\r\n Resist. do Concreto (fck) = '+Fck*10+' MPa = '+Fck+' kN/cm²'
		+'\r\n' //pula linha
		+'\r\n Cobrimento = '+cobrimento+' cm'
		+'\r\n' //pula linha
		+'\r\n Diâmetro máximo do agregado = '+dmax*10+' mm'
		+'\r\n' //pula linha
		+'\r\n Altura da seção em x (hx) = '+hx+' cm'
		+'\r\n' //pula linha
		+'\r\n dx = '+dx+' cm'
		+'\r\n' //pula linha
		+'\r\n Comprimento equivalente em x (Lex) = '+lex+' cm'
		+'\r\n' //pula linha
		+'\r\n Altura da seção em y (hy) = '+hy+' cm'
		+'\r\n' //pula linha
		+'\r\n dy = '+dy+' cm'
		+'\r\n' //pula linha
		, alignment: 'left'
	},
	{
		text:
		'\r\n \r\n Comprimento equivalente em y (Ley) = '+ley+' cm'
		+'\r\n' //pula linha
		+'\r\nForça Normal de Cálculo (Nd) = '+Ndi+' kN'
		+'\r\n' //pula linha
		+'\r\n Momento em torno de x na base (M1d,base,x) = '+MDbasexi+' kN.cm'
		+'\r\n' //pula linha
		+'\r\n Momento em torno de y na base (M1d,base,y) = '+MDbaseyi+' kN.cm'
		+'\r\n' //pula linha
		+'\r\n OBS: O software desenvolvido considera o momento fletor atuante no centro do pilar em balanço como sendo metade do valor do momento fletor atuante no engaste. Recomenda-se ao usuário verificar se esta consideração satisfaz as condições da análise estrutural para correta utilização do software.'
		+'\r\n' //pula linha
		+'\r\n Momento em torno de x no centro (M1d,centro,x) = '+MDbasexi+' / 2 = '+MDCxi+' kN.cm'
		+'\r\n' //pula linha
		+'\r\n Momento em torno de y no centro (M1d,centro,y) = '+MDbaseyi+' / 2 = '+MDCyi+' kN.cm'
		, alignment: 'left'
	}
	]	
	});
}

else{
	docDefinition.content.push({
	columns: [	
	{
		text:
		'\r\n \r\nAço CA-50 (fyk) = 50 kN/cm²'
		+'\r\n' //pula linha
		+'\r\n Resist. do Concreto (fck) = '+Fck*10+' MPa = '+Fck+' kN/cm²'
		+'\r\n' //pula linha
		+'\r\n Cobrimento = '+cobrimento+' cm'
		+'\r\n' //pula linha
		+'\r\n Diâmetro máximo do agregado = '+dmax*10+' mm'
		+'\r\n' //pula linha
		+'\r\n Altura da seção em x (hx) = '+hx+' cm'
		+'\r\n' //pula linha
		+'\r\n dx = '+dx+' cm'
		+'\r\n' //pula linha
		+'\r\n Comprimento equivalente em x (Lex) = '+lex+' cm'
		+'\r\n' //pula linha
		+'\r\n Altura da seção em y (hy) = '+hy+' cm'
		+'\r\n' //pula linha
		+'\r\n dy = '+dy+' cm'
		+'\r\n' //pula linha
		, alignment: 'left'
	},
	{
		text:
		'\r\n \r\n Comprimento equivalente em y (Ley) = '+ley+' cm'
		+'\r\n' //pula linha
		+'\r\nForça Normal de Cálculo (Nd) = '+Ndi+' kN'
		+'\r\n' //pula linha
		+'\r\n Momento em torno de x na base (M1d,base,x) = '+MDbasexi+' kN.cm'
		+'\r\n' //pula linha
		+'\r\n Momento em torno de x no topo (M1d,topo,x) = '+MDtopoxi+' kN.cm'
		+'\r\n' //pula linha
		+'\r\n Momento em torno de y na base (M1d,base,y) = '+MDbaseyi+' kN.cm'
		+'\r\n' //pula linha
		+'\r\n Momento em torno de y no topo (M1d,topo,y) = '+MDtopoyi+' kN.cm'
		, alignment: 'left'
	}
	]	
	});
	
}



	// VARIÁVEIS COM AS IMAGENS PARA USAR NA RESOLUÇÃO
	var i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13, i14, i15, i16, i17, i18;
	i1 = 'data:image/png;base64,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';
	i2 = 'data:image/png;base64,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';
	i3 = 'data:image/png;base64,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';
	i4 = 'data:image/png;base64,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';
	i5 = 'data:image/png;base64,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';
	i6 = 'data:image/png;base64,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';
	i7 = 'data:image/png;base64,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';
	i8 = 'data:image/png;base64,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';
	i9 = 'data:image/png;base64,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';
	i10 = 'data:image/png;base64,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';
	i11 = 'data:image/png;base64,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';
	i12 = 'data:image/png;base64,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';
	i13 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVUAAAB+CAIAAAAbchU4AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAEDMSURBVHhe7Z15PJT73/+/9/277/ssdU7LOa3WpJJQslPIkhapZC0ioqQIpezK1iK7KCUlRKtk3/c1+77vy2xmxpgxYy5+1yxE6KRQh+v56I/m+nxmXNvr836/P9v7P6MQEBBLFUj/EBBLF0j/EBBLF0j/EBBLF0j/EIuQEYCEhPe5e7gIiO05auhU19ZHL4CYDKR/iMUH0FaXY21pqKpvkFddOwwA9MMQU4D0DzEfAEV5OUGBgX5+fq/evO1F9i+kBAeQbXfsjBzueTV3wYCRURIeXZGX8CzoEXgyAQEBPT099HqTaassfh3y9IG/n9+joNicEjSOQC9Y1ED6h5h7SnOzVTXPnTe6cumsIjf39lueXn0o1Ai9cN6pzks7q6ri/yQCiR4AP5IGUR/TIz3sDYW4Ny1f/rvt/bA+DJ5WcwLkR25OWxnXcUgeverg+ia1ADUwtc4iBNI/xFwDDDz297N29K1t7uxqKNI7zKV4Sj23roW0UD5AZkrKnhO6rhEJiIFPNpwEKzLUOrDiz993ih8oq66jHx2jtTT3rKLcimW/HbMJaOijtBpLBEj/EHPNCBkOhyOQ6GEyGd/f62N26Mx5rcLmFhK9eN5JSUkRPmngFpmGHByiHwLpLzPWPbaP/XdGZibz+6+6+wfpx6m8iQjXVRTazvKHxq1nTXAc/egSANI/xNwwTMSjkAgkAjE8PEw/NDra1dYkLSF3ztK9vRdJPzT/gPrfo3nRMzoLhSfSD4FOSXeekYbym/AIYf7dMvsPllZUAyP0iKSrvjw48P7bYJdj0jxat581wiD9Q0DMBoA4kBzmcviwuMBu3tLKyrFQfzj5xS2b68atra30A1MYAYABNKKmuiIv72NfH4JMnoMgAdT/3tOXvGKyJ+qf0JZ5Qe1A7Pu39y4os3PymLkFdSEw4HEyiZgU98HV07vwvedJuV3qjo/r+7C0rywFIP1DzAHlOR8O7Zf1efnG9PSZkpoaqgMwnJUVa2dn3dbWRq0yDSMjQGtZhruD6S6eLf/3C0tg4OuBueh1o+nfe7L+cU2p55TFE+M+VJWVSgvsUj6lXVzTNAyMwHs77924nphf0pAdqibLo2L/sK6X0i4sESD9Q3wviPYaU31VdU3DgqIKa4NLTbV1o6Ok5OQoFxcH0PKPjJDKywsKC/NxuM/9atD4V2W+c71hdliC54+/uQODPwzMxagbRf9aRt6xORP131+boHtcNCE2Ct7dec/SbJeIpN/z12gsLj/+raPH/aaO7o7cUBVpLhX7B5D+ISBmQdKHVwI7WP18vduLY9UvWZVXlidFP98jJiAtLX3q1CktLY0TZ7Qfv3qPwk7fr07ub3p4Q5txq1jgi/iBiT1238q0+kdUxZ45Jgzqf2hoKCUubte2bWoXrcqau69d0o/PyMGTyG05z1WkdpxyDPxy/z+qo/aGraWXl1dvby/90L8ZSP8Q3wUZBwvxuKplbJBZXmF66ez7pPSBQVx3R3Nebk7GGAUl5b0oDHmGeXhAf3PATR1GTonAiMT50z+qJl7nmAhN/xhkxw3bi1u4eLQ1FKwfhLT29YMVaPrXvvO8CU4ZGmiuKrMyM5ZTNy2tbqH+AB3Dc7p//rFcUVGxvr6BfmgylQkPr1tdjS6sxi3YgOd3AOkf4ruoLf54kJf7+pUr2a+85M+al9XPGO3PBFX/Z+Zb/5j6JL0TexKp+gf/5tNHDzazMP/26y/xKWlkgNJf2ZoVrLRvu45raBNiEN1ecstUjXn9qv/lUkgvnjRZoLa2lo9PUFFRs76+mX5oIiPA0cP7f/31F60zus0tkxqOnxNI/xDfw0hhYR4HJ7+27lmts5b5BZUk0qfBv68E1P/D+dQ/mUTo62otigtUkuUL8PetrKwkEAijuFYbEy15I8eypu4hPK6ztT7U1VRwy9/yxk7xuaU9SDSJDFy7dm2jvFFmBU3nQF9fT01NdVpaGg8PqH+9+vppBjVglVGHD0sxMG9QVFEtKqsanovhjHkF0j/E90AuLIzn5Nu1jU/w9bvIwcFJk2q+Err+d0gGvkyaD/0PwNvD/exOqyseoXL+/PmmpibweERwWElhMegO9LZUe9sZqtHLjyifPhsQnYUYGAL1v1n5Wk41xaNpb6/TMzaSkJGT3ie4auVaRcUL9dN4OgQrrZPe4TFvY58Lyh228wnuRf7sXYmQ/iG+A2CoMO2R/EHJ4OBgLPYbh83p8T/XvnnS/zcD6n/7KZu82g5Ye7vFxYtHT11IyStrby4QFhRVVLxYX99OrzdGc2msvLJqVv7HusqiU0clrtlZNnd3/+QOAKR/iG9nANtvoq9y9ozmF2b4/CMjmNZAJz2mnTKBr1IG8D+X/rlO2+fXdWanpAhyctpZW/dSERaWVlQ0qq/voNcbw9fFhm2HgKLKqfM6pyT52PlERd7ExA3if+p1hJD+Ib4RYKDTxuqK2XW9i0YGNP0XpmW09qFIs13oh2174qzPtEs28PVPpX8w/r/KTdV/WkoKNyenzSf971FU1KivpwQR47SWJmsfV7Szdnj9+m10dLS7jbngpg0Pfb3RaDS9xk8JpH+Ib2SE3F9cVZ+akqx8+lxoYp6HpY3IDq6PxSXj8vezNRPh5dm6dauJiUlXVxf96BTG/P85jf+nzP+bPaRr10w3iGpmfKxDtVfcMDzOybsv5HVSc0mkMB/H8uV/2Nvbg20Bve4wKviBvZHDnfzaNhK1z4+A7bCzMuDm4oiPT5i4IOJn4x/1j3ZwMN+xg/O3335bzcpxIzgeO9097S4O28y8fvnyZSwsLPfv358602sx0VESY3hyP8em9b/++n97JCSr65vGV5JMAHDUPLBu5R+r121k23Mk4H06di4s2zfTkBV6+rjEVjam3377VV7+SFVV9fhM++q8dJ1D4ps2rP79118YGZhOnNBsafk8sp2BERAAGHz//omYmBArC2t8XByRMrpGIey25R6erfl5GampYRxcwpb2vn1wyjD7RMBvtxSEH5QRZWVlYWZmYWXdJKprU9X6vfNqQP3v0bzoNXn9z6xor0i3OHuQh2MTMwuLuIREWVlZbV6iwUn5Hdu2sPFwb+LeZWjj/PaR02l5YRbG9dFvnt+31hDiYWdlZVW39qrrQoySEFEvXMXF+JiZmbdz8zyITkMN/aRNwNfa/+3bt//3f/+3otqp9j7k52/78MBBWan/+9//lZTcB4PB6AcXO+iPgRys635Zy2JyLwhO3WdiIvC2anFRwdWMm61D0pGDC7by9R9AtRUcEuf+5X9/U1G7UFHVOEwm0wtGR5MeW/CzsxXkFQLUwfDvhmhhYWbhejcyNva+lxc7E9Nl8+sdPX2z/+kRAn6wpqKira2TSPra2wjqX0zT0PNDJmrwu+L/L0MYxFZVlJ2/ZFJaXkk/9C/ka/W/cyf3rl2btgmKhcalE4iTnkRN2stzZxSWLftdUvIgDAanH1309MTt5GBe+/t/9h9Tya9spHl94/jYmMjyM23cxO70Jh+FX6C2n0gkRscnVrV1E2cYdibi0M9sjjP89et//m/daZM79W1942pPemTBv1mwIK9sjvSPsrAwOKh4VFNLS5eKX9irDiRm9r89gujtdLEyNTh3zt33QUVjyxDpU5s1E6D+RU5d8IjKQM1FNDETqJ7WAF+PmOxCzPf1Mv5Yvlb/YmIiPt4Oq1ev1L1i0wZHT3iQWPsr1m/evNjIwCApefhn039Pa90T3zs2VpYWFhZtfX2gLAoLCx0dHUtLS0lfbU+mBWh+IykkfOm0EiPHTteA5+iBTyFPd03xTVe3hzeO79jJvZD6x2KxssdOBCTmYGfwNodwqIc26rLHVUXE961i473kFtaDonsuVP3zFeSVzpH+hy0tripra9U2NIAxQmNVfVVJ5eDgN63tA8gdTRVPH/kY6OnoGBjY3LiZW1JDIH7ploL6P3bx2ovMkoEvVoMA+Vr9S0hIVJQXmJlqsu/a/T4+aYhIb/Oyol76eD9o6+pjY2OXlDzwU+m/ra3tpMrxIydOuN4PeOhhc9nUqA/W/uiRG5vogTeJWZ95MbOFUBF8YJ/s22eBUpxM+1T1syuaSMN0q/vUz/N5xMv8Z5d38/PefJW3kPo/qKT6Iq8CNzy9hglY5L0rqhdu3k9IiTpyWHw9J79vbCFmiGJRU4NsBLcIFs6Z/kfLy8ouqcsqHzukoqJiaW5RUlQy/s58G7Cu9qT4WH+3m4pKypfMrXOKq2Z4gkBKSsy1mzdLGptnuA0Qn5iF/nt6OoKDA1atWuny7BmKQKDcWzLK67ZLSPBb3CCenX2LpKTsfMf/mM6Ke9Z6e8WE+aZD/cyZGhiM5iCSh4ciXM9t4xO5+fQDHIsnETBZuXl2jrfPnRBQMrEuau4d/r4XHfsxUE5SuKqsxM355nrmzaERr/F4in1rKcly9/LMLq8rfWHOy7fLLjxzweJ/UP9H1dTjq2uHZriyQTTihq7sOVPn9s7uokhPwR0sAlL780GdjI7mhzuJ8ewrLKiYK/2DwDpbSks+gg5XU1MTGJvQj34fBBy6qrLswf17h+Qk9h9Rzy+umNiLATI0AHt219DmmnHzd0xJWDp8pf5HqPrvGRpsvXbl1N9rN+bkFw6ThzOiP7g4OjfDEcAIwM4O2n/pz/RPJg/jBrAY3OCc7OsCApCHBwcwKBRyWtAYzPhm74ODgzs4th6WP9LW0UnrsIR1tp/k51rxy//ccHBC9VP6ogEyGTcwALruxGHybN96WPb9/eICjY2Nma+DxbcyHjG9U9+FJA8PvwwP8/T2gcER5S+u7tq988v6B31j4hChvx9sTgng/+lHZ8HI8DCxv7+fdvntbW3KJ04kFRTAaJ+RSAwOP1HPODT8mrKY3lmL9k4YQCK+dtbetO7PQ4cP19bWVsV4Su9TKir5tCsWyAgA4LDogYGBz5buDQ0Njf/R2YJGo8lUxYIPCDXDgwQbMmCmxYLDJAwanRj98rCMyAYO3ucJ2eDDo5eNAOC7UV4ar3vJ4FVGAeT8fw1fqX9AQkKctnH6fc87DOv+cg56ikT1hj17fP/BS+qeLcPs7JslJaUm6n+ETKrOjz8mKyyoYVbc2EVbZbVggK/X5s2bFRQUPu33PoxNCbdlY9/l6hmKwQ6OAOTm8my1w/t2K2h9KKghfEXH0kTak91k9vCB+gf/b2dltXrlysjEjMaqMq/bN9MrGgnDQEmI6a7dPDdf5tL8fzQSXl5WXtPYTpywQgaHRno4XV/z1yp3d3cMZpq54sDwUG9HY1NbxwCBOF37QC4tTVVQOERzf3h5eVevXs2xY8du2mc+Ph3ngA74p/knuH646REh3VMm7e2UMTbQJusfP/7nr78eP378jYfxPvkzH8sbJuq/saz46B6OE4pH6lpaJv7xyMjIgwcP0v/GLFFTU6NNvwcvWVJSkn50MlevXp06X2AQi66trooNf3REbv8xJc0PCVm4wU9T60bIhPbafN3TSgcOy3/I+DhInN3TXLLMWv+EzmKVw+J/LF8VGPDA/JxZGwJFbahp+p/k/48M9WdHeYkKccpedKjqQHymf0xfU1ZxHWHoS75xb29vWVkZdcEmHSIOUZKb/OplxIvpiEtMROHxtD8zVf94LMLNRvuIhm56ZSuRPAJKqyzG+4DYdgmNi6lV7TP1mc/ERP1HvQjcuZ1d7pyVX+BjZ8/7MARlr0tQ/6D/7/KusJ9AHuhr9LAzW7eeUVTtems3gvoDFFpbWxUVFX/77Q93d+9p9d/TWnPppJTYQYXojPx/7LAAzaaaunpOXd1M9UD9mx0ROnvqMk3/IF2dnRpqasuXLdvC8MtfO+XzJus/xNlWgOWvE0flW37oUlYMCpGTnuLqYHf69Cld/XNZJbVDY10t4wCEnmeP3ZTOmzx4GtrS1Td7f26JMqv4ny6kJ25WTOtXi+yXvukXhcHRxEmi+v9yn8f/IwgX54uajg/qevsnT5IhOFkbyF107UHOuGhkAI22NTG5bGSEQHwSzCCqPSr8ob2ttcV0eN2/34XB0F4NPH7w+N6tMofkixo7aKF+e+tHDlZG1TM6zX0wWh1gCB7qb3by6o3cZthsN2voyfSW3ctP0z/4ip4+qfjn8t8PHpLKrGoEGxfwUMlzk938u25HFYP6RzUXPPK5w7CJXez8LdpuE+O8e/eOgWG7u/tDDGbKrQCGCzPesm1i/M9//uPr6wvKm358BsAKR1TVP5TXEma4For/ryikp0G3/zTq6qrV1E4sX77sPyz7c0rqJz4mAg5jr7LzjMqP1D8o/iBvN6PzBlfNbXJLKwhfGrUB4t+E2NqY3PC4X97WQ1pYf/Nfyiz03zGmf0JfnSAvFwcXd3lr71g7287OziIpuX9c/zWZLy8bXdDV1eTn51K/4dcIw054HEhvb6c169at3Sbo5XMfDC/BQ6kv/Y0Mz+vq6t578KSlFwU6CyZGRmuXL+fYuvXqXb/aDthswwcyeTgq2IODm8fSM6CzHweMoo2NNVhZ18sqKL54n4btrG+ADRDJmIiIW1Kg0bxgpKund93SsgsO/+zPVObl3DA1Mb11v7Hz02g5CCyHHv/TPqZHPti+je2Q3rWOPnprFeWiuoObk2b/aUf4xSSlr/q2wWl2HnvnjrO+vp6MjMyyZczu7k8wmM8nEeGxaPdrlwytrh9SEFcysilv6vzyTQD1f+CESmh2GW6KeaQB6t9Sebee5tn29m76IQrk0uwoeWn+3xglcopqaPpP+vDhqrHxGS1NfvbVysd/pP4HMP0ZCfFlZdV4wtcM5o8ge+scr2u7+3r1wj+ZDYiZ+Cf9jyB9vJ0OHNi/YsUKEVFRS0fHLiwWfEH8rQ2dg95gwAAM3+5+20JOTuzXX39ZuXKVmJhYSEhIW06ouryY35tXfrdt+Rj/VLf1aYQNTHh1CWVlRezbuUTOWGUXFJNIpDh/Z6ldbK8iXng7Oopu4zB1D2pFDES+i2Rcu/bQwYMJmXmoAfw3dI+BLUuQv7ucJP+evXslJEW3iMi8i4pyd3beyyeyV1gh52MdaRgN6p9VQMrcxScq+v2WrVsML12CwycNYSaEBvNuWLdBXCm3spG2nUNHebKNkaaUIMeqFX8ICQndvn0bhUKNEvuP7T+clF1MHCaXJIRe1FTgZln92++/b+LiO37+ekJxA4FEFtiz75DV4w4ERee3bztulTvzNPS5g63e339tcXd/OlX/SESFlppKYXm5s4v9BnbOuKTUL8+BA/Uvo6DoH5uJmS6qeu3hrHhAmnXN8o3r1omISL55E4XD0Zfrk4cwcYH2fFwyBdT+/8TERFFBQYtr1yLCw8EYSl7+R+q/q63NWEdHWnJ67oS+68NMmmwODONi3vgqnr/wMrv4U9cgxAz8o/6HUUh4W1sbGKmCwOBwErVjFo/tHxgiUSQJkBCIvvEKIGg0+qz2KQapc829yCE8ys7qsu6doMn6ByHvFBQ95hgGw+BHR0b0tDTYVa6196GGBgcd7OzWMTLHJyU3NTRsZ2I6q6Mz0f+fLUQCvrenk3Z2nb1gWEgeHBjo6uhobesaAkUygol44ahlZVfU2jNEIvmZyu47dDCuvGVoQvRIwOG6Ozo6emFDY+E3iYCD9YKvJfVqW1vB06N1aMP7YLSVHqDb3NPVPn5HOnr6cJTeuxHBvVLH7J91InFvPD25GRhev/2AxxPevX3JwLDb3f0ZZvJ7DOJ1WUlOx6q2pbslJ0JxH/ejhFjMhK6QqQAA0NcHww4SJodadDBIRMenk2rHYgcm9rET8dje7j4ikTiM7njkpG9ib1He2orDoV10hXXUj/5A/YPmober69PrNRkEGjslve9ISkqimOaF+Z7/uzj4Wv9/NsCVlQ/tPOfejQQNGt7FxfrMraCGSf4/CJFHQFje/jlV/+2amoe3qFxth6HAAm83t79WroyJiWloaNjMxKT7ffr/B4ZREUHWuvZOxZ0I4vBwuv+5vfv3P0srmSe7ISguregQ0onCOTo4rF69OiUlBWwvqPH/rqn2H9ffKyq8ZzPb5q1U1q9e8fuvyyvmf6p5d22e0TEuJwfrHhhsaBDjeV5Y79SM+h8ZAYbwA50dbXV1jSgUZmKDApCGqMfrGpubUVjcQo7+gDd2Yv4PYJiI7OtsbKirra0Fz4c2TWMqOBSytamRUqm+obMPCfpx9IJFzXzof0hZWfFvvuOFjV2InhaT8xoCJ/Tuv88CbSC9nAKWm5df5LRdWXElqIHLZzX/Xr0yuaCcRBx0v3NzB79wenYuGFozMTGpq53IKixCYHDT2rTvZATfF+5jLHfKILGoDk/AWJ7ec+yUZn1P72cGZY4ABMQkD5n7d8CxoQ89ODYx3PN+jO7vf/fyKcPGDfr655qamj7pB8A9cdBSVL7Y3EoP1JOf3t29lfl58LP5Xls50Nd456rqqfM6ueXlGDTSRHm3nKTQh4TkfopbQa8zTl9zWZD3TRFB7l9+Y/b2CRl3YYiDqPzE8EPHjknJyhxWVLh616+otmXiwOe8QtH/hPX/g8iOV/72aof3Mq5btez33568ih4gTI2PgBdeztzM69azcUrIK98MeEXLDrTomQ/9jz5+/IiZhVXFyPKqoS43058sbNtO2vhGPvPx8/FKTU2ljufhuLi5/trA7eLig8YM5EU+PbBzk9RJg1u37C8Y6ni+jO3DEkAX+qDYdp4dTMa29pWN7fOxleIIEZPx1leYX0Tj9Lk7d2ylj2u4BsfMR+L37rr88GB/lk1sm3YfCIt4C2vIs79wgmmLgJWNpZ7OkVXr14vLyBUWxD17+vj1mzctdcWxEW4iAttVTKwSy5vxJPIoEZma+HQnz9YNGza433/Q1If8zsmLX4SYkxkpLSGgraXp4ODAwMDw17qNV297NfYhp46pVWe8sr1isF90x/K/d3g/fIPB0joUgPzU13Liovo27q09feUfPxw4IH7lrk8bvH9hfABQ/+LaRj5xuf34TzondOYYnJRe8ccywWM6FQ2fb90Hb6s30ddcvfLPI5b+9b1Q/q/vBXj+/Lm7u7ufn+fDh16vImMRSHTa6wDD8/pXzc2RKIqf//TpU+8Hj9NK64aoZiEn6oWPp4ebm9uLyJhOeD8AjIBhdn5CmK+3R35+/lzNHp0KDg1PjHnn7e0Fnm1KXin+i/MRvpmumtzQID8Pd/D63MDQBrThrRV5QY/83T083Hy8PR48LqmuIxK6/L3v6Z1Sfvvh7euwR96e7p4+vhkVNP0jkuPf+nh7gV9/+uJlY++86n+UhEdnpcbd9/WhnK6bW3BYRFN7z0ztL4DtDL17nnm7mPeTKAw1exe6p87e5CSPxIn3yYWEIdIgqtPj5kWpQ7JRCYl4wgJshgXG/0m7j+m4vJiU/3sUXWasq8DL+Dvrpk2eL2JR9HFrOvFvI04f4mNd97u689NGKP/vnDMyMpIZE372wqXwuJTBL3ZiLV2GEBaXDc+b2lY00Scs/CsABrpe3DNg5pH0Do7BUPWWnZYgwrvtlIVtRWfvMLWLOCTkGTMzk7+//5QpDCMYNMr/vvt5C/v7D93NLp09o316fEj1WwH1nyykeu7e2zTkBJEDfQXGp5W8Xey4dnApnNRpaP60OgDV2Rz6LOChm6mc2Bat28GQ/uceUP9oBKy5pRWHH5qHQH5RAJBamxs7euCkf1XPE4DtCnM1YN65z/t5LFX/5Li4N5s3s9o7OcGQ9JzfISEhzMzMJu7+7SjK4PE4AIBVVj6+etWK//uT2dLe9daFI/w7WLM/Fn1npEf3/2Nz+ieszCe2Zxmqy8e8e2t0iG8bz+5bz2PhWLp3UJCXc+uWc9arOyfleDVcghpgnw/ELmIWSP8QixVQ/6F0/ceN6f/d5s2bnJyckJP1b+zt39aPnaht0Cq01tYo83Az8kh6vkmHoweGCISZ0oR9PZ/1/9HAt6SfV5VMjI0qLizg59115qx+Y0sraIrQ8J6Au7bvMgprMkLUZXnUHR5B+b8hIL4Wuv53SXmHxGMoXaeg/t9Oq/9LHv5tqEn6B+ltadLg5xGQVXqRVT1A/F7l05hW/5i6xLOKYqD+u5rqrp86JiB15Fl0BhY/VF2cb2F3o7ahsTOPkv/3H/U/hEOXFBdVVVXNNI747wLSP8R3Qff/P+kfmGL/6fG/hYd/12T/H6S3uekUHw+/jFJYZtXAHC3am1b/1Py/9PyfiXFxO7ZtM7hq29jRe8/K+HVyFpow3J4ToiLFNe7/o2C9yQlxz9/E907etjQ80HszCyM1/2c9/dDX0VhT8zYiIjWvGPNt+yDND5D+Ib6LkYHuCDdDlt3SY/ofzUuJ28uz2cLZqR2OpKqdGBLykJl5q79/IHZKCnCa/vmkT8y3/pHVceP5f9saK8+fUebeu/+Gk72xw93aFkomD5r+z9wNaYIPDiLbQ7xv7OZk/43jUHpRDe0XaPj7+zMxsSoqqtXXz6qfkhzg66l/Rvvp62jElImePxBI/xDfB677pccllt0y4/rHwDpuXDMQPqwZl1E8RBxG9zQ4maoe19RKLSiljfVOBNT/yd08vPuOh6ZXDFB3Ivt+vuz/U6efkB499GRhYlj/17KXccl46trPtuznylI7dO+FNSPwQ1h4aW7iieMKqyR1Msom6Zya/0NcUVGnvn5Wc6KBurrq5ubmiYvZfwYg/UN8F5TxP7cLE8f/wGMlKS/kJfmtH4R2wuDpkb78YmJX7z3qRGCmjvy0NTXt5eHZInbkaVIJljA3EwSn1T+2PllfaW9iHE3/o7DmwnOahzkPn86taKANSBW+dt/Py6Dp8hS0/5TP1PxfLIpmWVW0kULc48feBw/K8fHxLV++RlHx/MT8n/19Xf5uLgfPXjLVV5aX2aunp1eY9t7T0UxORlJWw7y0to2ARgT5eahevZ1cXFeZl6alpy91+IT0XkkxYeGXqVkzrddcACD9Q3w7sOqoQzIiDOvXrFi5esNGRgEti+o2ys4CZNJQR1WahvrRbVu3CO2ReBAW1YPETN1ZcLgn6+gBiVUrV65Y9ddGRmaX4Ihe7ODUNmK2UPQ/If8PurvBx0ZbkHvzmr9WMzIyysjIVFVVjQLDd+wd30fGYrADHTVF17Xkdmxav3rln3+v38gpKH7zWUwPGg/qf5u6ZW5NO3l4OPhZEO9hbZ+QqPzsUD7enYqKhp/yfw5j06L8BHZt/Z/flvn7++XmZAsLCkornXqXVWSir791M3tmVnJiYhg/Hxfb4XNvsyuPKBz79bff1U5qFhUVaGpqcAmq5hZOCjEWEkj/EIsNUP+U/D8x357/h8Z4/s+ilBQpTs6bX8r/ORQQ4Cama/U2t6alqeWYkJC2mhplIlNbnJaiZG5uNthI+Pq6H77qkVTRXl1bf1jromN4eu8ASV9fn51dMDOzgP4zCw6kf4jFBqh/Sv6f6Mzv1z+39s38+q7UlJQdnJzWn/Qvqah4bqL/DxIQECCufyMyr7a1qeWEkNAZmv67U7SUpHNzc0ZHR3x9fY5e90mp7KiuaziibeTyMrMPN0zV/57MzI/0X1lwIP1DLDZA/YtqfH/+H+DatStsh42yK5rryvI15CWOKWlk5ZV2NBQIC+zk4uIJD4+gbV1FZTggwGenyuUXKcUNjc2yQkIaVP3jat6oK+xJz8kGRvG+vrfE9G98KKivqqk5dNrwZlhqL5ZI1T9vZmYe/WcWHEj/EIsNUP+HzpoEJRVgplnn+1XA26qCfW+KCu78bQ27jr5hY3Vp3HN3cSFBWTl5dQ359UwM/JL73RxMnS0uml02ouQ2yn6jqrh/OcMWyYPHVNXU165dy87OrnlKXfu4BBvjmqNKisZmehKSfCs27ZBRUFJRVWbawimgdFr76jVObu4///zTyMiovf0rc67OMZD+IRYboP73n774OCYL/a3+Px4DryrOSU5KiI+Pz8zMxGAwAyh4WVFeUmJCfHJyQnJqWU19d1tdUW7aAbn9OVnp8K6GrIxUsPJEwLrgP5CExISU1MRE2ocxEjIywH/xiYng//Py8v5xc9d5AtI/xGKjPDvlmJjoHRcPGJyy0nye6GmqMLmge9MvqHNKXvN/EZD+ISCWLpD+ISCWLpD+ISCWLpD+ISCWLpD+ISCWLpD+ISCWLpD+ISCWLpD+ISCWLpD+ISCWLpD+ISCWLpD+ISCWLpD+ISCWLpD+ISCWLpD+ISCWLpD+ISCWLpD+ISCWLpD+ISCWLpD+ISCWLpD+ISCWLpD+ISCWLpD+ISCWLpD+ISB+LkbQDZkRbld01E9o3HhV2o6lJwcdQdVnht4y1lbXNnEJTKjuw5K+P1XiItQ/gKmP8za79rCwB/ON2R++G3JPXpDjlcsXzxlaB+W0YYZmyO4KVnvqeJVWLbsNPakauSf/qRO9LKt1ctnoKK7stbuD5RUzkCvmd99V9g3MTebcr4TcW/D81nUTyskFpjehCNNfH7m3MOT2dVOwltXj9EbkpFpgWegdC1pZWgMSP/kXBive+Thb0y/vzuvSLvSPepI/Dny5v7bQJrYjtxOrEeNp0UdQURY6Nk9T6/rnJlP6YtM/ACt+63FBgmXFMh7jmGYkcQ4ayFkD9MVbyskYBn/swuFrH2pKn3RLbumfeiZgNasDsobPijoH8HUBp6VP3ktqRtGrAbAE64P7DZ8WUsoeacmeupfYNFYGArQ81RVk+3vZ7yDLVgmava+DERbuSgFYkr3CwQuPc1ow+Ponegc17sTUwYc+//sALPnGsUMXHmW1YAbrg/QPa9yOrhk7SwCefPP4oQsBmU3owYagc4c1b38YLwMB2kIv7N22djn18lbyG0WUd+EX7vJ+FogfvXUlt61Ys982uqJ3rHUfrghw8I4tbsLO2f1YhP7/4DsDLgYhkx+kf2y6jeRWWevEJgTFZqE/XBbepXwvpw39mYEeyLCT2iZrldCIoJwk+oOJMK+ya1ZrP6UaWCbNsd8yvgFOLYs2FQXLMluoZZTiTOdLtxPqe36MKAayHA5yy12Lqu6laB4Td01SQPlWSj1ysoUeyHY6xCNnHlnZQ6t1XUpQ2TmpjnpPwLLDO+XM31V0U8viLaSFlJ0Ta6ll1GLXK3djKtpxP+TyfhaGKx85errpiXFx7LvyuriL9iYDrWG3vD8UN/RP73B9C4tQ/0PxJrxMwqY/Rv+Y6MsCLDxnnlf3UhPZA51PNDk3ydimNU8WCCbaRGgTj/azqh56taDTXGwyNilNYDVMjKkwpayymyoBoPOpFjebjHVyM1UhFOMvd9zA7mFCDWxwLiLA2QEKXnzrTs1Hxe0D1JPreq7Ht1XmemxN38RUW9j465LbdmkGFLVRLRXQFaLPv03mWnRNLxEss5Dk2KXxsLB1rOycwDYZ8+gqsAz82BZqqKB0zup+TGXPAHHu3vN/GeTGZ05e0YVxXnpi2/dceJ7fRmnsgZ43t9zfFdci5/C2TK9/bE209zXtY7J790geUDF0DivqwQ8v+Kv2rQzFm+5mFvkx+ifmOUizrRO9njSmd0KcmSALq6JPWedEn42Y5yi7eZ3otcRGutUjxF8RZt103KukAzOU77Sffb2oeUIjfKzsqsgmsKyqHQN+KLyrwLnut//6z3/+61fGvRce5XfNSTfQ10IsuC2/nUHE7EM1Va3g+SRZSmzdfPReXvMEo0QsvKPAySBs8r6qh5aAl5BktW/bZgXXj2AYA17ADkZhk0jQ/NPKkq2lODYr3M1pRAGjhGJPVV6G3/+bcnkbRfX8MlqnCZ0WP0B7uNO9yI91iM7XZtI7hLQDspsGRkaQMXfuRhRV981V7E9hqv6H6kPPC65f9iejkILWBaMLWvJ8DMtX8F6J78J8VzL1heNH6h/3znAnw18yLkXtaJochtJtxFnXittltaImRAC4yIu8jH9LOxW20VUzlG4ruWmduG1GMxLz/tJuJrCsoBXUA63Mbh/benGb8mYE9fMogOspTwgwl9+xZtmyrZqPCrsG5vKN+CKDH0DfZO0++8wGBO3kiFkOcts27rVIrIN9ur7BaDPRzesk7dLr4bQzI2Y5HeRg2HO9oKZvMPqKGLWsFjZedmg7w55rcTW9tPYOGOytTAq0PLZzwx/Lt6j7ZrZ+Hjstekb63rnceVlUAyeP9CfYHd65W90zra4fk3zvVmheZQ/tLs0Rn+ufWOp6kGXlenHr2BYsXT5Af0moR0gRCjenf3j++JH6R788x71x/YF7oB2nizfNei/rGlHL1JaJAQD61fmdDOsP3P043kykWYtvWitqATr58NcGOxnXy90tavvUhEiwrRW5Xt4Ep34eg9j6zkSSdS3/5Xe1fQvV/4d5ayTIulHWOaeR7oQSM2/KbtsgfCVmzCGggHlnLLxpo6xTVsN4LQc5jo3CZvnVvZh3l4XZGGQcM+vHWxDHA9s3CptGVfZMMjCktg/X5bZu4DN8UbbE+v9GULG3XcLyq6jdfoO5rsr8u447J3x873braXZ555Su1u/iM/2joy/yrFklYJHag52+0QXgRc+sNaR5t7Aws3GJnTANyO6iR6HD1WE2Jm4xtfnPrdT2bGfbslve/EUFahBR/PTKMcFtbNuEFK1eV6MIdFNF7ox3MzO6FVmLws+18fqR+qe4+8xrZW+PC5sQayrIvH7/rcKxA1RAl16IZZ2sS9GY/Qe/J8SyXtYlv7UfF39VmBUsK2wdLwNjg/WyzhWtn2ezBWBvLgptUXDObaG7CvMOIdFSgn2D9M2sMftPSLSQ2MIgfTOj4dMoFcXdl9yyUepGxpjGwa9JbmWQti+shxOSrPdt3Shln1EHp5dRYgOwLLWO7iyMA8Dfm0nsULiRMuYqLBEGUlxdgvMqu2kGY7jqgbYIz6HrDgaX/dPLqR0Bc8hk/Q8lmu5as0LIKmsG+WOyHGRYVq3hUbhod/uO7XnZrSt/XyftktFDGX7GR1/csZ5z907mLbJnLW9cV929bvk6SW0Nwc275A2sb5ge5Vq9bJ28V0kvjvosh2KMuNf9yXI6rAkx17brR+qf3OinvG2j2FVKvz7lMwAL1eFi4j0XUds38cEBjf4q2xnErsTRuvgp1XS5mXn1X9T04smND1Q5GcTMYuvHysLO8rDw6oXV9eCpX54A0B54WkjTq6BlDnuEvwjQ/EhzJ4vo5UgwsqeeHDziAv/m3TrPSjsm9NcDzY9P87KKGr+tGKv10lCQffeZoPJ2HNAcqLWbVdTobTm1+59SdlGIUlY8tccf6HimJ6Hllj6lZVjU4LPdnQKzyjvGDD3QGmIowcWxSdwwrLh5ulGRYdwAfnj4227RJP0DHQ8VmVZtVAlsRk3XzJAbfBWY/+Y486IORZuPMlR+7xDzqk2nQ5qRhBGK/teu3KziXwQbpDQHmVaiG/78Y/uZp2UIiolHR13kWb/x6P1aGO0ScLVJYSHxlQj8nHdf/Uj9j5JrvBU5OFR9y7qo07aI+Y6yW/nPhdKHA8Yh1/gobd+u6lPSMVZt/zYB/eeVlOEAco2vMud2Ve9iWgxBLHA+wEEp6578ExRIJfdO6flkUUYNFghynf/JXVwqbvT+PkpPH7fQ2UD6cMAY5LoHGrzcyvdymmi1iu4e5RHSfVzUBtYi1z3U2M2t7JpF6e8DL6Ho7rGdQrqPCilln0Eq89K54J1cPWlsYbEzmHPP3DWqaMIY/wgs6vp+Lj4N38wGzOf3iAT/6HNW0+ZFTtPU2/c1TNI/uc7zEMOqTZphrahpogyg54kq65qdl6I70WPPg9zgdYTpb97LsR1oItX+c+m/pn8XQDzX2LROwCyxgzZ5C/xteZY1Ug6F3dh5bszx0cY7GQWMopoR01zEvAPAos32Cug8Ku0eAEYJhbcOCajey6SM65Nqgi/Jix+49KSI4lwBsJgrEoI6ASWdYANAKLp9SFDVNb2ln3qrwLKrkkI6D4tpZXfkhVRd05pRlDJCU8qL8OTK3gGw1QSwFU+uXPJIaoAv4Owf0F7HW8qK6dzPawUDGkKxm+IetduJ9QgSqS7siqLUgQsPstvABw7AE6zk9pzxzWnuJ4O13E/sVbsVXwun+US0Mp/sJkpZibuSuLpLHK2M0Jz+6mVSWRcGbLmBgarnlibucfQh0qUAoassMeiaPM8OCa0boQXd6HH7hU11Pm/7PKt2mjCPkOtmfvdN/tSW4euYbP97HiszrVyj4NeAnMb+k0pcpDb+Le1SCgPfbDq4V7rsa7ecDm1BEgYn638UHaa1eZ3gJ/03+h5lWbvvRn43Zh71P1ifEuysyv33sj+2Hzf3iq5F46fvxphPAGSOh5biGVtPX+fziqrWL8toIc9g+g1Zri0M60Qtkxspnj2AzPXUPnHGxtOHUs0qorSHFhlRAMu8zoBlHj7OBifUrMLHyoCet8aiLKtWMO+WPnhEQdnALb7+87mz8w+AzPfVV9WxuuflfEFZ3TK0sJMSLA5mOR/ZzcGwVvjqB2psAKDy759T07UEaxmqnLQMKejAjD8KAFXgd05d19LV09lQ9aTl8/x2WhnQG2UutfXvlUy79smBl3f+7oeqvk83ZSkzDOuF4fCT7Bmxuzg58kWoh5GmRUjOdC3DVzE5/idmWgiuW7HNILL9U9szznDVvQOMf4nZZHePdw4AfU/VWdfyXIzq6P/c/v8Y/f8sANiOstyckmYEgTTpweBira88LmsbGwsEBsBquVOrUaCU5eWWNH1WRkI1fcxMScup6sIOkac20nMGGVFVVgfHzTC3HxjorMjPK26EDU6aozOY6GAVWNgAoz7xGWtRAcsqC6aWkfpbSrJT03IqOtCEf8+UkwWH2Pj2nmtIWk1b4q2zVkGpVfR+1tkzWf+j+GxrkfV/Mik+rIBPtCskLGYQALDvDTjXbjjkUQbD0coAxDsD7nVMSg/rEHhq/A/p/0sA/YUPb3jGN8AHv/VpLQjE7sJwR205CXnz0LKeWUwtANDFT5y9Y6rnPcBbQAACCoUZIo17LqC/jekfIJLms+X9Z4C2l9aW/omlnZgyP2PrwPSKb58S9Jn+R4GuN+d51yxbvUvzbmRxJwaP6Sz94K4vznnycTNiEJNsLrR+JcsB29fFPRh0W7b/md1rVnFfjGztByU/O/0T8xwlWTYIXIltXyoTvPANKW/jS0Gr/fOKf7A1/YmlmvS+45fcoir6cLOyv/im9PeJxe39cz6c+6MgtKV56u3dvIbvwouP7bRwGIAn2Mnz7FT3ypzLKfizZqT3lfmlex/y62o+2J4ycIsr7v72PvTP9Q8yWBNufnj7ql/+33/9h8J//e/fPEpOsc0Y0E8D0EV+ZwQ2/P4/1KL/+p+/d2n65vQMUl+UocQrvAy7jd630QWNfa3PwShumdpFW4ZLbgtQ2cx48FZRD9U8EPMcJFk3CFyNWzL6/5kBMHVxPpeP7ZNVN3+Q0oAcm6SxxAG6XhiKbtmh4pPdiKa+o4OJtgd4xXQe5LbQZ3eBkGpjH9y2pa5V/pyrLi/yW+djEAqb7qKpctrA5oGDzlFdW/+ERtQ3dwJNo38qw+jWksyEmOjE7Moe3DAw8RqGMZSi2PiM0nbMD3aEvgVifXygr/vdO1NxvR+F7MfRqy0VAGR+gNFBYUkN2+C8duzSXXEzHYREG9kd247cSqujzmPEZd/VM3B9V9I9MX4DeivS4yJfRkzDy9iCZhRuQuwwd5DQcAR2iIjHoAeGiN/TTzKT/v9lEAgEOBzeNwNg6cjI2E0iNaWFBQXcnwa/oIR+zKc5NmQyGYFA0H9iEQFeFHhp9IsE28PejxFOZ2TFZDQsn2S1fL7TyET6+/vpP7Gw4PH4T49vISHm3D62k22/XVIVDAAQWX6O3u+L2761+wq8e5GRkY9/KOnp6RgMhn5CVBaJ/sPDwzk5OdfNQHBw8ODgIL3qV1NbW8vPz0//iUWEkJBQfX09/SLHAFBV0Z4X5fdIKF32ia9BTLvcU0VFhYGBgf4rC0hAQMBnb+0CQarwPcnHJmn+oaz+Y7CL+8u8pqnePACvyU2Ni3o/DVEpJe39g2PNRWdnp6Ojo94PJTAwEAaD0U+IyiLR/ywgw+sKsjNSpyEtu2oQv5Smmk0BGGhOfXxdRWLPkXO33pT24BZyafFPCND6TF+YXUzvlu3lG8/Sp19lRaqK9LAzO39uGgxsnmQ3T90a6adi6ekfX/jE0vjcGe2p6Bjf74H9CDvzs0HsKnjhqCWn5Z5F28VoqQIg35ru3crEKn31RWkXfcx7kbH09A/xlQBkMvBDwu6fB0KS3XHlqw8zWxbtFgSQ/pc4QHO4+QlpwV07p8Cn7pbdglysL/5XAaDa2+E4/CL2gSD9zwYAGh77VqBbN58QUW01VY3d6Flv0wfp/58BsI1ZofYn92znVPev6B5LxzAt+Mb4IP/XeR1zPsuP3JP/zMl8pnwAn8CVvfZwHM8M8LayuzbtmW9QYi1sfsah/wlgoCXvpbO2FA+XintuEwqaVzQzxMYIz8fJVbRdUWcBuTfnkbWxieV1rf2SZz3iq+CzetCQ/r8O3AdjPg7Fe4WdXxj+xZYGmJkH5nVMs3bq+6DkAzi03/BpQccALR+Aa+I0I1EgQMuzT5kBVgqaRdb1EUaAvmTnixbBeZR1uT+CwXiLfbyKjqn1s3szlxaDFY/OSh67FlHYPqvF3CPYQh9dFaP7iTXw9hR/lwdRpW2fpiZ+DZD+v4qhbDuJ7QrO2W1jm/BPAUAkWh3V8sqducY3M5BhL7N9v2UcbUMgdLSZ2G7lu5nNU//QQKaL0e2EuqkL5jHpN5ROusTULmSekDGI+S7yfEft4qr7lvJQwhcZweR7nhJgXiNpHVfeOxsfaajigY60ivXLovHNgmYLpP+vgfTxlhzHAbvUFuomHNOBz3M8IKj1gLqdxwSArw17iZmuRvcSGibtEkYHE2Mmwsaj/bSiaywfgDbPZhnrpIbPxuZA43+WkhngQXz1lMwA5EpvJRG128mNC7dTEB1SqccJvsMW7yvpW4FDfM4IIv2+s8lxTsYdSvdSZ7OQn9z60lSW74jVuxL6VoHfwKLSP7Gj8P2Tu5YXtC2fV8GQ9dG3z522f9eNnLJt3mwhV3se3S51PbappyXjwbXTSnpe6Z/2QKIAIN9d4meXdwatP635BrB1kU6n925hO+FT2kn3yAilvif5eTQeVnRNE+IR4i2ULd9W01J+TIKY7yzHvl7EnJIOiHqAkGAuyrbpmGdx+6Q9XwhFrsfGMwPsMXiUNykzADH7pux2cePXVT0L6wJQ9gvj32/2sry1JeeJ7VlVvXvxjT/CC/lpAbpiPe4+j3PXFecW1QnMnXaDv6mQm+L9rNUFmVcvX7/z4FnXuLqer/veFBab/ScWOsuwiZq+S31y48LB7auY1QKae793SQ+5+aEq5x6Tl8mBNldsnM9LMq/bZ5sxvocHBewHYwEWbt2Qidv8EfOd9m9et9cqrZk2hkYqcjmwlUfdr6hruvXxM+sf996Ij3mNlGP+2Ca/Qxn2UpvXi1unNSE+jwAAXE8FNTPAWkpmgICCT5kBgK5g3V0sIkbvaHm7FgqgNeiMwL5LQVEBN63sHc/JbGGUNI8Z2+gfYpTU/Pqua3h2VVHQhb0cMqbvSjq//tbgUhyO8B+4/KKg7Tue6CLTPwAL1eYSOufoeCOkrLelKK2wFUuYEibPEqA7WItbUNfOzjIgrxPZ8OgUJ4/Wo6qJSiWVuR5mXy96jZ70jwa5I1BjO6OA0ft6GOX5kOv9tBStXpb2jk8In8TM+ke/vrCLaYPcnfH9wCm5QtjWiVxPrKcnCJoCsfWdqeSmtfzGb2vG56wS4q+JsTEduJXX/K1bRX0DQE+4gcieM9csLB5mNfU0PNMT5Nf0ym+euBX6UoZQHex073VeA3Kw1OeUIJeCQ2Il7KtvDanQQ01IQvdBVuNsRwwmssj0j35rsItbWtU6tAo5VxvHAYhX53m3C8ue9y3oxRBhEXq7OFW9S2jb+9IZSrXcy7JW3C67beIIF/a1AQ/zTt2w6l78CKEm2OZGaFEXZmJcjkt0OLFPkGsHBU7WNSvWsmzZtp36iVvCpL65j1aLEG8uwrpOxnk8HxA1H9gGWae8L+z6D8DeXhLeouCc0zyWLI6YYS9NCSMS6sZ255p/ANR7k728Ivt03TJaEQTEu8t7dqvcyWxEztGT+ZeD/ehroGNs4+z1KDDASnn3Jh5174z6r24ayXWBenuE1O4kVX/z3l8UFpf+cXEm/IwcyveLJuyl+b1goi/zMzFJ2CW19pNGMR+M+TmO38nvQE/8fWK6tTjLGjHLMVefxlCCuTArx8nHFe210XdvPM5qo2+MNC0z23+g6YEaJ6OYWUwdjDrkB8Be6O2k5AP44sa4lMwAwqCtHW8jiJk3pNk3iFunNi7cMBw2wVJyK+uea5FVvYQRbLzFvl3HbybXQcOAICPI7Efu/mGvY9IyMzMzopzUdm8SPf88v3W6ffenA+h5ZSK1W8EqqrTnH24nNTsAaSY5LCr9D6VZirKKmsW0zOGmK/gUC1E2oYuv6ii7bIMfxLYecsiYlMyP4tv7Km3bwG8U1QCf0MlNyQXKznbcwc/CzCuhDjG93z/GzPofJdf6Ku/gVPX62D6eD2C7gH5wxTT5AD5ByQyg7zNh/Q7oRohu3qLo9XGWA8TfAT7j5v4dIueeFVNyg+Azbx7YJW8ds7Q2858BoCc54OH7oiZq8ndQojUBZ0Q45Cyjy3q+1mxh4m0P8cmZhBe2fyn4JyE+3tc7bROW3ThTdoDFpH9SgYPUFlmb1DbaNvpzAjH3htSWfdfjmin5fIj5jtJbZS0jwoMT6jEDmCKfMwePXA2vhg0Scm5Kbd6m5l/ZNeE+kys9j23dwMSn97Bgpmxqn/iC/kGLH2tOyQfwkZIshFB054iw2l1qPgBS7fPLCpIHLj7O78JiG1PDJ2QGCKJmBvjU0w60B2ntZJezTf581HD+IBbeVtgpbfqqohs8C+JH12O8B64EPXuWWItAL+2hwIGKIFvnsLz68e5bQrrjkV2cR5ySquk50SZBqg65qnRI687EHOtDuXeVhOQuBuf9g8NAyHM3v/smr562f9k0LCL9k8tcD7JLXI9vRc2dhSGV3D24TcI8uglBeWWR4Xo7GLeI6vmkd2KJI9gUO1lObjWfok4smVjocmCr1PXYRvoYHQVyxxNtKU23hKav2eHwS/oH1YvM9dJR0hnPB1DSTe3YH8xwOMCzjWGdyPWE2vIIYzHWCZkB4uomZQbAp1jv26XolLJwEwBI5V5KvFImEeXU7J39b41FtmwT0roX34RcusN/IwPNmc/tlXiZWYS1PGIbwDsxgqrPeumoyse84tcNYjo3n+e29/d3fEx4E/70yfuCNgRlpzHCx/va4rv3X39Z2kWg/85whZ+WuLzJ80nyH+ouTngb8fRJZH4rHDfUXZL8PjzUw/j0l7MDLLL+v3kG31FZ1oKcZrN+UOxh+mLHndPG8v5TIPW0dWCJ01T+JoCBjvJp8gGM4uLtrgWWtCCHSahmamaAys6pmQEIuU5HDpqFlv24Vez4rprKFvC9/FoHd4mCrwy7detZSlVD8uOHkcWN0/fVkpufXTh02uFNcde484+venH79rPkyvrkwIDIvLiHt+6FpFa1Jt7WtwpK+VJ2AEj/cwW5Jfyi6tWIip6FlBjQX/TIwSuuru+LfxTofmuubfe6tOtT4iaInxFy8/Mr5v5JpV3Te4zDROIwAIyQG58anbENzmwc78khN4eYX/dLKO6kfA9oe2lj6Z9Y0oku879sHZj2xewAkP7nDgBT/NjKNihnuuRJ8wK+MfVdQkknZoYkPXQGKsJv3QkrgDZa//nBRlvr2IdmNaCBYSQCRRia+MRGUHE2R5XMg1KSgm+au77Ob5mwEg0bY3vWPiS9rh8YRsFrQ4zPu37Iq62JttO4cC/2y9kBIP3PLaSe/PdxpT0/TZYPoLc4Prm0HQNt6f9vgFwfYqx4VFXL0NYnsrCdklVnAsMtMW5WphcMLfzjKqgZ9z9Brg8zUTqmevqCjc+7gqp39pqq1OwAusd0bfziG76UHQDSPwTETwR5oK+rB4mbdW5H2vcGhigbgEzIDkD4h+wAkP4hIJYukP4hIJYukP4hIJYukP4hIJYukP4hIJYukP4hIJYukP4hIJYukP4hIJYqo6P/HyuG4twN0zZaAAAAAElFTkSuQmCC';
	i14 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATgAAABICAIAAADtSH5IAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAABdXSURBVHhe7Z1nVFNZu8fvl3vXXfdd972vM+OIjuMIdnBGZ/RVR52xjXVsKGJ3VFAUC9hAxcIIIoi9gArSkSqICKKANGmitEBCAikQQgrpPTnFe0KCUoISCBJ0/7645iQnkxye/3/v/exn7/0fbwEAgMkDhAoADACAUAGAAQAQKgAwAABCBQAGAECoAMAAAAgVABgAAKECAAMAIFQAYAAAhAoADABMWagwqzwtwnvfxtXL/3TwL24SqXXX3yJcfFaMt6Otta2Dx72EonqJEta9AgB8npiyUFFILuIz8i9ajx86ZLrrUwpPiepegRQSdtLhhes9H5dSuFIVgra+AAB8nph81xeuum47cfg//jHRMZ7UrHgnSIQRfmDf3RKaQA00CvgCMHWhIvVhhw6d3j3FbMiE7aFVbBmivYwKUtwO3X3TwH/XHQYAPmdMXKgIM/bI4eCSjAtrxg8bZeNXypRolSrJOud8s5DGU4H2FGAqwILa/KQwv0vevn4Pi+kipa5RMQ6mLVSU99jV6e4bOpscaTd5+MhlvgV0EYRdVxRccLqcQ2nTFQYYC0REKUiO8L/sc8k/4TVdojJquH2uoJKaJB+nva5Xo9KLXyWctp7558kkWrNC96oxMG2hip6d2n+jCGs4IU6y868jvp/n/gIblb5Vl1118npex5YDnRoVVEJ8fNFpr8ulyOdFxfFuq2YsPVFLa9a9COgSJSnO1cbG2T+tnMaTKoXZZxaMmemcSOZ8MUKV55zbfwlrOJUo5vO5ZxeYD59x7AmFJ8X7O/2dRGRJgdkbE0VtnMvatYfuPq+o14bb/DEznQhkju5lQBeoSRF758zeeiOnTqBGpJSnXht+/2O3Xy5NZNRxmSkLVVns7eiVXsdpaThRWdnllWOG/+wYhy/xdz4ZR2gSg8lTI6Iihjn8PmvbrdyWcCM/Pb9+9nws3Jgile4NAL2goiz3ReOtVp4KCAu+5XHYYfeBU7cTiuqa5ZBxmxETFipUcW2fezLpXaZXWReweeJwq22+Z7fuC61iCIFOjQcqzHJfOM5q5enAsODbHs72Ox1P3kgoJhs93D4/FHnu8yyGTtpw9lZE8ouiCjyR2sSXqRGjD8pMV6gQwd/xRByhNc+LATFi90wZYT5qwgrvQrpAk1RqD8wnpfm5ecdVsSWdXwR8CCzc5loMm2R75kZoUmZReU1tPUvQF+H22YFyY+wnDhu22Cu7mi6SqWBN6Q0qZjL5KrVxGxKTFaq6+vZm+9ul7QSJcJ8dm/2D2awTGRR9EzOomhV7cJN7KhFkmQxEG27Dl/nk4htF8tZwa2oyerh9fsjzzswdOXjEghOxZWw5BIupLyOvX48urDfy7IwpChWV1r9+Humx4ZfvJ9mcDcwkixTvggWVFHguX3H2Wa0mv9QeFIZhcYbbpuPx1UyQZTIUTbiZDx7xx8n4cizcIBElN+LatSjjh9vnByqpCnWcNXKI2UjLKTPnLlzrcC4ss5IuUMJGbitMsUVFVDIRj0mrxTpgTK4Y+8nvfzOqoBQWkQSydu2pip4bFRQeE33vjO1ih5BKhhgEl6Gg0urw/bPNh5j9MG7y9NnzV+06F55V3SjC2lbdGwBdohYxqvMSQ/xv34t4nFNaQ+e9GzOgEmK6v8v2Ew/wbBE385JbwMv69/XqBmLCyST9wGo1ptw20hUU3Dh2LqqwhsFIdlmxJ/ANXQR6az0AEjNrCh6H37sT+CA1v7KWIZBD2nBDBVXJl/fbeybjCuMv7N13LafnwfbZgkIKqVgklip1z6wVWM6vDbK3Ofe8liNpeHQ/rpIt6GkSfcAJtQMwKdhh54VnBLaMl3XG2u52cb2eLBOgW6CQUiYRS2Qdwg2S88mxR2x2nvJPLCgnMEQqCOi0+yjz3NcdjamhVuQ8LaBwZT1+dvqFKqVkh3gf2bZy5cnEev67Oj1JebDT2hVHokjc1hmTfgdlRTssPxpbzagvDd230NY7A9+kArlKowM3htmvcomtYIDRv6FAhBubHG4mRScWUzjSXkx26RcqouIXX1wxevCg+V6vGa2FBfJMt98thk07mkrlt+n7oJKmuhp8VRfgySwZ1lXVvbcPED13XfjHBmePu7Fe635d5xaeT5eC6lRjo6DkRp1ca+ubi6fxFDAwQkNAOQ92WzsFpuE5crg3gdlV1xcVJzn+OOT/prpkNgi0S8kg3OVlP813jihjydoqT116/8iurbbr9LPBNbKqWdqHg0ZExsAVvaqmsfh03Gs8vVlsepN/KKco8urFgOcUoS59jbDyw6/6Bmc1iPsip4oKSVnRt9wPbne6U9Qkal2uizCzbh7adTKCwZFoL3QT+atgj/NXQ9IrMzw3rD96LaGMKwMrgA0AldYkBsUWkjGZ9u6xdTlGVeWfnvXdICvHJO3GCig73WPXobsviNwOiWdUzmM01NOo+qE18RXvRzwIgjx9+jTOyMRERUXHxsXFRkfHYP8YCI/Ha5ua6gMQZty+GeN/PZBQx9MOIhB65K5/j59zNKVdz+RDKMVcNovJbNIHk4Ppv505wfKGJ8cXjDUbtSWYwJJqX4GIgVunmFtuvk9mSlsudBdERMFVU1lCpaypqqKGwZV0SJf0HQinMOKqT0A6VaTQ2hnCehl+9WJwNr1P/A2LZHFtdvRN94M7nFscTncVYWTdOGR/MqLC0CoalPfmUVREeHjKKwob6/P29ql1KVQI57t4xNejtkXWNctRCe6Bp0dQJoEl61VJGQRBnp6ezqYEjUbrW6EiTTH2Pw2dsC2smiNveXZIQ8RfVmaTdsfWNOsi8GOoXt09uH396lV6sba/ltMkbJ9LVNcHbhz77eBlVysZ4pbfhvIS902btv5CGlFgaJCjMIT5APYpKKz99xOBMGMdZ0yYeTCRrEuSIPQHu6aPn+uSShN0u9pdIWAzGY1d0MRvTWzrgOX0Jyf+GDt0dGeH23K/wtDZeYRbmvww400dS2KUTl6XQkXq79mYfzNszd2ahspHvufupuEYet0UIqbc8vE4c1o/Z/2fUQTy1q4vJgkOh6NrCkwDtbpv94hAmqLsfhxq+Vc4oVWn9eHbLM0mO8QTu72aFpWyaeRaUhdQmOJOWQBp4t4fh349x7OE3lIRrSSGHd59LrqYJtQTM3w+v7a2tqZHYP0RrJek+yCjgvmb7rk1t/e3OCK326uQVSUBh+y3rLPRi63D9Ry2UKl7qxa4MWjT2CHftnW4BEetw/ENbsZhuUgoVRprSN+lUN8KYnaOGfzVHydunTh69dGbemEX2VS4oeBhZEhggH7uP3rVJP2Cq1sQRtSOiUOttke8i7f60K2WQyfvfUjqfrwZjjLTdcb3X884/oLGVyPsvDsel2Py67gKvcOkxMTEzZs3r+gR8fHxUqlhfenugTRF200catn2uYVtsxqK+Zshzw2VsCi1REIX1DKE6o75HdmTg5OHfTPXs1jrcIqasMMOGocT9ftcQtdCVaQ6TTL7p9kMR/+s2i7+xi1AColYJBLqRyRpM0T98sCGo9uthlrtiHwfbyFbJgz9xTGBxO1+1QBU+yzghq+Xfi7celzNk3UYPqlLvP4wH/zzgeTauqJQr4vh2R8YtGAtKplM1jXPBoLd2yctKuZvWHtqtaOtTjX+tscgnfYAVe6pWSO++fWExuHgFoeLftl19GNDpyVLlizsEZs2bcK637oP6gZdC1WVf3rOlNVn4isYvZn++aJB6BF/WQ4ZuyW0dXwKU4M2TRgyac9DEkvc/U1OYWpuVMi92/rxD8sgCeUdhAqTbq0ZPWT8Zi/vo2530yobO+TCERP3TqTxwc6JZlY7oghc7TAepoVusTT7GXtuBvgb5nCktIDrvl7n9XLhZhJOIOsw8IHKLi62+Pbng8m15MKwCxfDX+A/lJYpLS3Nzs7O6hEFBQVyuVz3Qd2ga6Ei7Ncv8rGAMr35joEC0oANRwf/r/nm0CqOVMosz0gMPDL/h0HfrfF7+SQqtYov7W5SRC0TCvjYeFAvAqmq0zgIYYf/Nd7sa4vFLqEFFH67il2YHOeyduGKYzGEZpMpW+lASz/EbPTGIDxH+xUhSou/YeN6VvvS748A03KjQwP8/fSCORxR1MnhyP42Y8wmbL7g43Lqbmo5vUP0oxDUtn4VhmGoFxiUxexaqG8RlRL7mgZ8lrFQSKSqnps+Iqa+SkuIfVxYx1f0a7EbXHd/xwyLQf/131+ZT/5t+Q6saSt9fnbB9//6x7eTbE7HVmBW3XffTvr4wPRZW7yTcZ3+L3DN/W1TLKy2BpSzJH04v90LNP0Qq8H/O3IT1hGRypgVmY/ua/xtmPXtvJSYtGqsFezuc0PVUiFmcFy98AQSZacoQ7mR2yeYfTNqiUvwSzK//UykxuJsFq10je0Xi/uAUPsHhJnmeT6KwOpRaT3CLgw4fuDE1fCIc5vm2V54Ru3H+nH5m8sb7C4lxoUE3A1+mFVaQ+OIlVLay7ig4LiMCpo2CFA+Luni3p3nU2texXvucryR33GipafA9QUZRWR9MwOoktdAItQ08Ex18waYHLSzxd++HjVl3mr70/fS3qSdmY/525Bf1rvHV/apv719K0s+MGPWZq+kCmanLq/G4n6xsNqmsbgvXqgQ9eGRBZM33urRWjUZLnjvii1/x5eQ2ZQn3gfPPnjDFPdXhT5Mj98/a/GpDBpbKBFLFa2CQVQyiVT+vqMCyXh1UQdXbT9z73FRBYEhNtq6MkjZ0+4QLGVT8GS2XNU/7a2i9MoGu4vx0ffv+AXGZpRUU1gihYSaGxMYGPO8FDPeFn8T1zy7dWTbiRgSV8JN93G9V9hkrJ3EYNrLZwW1TH0DPlTBpRJw1dRm7O+nu/QJMSmhKghhe2aNHGS+NYzAkhn64NW1Ybtnzba796pBDKGQlMfmijuuOvp0iHM8Fo0eseoG7uPmC9OD/lp27CGerc039SMoj5gb57X9j+m/rPHJa60c/bTA9IcHZi92S6eyBWKRRONoLZcxfxNL5O/Tb7CMRwz4a/W5FzSetP7h3ZgqnthY3xZSaly1J2GDKoV0QiWR2TcWZ0JClZQHnd23ynLQP392SiEblN3DQNipx+eP+/euyEqmCeRIEEa885/WRyMrubKP/dEU5OwIl1U2l4rq6PzOY6ZPCyQXNUTv+fn7KQ6xmG/0w1cR53kuGTNi5fVu+Jsix2314XgyvTIrJZ/K720lbS9BeMS8eO8di2ZMsbmUT+8TizMVoaL8gttnr8Tf3jl52DfzzhXRBd12JVRMyksKct88Y8SgobP3Xop9xTSB9TNqAYNaz/5IT1ZeHHjW82p4ZnXm32ttjt56jOvn7BeGusRn6dgpdmG4frE7hBHntHSFc1h580f97S1UfcXG/lZK3KNiGrefZYrFoFompEU7YBa3J47A7pOZXtMQKsLKuHz6eiqOGLHLatgI69u4Jkm3fywirCvOTDiz3GKwxeJjflE5JIF8gKzvwL55BY7KFinljMoyAoNnhNLtXgJV31xjOXnLvTJGP6RLsHhX8RvqKMxu7QCDssN2LD8QnEH6UDHOJ0Rd4r107FT7cByrbyzOFIQK1SedP+WXTmBL6+7YjjWztIsmaTfd7h6wSi7IPjPP3Hy5Tx6RKe3hCKM/QGEI0yb2bTU7s5nAt4brAjf+aGV7o4QukjW9Tg69E/yc0KnqyTRAJYT4gOgiasfFXP0FVHXDesKkrQFlTX1kcf0vVCXxwdlT97JIzQpYVeK1cOS3M1wyqDyDuvkQwW/thBHzTmcaeB+gHUhjxM7JE1ZfzK/IDP7bedeKf48Z9btLcl3fFu0ZDMotSYgMD49IfU3Fesj93QfRAdcGbJxoZXuzpFEsY5Q8DvYLemZki+tvoUorg53XWW/Y5XTs+Ek31y0zv/vnvxZeLG0UGWJLCCNy54/Dp+5PrOGYVkwNLFBOguPUsUvPhvmfvxKZXlLst9Xyu6n7Ekkm9lAR7utHcellRlnkaSwQesSOyeNXYRb3IsTjyJ7V08eOmetqXIvrV6GiguL73v5PiqvIDZoFgg0ll61HDR65/j6+dTVgt0AFKYem/WC5JaiyCWzp03NQYeqRX8f8tvGAy9WnlQ1CadH5xWMmrPcrbTS13VchmVAoxYaxpmMfKOfhPszizoT7e12JfP6q8PaWFosjGtPi+lGoCOuF/5XwvFqsz6v9Pepy36UW305yfFTXeX9tHfrKGltO/xi9+trrxo9VM8F80jP/Uz7xVex+K4QwXaRZp343/2H8MteYiiYppNaMucatvlzUAM74+Rio4OmRmRqLc72aUl4vFBd5LTG+xfWXUFExLvTwoevZJI7yXQdG8tR56ndfzWhZY6S71A64PvG49dwFDvdLmW22xYAqr6wcN3q5T0GD8GPqQ9WsOKdN7ik14MyLTiiKPBeOMrPacqeAJoZQmBy4aeKYZedzaWD31Y8izT41x0JjcdHljBaLWzNh3CrfQuNaXD8IFeXh00PPbfltzNCfbH2Sq/maLb8U9LLnEe7WVt/8z39+Nc3eJzSLJGqZU0RUmj6OTlUwJWLXNItxa68VNbacO94CTA3aPNFyta8+nba7W3vmxanNx+OrQBe5E+ryyyvGjVp4Oo3IVSHYqP+B/eRRi85kUkB27qMoi84vwixus38+TaxGNZnziaOXeOQY2eL6o0WF5KJmBoWIrybSWLqduTSnWHAZFM2+o9WkehZXrJDRsh8EBEXE3PPwCC/jaPeaUgkZZCKpgfuutAyTHytuz9TpOwJeM9qtBVE25EQF6u5+w+RQ8qJDImJjAtw3LHEIqWgEJ6t2BKrxW2c5bqV3fr0A80eUn+w0zWLO0ajY4EdvmK2biwH0oq7AenSjFrg91VpcY6TdJIsFbulkfceY9YJ+TSZ1CcrNuXzsfHwxsZGW+yAymyroqlIFYSXsX2DjkVrDbbPfC8rNverqFVdY00jLi3qQVZbqc9TjQT6e3pjsutIh4DUYdXUCpoZs+3Hscq+X2nMGYMKtNePMRs1xvJ5SzZRCML/qyZUDu84n44oeejseuJ7byG+/1dCXDFTjj1ncigt5NKHW4g5OM//tcERcWHIpS2xEizNJoULEwJ3bL2QQm5UIrBCL2zSgWhQVIUf3+KRQmpmvru+283qMa7fVMEQMst/h/ZzAVmjuFlQE7t554Wk1S8bLPrvG7lYROPOiM6iymYrHUzm6dSGojJwdH5dWRGRoi4QgGb8u5rCN3Wn/hIIyfKNIBbb8aAWmhWz7aeyfXnnvLM56rNmouftvPNFYnBEfk0kKVZ7i/Nv2u2UMEfJW0djAUqg7lMBKc92X/G6z7+jhwyd9owuoHRb4ylMPz91x541meyoFox4XZrf0SExVY31Z2IHFtt7p+Kb32StAV8BKmbzd2iPtoRYx5eBQi/agCnYdDlfHlmkPkkVltZmx0Sn5+EahxuJQCSn9juuOk1F4toj34vKpwJeMnnZGTLNFJQRum7tw036Xv6+EPKvidFrSj0iZ1UUvC8vwdQ0cSYvntwUiBG2fv2jTvmOau3HkR0cWLtzYcuaF7cx1buEvG8CZF4aj1BxqscbWNw9P4xltB8zPElgha3PKFizjk9oc5xZb2dzT49xMc4yqEtJxhTkvS2vqW7NNHUEglUqzf43uP9uhxu4uytXdrRY3VhYWV1GZvIbKkqoGjmZTMd37AN1BXhLi6XUttOVQiw1Hr4NDLQyk5Ti32F4f52aaQsX4kBI/Ttu7Uc2RqgiKInDPP+8LBhGSK6soLIFCxsCVExqbP92hFp8HEN4ox7mZrFABpoKprfEZYLQe51bN7tVxbkCoAEAf0nKcW0xBXW+PcwNCBQD6BJT3Jik6Mjwi9RXZCCt9gFABgD6h5Ti39Df6tzQ0GCBUAKBvgGRCgcRYk1lAqADAAAAIFQAYAAChAgADACBUAGAAAIQKAAwAgFABgAEAECoAMAAAQgUABgBAqADAAAAIFQAwed6+/X+3E9N6cYYRPwAAAABJRU5ErkJggg==';
	i15 = 'data:image/png;base64,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';
	i16 = 'data:image/png;base64,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';
	i17 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA24AAABzCAYAAADg8VG/AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAACtkSURBVHhe7d0NWBT3vS/wr2ua2gStx5s07mqPHrCguVJN4OKt8bSrVmhqjF6opom6GDx5O9rYUIFAjU3Vq9WleE30NC8PG8SYnkSXB2PSVgyEnqvJkbtrk+B5EIoeTWTXxhyLgFaJ7Nx522VY9xUW3IXv53nmcXbYHXdndmbnN/////cbJohAREREREREUUun/ktERERERERRioEbERERERFRlGPgRkREREREFOUYuBEREREREUU5Bm5ERERERERRjoEbERERERFRlGPgRkREREREFOUYuBEREREREUU5Bm5ERERERERRjoEbERERERFRlGPgRkREREREFOUYuBEREREREUU5Bm5ERERERERRjoEbERERERFRlGPgRkREREREFOUYuBEREREREUU5Bm5ERERERERRjoEbERERERFRlGPgRkREREREFOUYuBEREREREUU5Bm5ERERERERRjoEbERERERFRlGPgRkREREREFOUYuBEREREREUU5Bm5ERERERERRjoEbERERERFRlGPgRkREREREFOUYuBEREREREUU5Bm5ERERERERRjoEbERERERFRlGPgRkREREREFOUYuBEREREREUU5Bm5ERERERERRLkjg1gp78QMYNmxY6FN2BZzqq4mIiIiIiKjvggRu7Thbf1KdD9HR03BcV+eJiIiIiIjC1oamw9uRbZAahzJQVNMCl/qXoSryXSXvi4fhFnWeiIiIiIgoHK4W1BQtRlJ6LsrlrnxV2LJsF2rbgoVunXDa96BgtkHtDZiM7OIK2J2d6t9jWxiB2xOwOr6EIAiBp92Z0KuvICIiIiIiCl0nWirN2Nq1DDbHNTG+uAZH9fMwOi+i9XKgwM2FDvsuPJJqwrZa98CtEyjPy0JqSi4qWmI/eGNyEiIiIiIiigqult9j10fzUbZlOVL0t4pLboXe+BCWp/8nTjuuKk/yxdWEt4qqkWZtQLvcoNSF9kYr8o16wLkL+b+tR6yP5mLgRkREREREUeAqmt/7HN9fOxd6bZSiux2jx05BvGGEuuBGrubjOPPELmzJnIw4eYkOcYmL8PPnVgya3oADEri5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';
	i18 = 'data:image/png;base64,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';
	i19 = 'data:image/png;base64,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';
	i20 = 'data:image/png;base64,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';
	docDefinition.content.push(
	{
	text:
	'\r\n DIMENSIONAMENTO'
	+'\r\n ' //pula linha
	, color: '#8B1A1A'
	, bold: true
	, fontSize: 16
	, alignment: 'center'
	}
	);

	docDefinition.content.push(
	{
	text:
	'Correção do valor dos Esforços de Cálculo em função das dimensões'
	+'\r\n \r\n' //pula linha
	, bold: true
	, fontSize: 13
	, alignment: 'justify'
	}
	);


	docDefinition.content.push({
		text:
		'O item 13.2.3 da NBR-6118:2014 impõe que “a seção transversal de pilares e pilares-parede maciços, qualquer que seja a sua forma, não pode apresentar dimensão menor que 19cm. Em casos especiais, permite-se a consideração de dimensões entre 19cm e 14cm, desde que se multipliquem os esforços solicitantes de cálculo a serem considerados no dimensionamento por um coeficiente adicional γn, de acordo com o indicado na Tabela 13.1 e na Seção 11. Em qualquer caso, não se permite pilar com seção transversal de área inferior a 360cm²”. O valor do coeficiente pode ainda ser calculado pela expressão a seguir:'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
			'\r\nγn = 1,95 - 0,05 b'
		+'\r\n' //pula linha
		, alignment: 'justify'
			});
	docDefinition.content.push({
		text:
		'\r\nVale ressaltar que o maior valor a ser adotado para o coeficiente γn é 1,25 (seções cuja menor dimensão é 14 cm) e o menor valor é 1 (seções cuja maior dimensão é maior ou igual a 19 cm).'
		
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nSubstituindo valores na equação tem-se: γn = 1,95 - 0,05 * '+b+' = '+(1.95-0.05*b).toFixed(2)+'  observando-se o intervalo para os coeficientes tem-se:'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	if(gaman==1){
	docDefinition.content.push({
		text:
		'\r\nObservando-se o intervalo para os coeficientes tem-se: '+(1.95-0.05*b).toFixed(2)+' ≤ 1. Dessa forma: '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	}
	else {
		docDefinition.content.push({
		text:
		'\r\nObservando-se o intervalo para os coeficientes tem-se: 1,00 ≤ '+(1.95-0.05*b).toFixed(2)+' ≤ 1,25. Dessa forma: '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	}
	docDefinition.content.push({
		text:
		'γn = '+gaman.toFixed(2)+''
		, color: '#008B45'
		, alignment: 'justify'
	});


	docDefinition.content.push({
		text:
		'\r\n \r\nDeve-se então multiplicar os esforços de cálculo pelo fator γn calculado anteriormente, logo:'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	
	if(selsituac==3) {
		docDefinition.content.push({
		text:
	'\r\nForça Normal de Cálculo (Nd) = '+Nd+' kN'
		+'\r\n' //pula linha
		+'\r\nMomento em torno de x na base (M1d,base,x) = '+MDbasex.toFixed(2)+' kN.cm'
		+'\r\n' //pula linha
		+'\r\nMomento em torno de y na base (M1d,base,y) = '+MDbasey.toFixed(2)+' kN.cm'
		+'\r\n' //pula linha
		+'\r\nMomento em torno de x no centro (M1d,centro,x) = '+MDCx.toFixed(2)+' kN.cm'
		+'\r\n' //pula linha
		+'\r\nMomento em torno de y no centro (M1d,centro,y) = '+MDCy.toFixed(2)+' kN.cm'
	+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});
	}
	else {
	docDefinition.content.push({
		text:
	'\r\nForça Normal de Cálculo (Nd) = '+Nd+' kN'
		+'\r\n' //pula linha
		+'\r\nMomento em torno de x na base (M1d,base,x) = '+MDbasex.toFixed(2)+' kN.cm'
		+'\r\n' //pula linha
		+'\r\nMomento em torno de x no topo (M1d,topo,x) = '+MDtopox.toFixed(2)+' kN.cm'
		+'\r\n' //pula linha
		+'\r\nMomento em torno de y na base (M1d,base,y) = '+MDbasey.toFixed(2)+' kN.cm'
		+'\r\n' //pula linha
		+'\r\nMomento em torno de y no topo (M1d,topo,y) = '+MDtopoy.toFixed(2)+' kN.cm'
	+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});
	}

	docDefinition.content.push(
	{
	text:
	'\r\nDeterminação das resistências de cálculo'
	+'\r\n' //pula linha
	, bold: true
	, fontSize: 13
	, alignment: 'justify'
	}
	);

	if(fckfalso==1) {
		docDefinition.content.push({
		text:
		'\r\nO fck escolhido pelo usuário está em desacordo com a tabela 7.1 NBR 6118:2014'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
		}
	docDefinition.content.push({
		text:
		'\r\nfcd = fck/1,4 = '+Fck+'/1,4'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'fcd = '+Fcd.toFixed(2)+' kN/cm²'
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
			'\r\nfyd = fyk/1,15 = 50 / 1,15'
		+'\r\n' //pula linha
		, alignment: 'justify'
			});
	docDefinition.content.push({
		text:
		'fyd = 43,48 kN/cm²'
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});
	docDefinition.content.push(
	{
	text:
	'\r\n Determinação do Índice de esbeltez (λ)'
	+'\r\n' //pula linha
	, bold: true
	, fontSize: 13
	, alignment: 'justify'
	}
	);
	docDefinition.content.push({
		image: i1  //IMAGEM DO ÍNDICE DE ESBELTEZ
		,width: 189
		,height: 41
		, alignment: 'left',
	});
	docDefinition.content.push({
		text:
		'\r\nλx = (3,46 * '+lex+') / '+hx+' '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'λx = '+lamx.toFixed(2)+' '
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nλy = (3,46 * '+ley+') / '+hy+' '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'λy = '+lamy.toFixed(2)+' '
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});
	
	docDefinition.content.push(
	{
	text:
	'\r\nDeterminação da excentricidade acidental (ea)'
	+'\r\n' //pula linha
	, bold: true
	, fontSize: 13
	, alignment: 'justify'
	}
	);
	if(selsituac==3) {  // EXCENTRICIDADE ACIDENTAL PARA PILAR EM BALANÇO
		docDefinition.content.push({
		text:
		'\r\nPara pilares em balanço, deve-se fazer a consideração do desaprumo. Segundo a NBR6118:2014, o desaprumo é dado pela equação a seguir:'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
		docDefinition.content.push({
		image: i20  //IMAGEM DA EXCENTRICIDADE ACIDENTAL
		,width: 329
		,height: 40
		, alignment: 'left',
	});
	
	docDefinition.content.push({
		text:
		'\r\nθ1,x = 1 / [100 * √('+hix+' / 100)]'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'θ1,x = '+teta1x.toFixed(4)+' rad '
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nθ1,y = 1 / [100 * √('+hiy+' / 100)]'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'θ1,y = '+teta1y.toFixed(4)+' rad '
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nVerificação:'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		image: i3  //IMAGEM DA VERIFICAÇÃO DOS TETA
		,width: 86
		,height: 23
		, alignment: 'left',
	});
	docDefinition.content.push({
		text:
		'\r\nθ1,min = 1 / 300 = 0,00333 rad'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'θ1,max = 1 / 200 = 0,005 rad'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nAo se analizar o intervalo e os valores obtidos, tem-se:'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	if(teta1x<(1/300)) {
	docDefinition.content.push({
		text:
		'\r\nθ1,x= '+teta1x.toFixed(4)+' rad < 0,00333 rad'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	}
	else if(teta1x>(1/200)){
		docDefinition.content.push({
		text:
		'\r\nθ1,x= '+teta1x.toFixed(4)+' rad > 0,005 rad'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	}
	else {
		docDefinition.content.push({
		text:
		'\r\n0,00333 rad ≤ θ1,x= '+teta1x.toFixed(4)+' rad ≤ 0,005 rad'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	}
	docDefinition.content.push({
		text:
		'\r\nθ1,x = '+tetax.toFixed(4)+' rad'
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});
	if(teta1y<(1/300)) {
	docDefinition.content.push({
		text:
		'\r\nθ1,y= '+teta1y.toFixed(4)+' rad < 0,00333 rad'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	}
	else if(teta1y>(1/200)){
		docDefinition.content.push({
		text:
		'\r\nθ1,y= '+teta1y.toFixed(4)+' rad > 0,005 rad'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	}
	else {
		docDefinition.content.push({
		text:
		'\r\n0,00333 rad ≤ θ1,y = '+teta1y.toFixed(4)+' rad ≤ 0,005 rad'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});}
	docDefinition.content.push({
		text:
		'θ1,y = '+tetay.toFixed(4)+' rad'
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nDesta forma, tem-se:'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\n- No topo do pilar: '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nea,x,topo = '+tetax.toFixed(4)+' * ('+hix+') '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'ea,x,topo = '+eaxtopo.toFixed(2)+' cm '
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});
		docDefinition.content.push({
		text:
		'\r\nea,y,topo = '+tetay.toFixed(4)+' * ('+hiy+') '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'ea,y,topo = '+eaytopo.toFixed(2)+' cm '
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});
	
	docDefinition.content.push({
		text:
		'\r\n- No meio do pilar: '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nea,x,meio = '+tetax.toFixed(4)+' * ('+hix+' / 2) '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'ea,x,meio = '+eax.toFixed(2)+' cm '
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});
		docDefinition.content.push({
		text:
		'\r\nea,y,meio = '+tetay.toFixed(4)+' * ('+hiy+' / 2) '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'ea,y,meio = '+eay.toFixed(2)+' cm '
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});
	}
	
	else {
	docDefinition.content.push({
		text:
		'\r\nConforme item 11.3.3.4.2 da NBR-6118:2014, apenas a consideração da falta de retilineidade já é suficiente, desta forma:'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
		docDefinition.content.push({
		image: i2  //IMAGEM DA EXCENTRICIDADE ACIDENTAL
		,width: 300
		,height: 45
		, alignment: 'left',
	});
	
	docDefinition.content.push({
		text:
		'\r\nθ1,x = 1 / [100 * √('+lex+' / 100)]'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'θ1,x = '+teta1x.toFixed(4)+' rad '
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nθ1,y = 1 / [100 * √('+ley+' / 100)]'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'θ1,y = '+teta1y.toFixed(4)+' rad '
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nVerificação:'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		image: i3  //IMAGEM DA VERIFICAÇÃO DOS TETA
		,width: 86
		,height: 23
		, alignment: 'left',
	});
	docDefinition.content.push({
		text:
		'\r\nθ1,min = 1 / 300 = 0,00333 rad'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'θ1,max = 1 / 200 = 0,005 rad'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nAo se analizar o intervalo e os valores obtidos, tem-se:'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	if(teta1x<(1/300)) {
	docDefinition.content.push({
		text:
		'\r\nθ1,x= '+teta1x.toFixed(4)+' rad < 0,00333 rad'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	}
	else if(teta1x>(1/200)){
		docDefinition.content.push({
		text:
		'\r\nθ1,x= '+teta1x.toFixed(4)+' rad > 0,005 rad'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	}
	else {
		docDefinition.content.push({
		text:
		'\r\n0,00333 rad ≤ θ1,x= '+teta1x.toFixed(4)+' rad ≤ 0,005 rad'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	}
	docDefinition.content.push({
		text:
		'\r\nθ1,x = '+tetax.toFixed(4)+' rad'
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});
	if(teta1y<(1/300)) {
	docDefinition.content.push({
		text:
		'\r\nθ1,y= '+teta1y.toFixed(4)+' rad < 0,00333 rad'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	}
	else if(teta1y>(1/200)){
		docDefinition.content.push({
		text:
		'\r\nθ1,y= '+teta1y.toFixed(4)+' rad > 0,005 rad'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	}
	else {
		docDefinition.content.push({
		text:
		'\r\n0,00333 rad ≤ θ1,y = '+teta1y.toFixed(4)+' rad ≤ 0,005 rad'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});}
	docDefinition.content.push({
		text:
		'θ1,y = '+tetay.toFixed(4)+' rad'
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nDesta forma, tem-se:'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nea,x = '+tetax.toFixed(4)+' * ('+lex+' / 2) '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'ea,x = '+eax.toFixed(2)+' cm '
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});
		docDefinition.content.push({
		text:
		'\r\nea,y = '+tetay.toFixed(4)+' * ('+ley+' / 2) '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'ea,y = '+eay.toFixed(2)+' cm '
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});
	
	}
	
	if(selsituac==3) {
		// DETERMINAÇÃO DAS EXCENTRICIDADES INICIAIS PILARES ENGASTADOS
		
		
		docDefinition.content.push(
	{
	text:
	'\r\nDeterminação das excentricidades iniciais (ei)'
	+'\r\n' //pula linha
	, bold: true
	, fontSize: 13
	, alignment: 'justify'
	}
	);
	
		docDefinition.content.push({
		text:
		'\r\n- Excentricidade Inicial:'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nPara direção x - no topo e na base:'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nei,x,topo = M1dtopo,x / Nd = 0 / '+Nd+' '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'ei,x,topo = 0 cm '
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nei,x,base = M1dbase,x / Nd = '+MDbasex+' / '+Nd+' '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'ei,x,base = '+eixbase.toFixed(2)+' cm '
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});
	
	docDefinition.content.push({
		text:
		'\r\nPara direção x - meio do pilar:'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nei,x,centro = M1d,centro,x / Nd = '+MDCx+' / '+Nd+' '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	
	docDefinition.content.push({
		text:
		'ei,x,centro = '+eixcentroini.toFixed(2)+' cm '
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nPara direção y - no topo e na base:'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nei,y,topo = M1dtopo,y / Nd = 0 / '+Nd+' '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'ei,y,topo = 0 cm '
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nei,y,base = M1dbase,y / Nd = '+MDbasey+' / '+Nd+' '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'ei,y,base = '+eiybase.toFixed(2)+' cm '
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});
	
	docDefinition.content.push({
		text:
		'\r\nPara direção y - meio do pilar:'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nei,y,centro = M1d,centro,y / Nd = '+MDCy+' / '+Nd+' '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	
	docDefinition.content.push({
		text:
		'ei,y,centro = '+eiycentroini.toFixed(2)+' cm '
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});
	}
	else {
		
	// DETERMINAÇÃO DAS EXCENTRICIDADES INICIAIS PILARES BIAPOIADOS
docDefinition.content.push(
	{
	text:
	'\r\nDeterminação das excentricidades iniciais (ei)'
	+'\r\n' //pula linha
	, bold: true
	, fontSize: 13
	, alignment: 'justify'
	}
	);
	
		docDefinition.content.push({
		text:
		'\r\n- Excentricidade Inicial:'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nPara direção x - no topo e na base:'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nei,x,topo = M1dtopo,x / Nd = '+MDtopox+' / '+Nd+' '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'ei,x,topo = '+eixtopo.toFixed(2)+' cm '
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nei,x,base = M1dbase,x / Nd = '+MDbasex+' / '+Nd+' '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'ei,x,base = '+eixbase.toFixed(2)+' cm '
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});
	
	docDefinition.content.push({
		text:
		'\r\nPara direção x - meio do pilar:'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nei,x,meio = 0,6 * ei,x,max + 0,4 * ei,x,min ≥ 0,4 * ei,x,max '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'ei,x,meio = 0,6 * '+emaxx.toFixed(2)+' + 0,4 * '+eminx.toFixed(2)+' ≥ 0,4 * '+emaxx.toFixed(2)+' '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	
	if(eixci>=eixcv) {
		docDefinition.content.push({
		text:
		'ei,x,meio = '+eixci.toFixed(2)+' cm ≥ '+eixcv.toFixed(2)+' cm '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	}
	else {
		docDefinition.content.push({
		text:
		'ei,x,meio = '+eixci.toFixed(2)+' cm < '+eixcv.toFixed(2)+' cm '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	}
	
	

	docDefinition.content.push({
		text:
		'\r\nAo analizar o intervalo permitido, o valor da excentricidade inicial no centro do pilar (em módulo) para a direção "x" é: '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'ei,x,meio = '+eixcentro.toFixed(2)+' cm '
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nPara direção y - no topo e na base:'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nei,y,topo = M1dtopo,y / Nd = '+MDtopoy+' / '+Nd+' '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'ei,y,topo = '+eiytopo.toFixed(2)+' cm '
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nei,y,base = M1dbase,y / Nd = '+MDbasey+' / '+Nd+' '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'ei,y,base = '+eiybase.toFixed(2)+' cm '
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});
	
	docDefinition.content.push({
		text:
		'\r\nPara direção y - meio do pilar:'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nei,y,meio = 0,6 * ei,y,max + 0,4 * ei,y,min ≥ 0,4 * ei,y,max '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'ei,y,meio = 0,6 * '+emaxy.toFixed(2)+' + 0,4 * '+eminy.toFixed(2)+' ≥ 0,4 * '+emaxy.toFixed(2)+' '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	if(eiyci>=eiycv) {
		docDefinition.content.push({
		text:
		'ei,y,meio = '+eiyci.toFixed(2)+' cm ≥ '+eiycv.toFixed(2)+' cm '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	}
	else {
		docDefinition.content.push({
		text:
		'ei,y,meio = '+eiyci.toFixed(2)+' cm < '+eiycv.toFixed(2)+' cm '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	}
	
	docDefinition.content.push({
		text:
		'\r\nAo analizar o intervalo permitido, o valor da excentricidade inicial no centro do pilar (em módulo) para a direção "y" é: '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'ei,y,meio = '+eiycentro.toFixed(2)+' cm '
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});
	}
	
	
	docDefinition.content.push(
	{
	text:
	'\r\nDeterminação do momento fletor mínimo de primeira ordem (M1d,min):'
	+'\r\n' //pula linha
	, bold: true
	, fontSize: 13
	, alignment: 'justify'
	}
	);
	docDefinition.content.push({
		text:
		'\r\nM1d,min = Nd * (1,5 + 0,03 * h)'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nM1d,min,x = Nd * (1,5 + 0,03 * hx) = '+Nd.toFixed(2)+' * (1,5 + 0,03 * '+hx+') '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'M1d,min,x = '+mmix.toFixed(2)+' kN.cm '
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nM1d,min,y = Nd * (1,5 + 0,03 * hy) = '+Nd.toFixed(2)+' * (1,5 + 0,03 * '+hy+') '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'M1d,min,y = '+mmiy.toFixed(2)+' kN.cm '
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\n- Transformando os momentos em excentricidades:'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\ne1,min,x = M1d,min,x / Nd = '+mmix.toFixed(2)+' / '+Nd.toFixed(2)+' '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'e1,min,x = '+emix.toFixed(2)+' cm '
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\ne1,min,y = M1d,min,y / Nd = '+mmiy.toFixed(2)+' / '+Nd.toFixed(2)+' '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'e1,min,y = '+emiy.toFixed(2)+' cm '
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});
	
	if (selsituac==3) { //VERIFICAÇÃO EXCENTRICIDADE MÍNIMA PARA PILARES ENGASTADOS
	
	//COMEÇA AGORA ÍNDICE DE ESBELTEZ PARA PILARES ENGASTADOS
		docDefinition.content.push({
		text:
		'\r\n-Antes de seguir para a determinação da excentricidade autante no pilar em balanço, deve-se primeiro obter o valor de αb: '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
		
		docDefinition.content.push({
		text:
		'\r\n-O valor de αb, para pilares em balanço, deve ser obtido conforme estabelecido a seguir:'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		image: i18  //IMAGEM DO ALFAB PARA EM BALANÇO
		,width: 271
		,height: 52
		, alignment: 'left',
	});
	docDefinition.content.push({
		text:
		'\r\n- Para a direção x:'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\n1,0 ≥ αb,x = 0,8 + 0,2 * (MCx / MAx) ≥ 0,85'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\n1,0 ≥ αb,x = 0,8 + 0,2 * ('+MDCx.toFixed(2)+' / '+(eixbase*Nd).toFixed(2)+') ≥ 0,85'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	if(alfabtestex>1) {
		docDefinition.content.push({
		text:
		'\r\n1,0 < αb,x = '+alfabtestex.toFixed(2)+''
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	}
	else if(alfabtestex<0.85) {
		docDefinition.content.push({
		text:
		'\r\nαb,x = '+alfabtestex.toFixed(2)+' < 0,85'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	}
	else {
		docDefinition.content.push({
		text:
		'\r\n1,0 ≥ αb,x = '+alfabtestex.toFixed(2)+' ≥ 0,85'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	}
	docDefinition.content.push({
		text:
		'\r\nAo analizar o intervalo permitido, o valor de αb para a direção "x" é: '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'αb,x = '+alfabx.toFixed(2)+'  '
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\n- Para a direção y:'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\n1,0 ≥ αb,y = 0,8 + 0,2 * (MCy / MAy) ≥ 0,85'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\n1,0 ≥ αb,y = 0,8 + 0,2 * ('+MDCy.toFixed(2)+' / '+(eiybase*Nd).toFixed(2)+') ≥ 0,85'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	if(alfabtestey>1) {
		docDefinition.content.push({
		text:
		'\r\n1,0 < αb,y = '+alfabtestey.toFixed(2)+''
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	}
	else if(alfabtestey<0.85) {
		docDefinition.content.push({
		text:
		'\r\nαb,y = '+alfabtestey.toFixed(2)+' < 0,85'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	}
	else {
		docDefinition.content.push({
		text:
		'\r\n1,0 ≥ αb,y = '+alfabtestey.toFixed(2)+' ≥ 0,85'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	}
	docDefinition.content.push({
		text:
		'\r\nAo analizar o intervalo permitido, o valor de αb para a direção "y" é: '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'αb,y = '+alfaby.toFixed(2)+'  '
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});
	
	docDefinition.content.push({
		text:
		'\r\nDessa forma, podem-se calcular dois valores para as excentricidades no centro do pilar: a excentricidade (ei,centro) inicial acrescida da excentricidade acidental (ea); a excentricidade gerada devido ao coeficiente αb (ei,base * αb);  '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nEstes dois valores devem ser comparadas e a maior será ao final comparada com a excentricidade mínima. Desta forma, tem-se:  '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	
	docDefinition.content.push({
		text:
		'\r\n-Para a direção x:  '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	
	docDefinition.content.push({
		text:
		'\r\neix,centro + ea,x, centro ≥ αb * eix,base  '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\n'+Math.abs(eixcentroini).toFixed(2)+' + '+eax.toFixed(2)+' ≥ '+alfabx.toFixed(2)+' * '+Math.abs(eixbase).toFixed(2)+' '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	 if((Math.abs(eixcentroini)+eax)>Math.abs(eixcentroini2)){
	docDefinition.content.push({
		text:
		'\r\n'+(Math.abs(eixcentroini)+eax).toFixed(2)+' > '+(alfabx*Math.abs(eixbase)).toFixed(2)+' '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nDesta forma, o valor posteriormente comparado com a excentricidade mínima, na direção x, será '+eixcentro.toFixed(2)+' cm.  '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	}
	else {
	docDefinition.content.push({
		text:
		'\r\n'+(Math.abs(eixcentroini)+eax).toFixed(2)+' < '+(alfabx*Math.abs(eixbase)).toFixed(2)+' '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nDesta forma, o valor posteriormente comparado com a excentricidade mínima será '+eixcentro.toFixed(2)+' cm.  '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	}
	docDefinition.content.push({
		text:
		'\r\n-Para a direção y:  '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	
	docDefinition.content.push({
		text:
		'\r\neiy,centro + ea,y, centro ≥ αb * eiy,base  '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\n'+Math.abs(eiycentroini).toFixed(2)+' + '+eay.toFixed(2)+' ≥ '+alfaby.toFixed(2)+' * '+Math.abs(eiybase).toFixed(2)+' '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	if((Math.abs(eiycentroini)+eay)>Math.abs(eiycentroini2)) {
	docDefinition.content.push({
		text:
		'\r\n'+(Math.abs(eiycentroini)+eay).toFixed(2)+' > '+(alfaby*Math.abs(eiybase)).toFixed(2)+' '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nDesta forma, o valor posteriormente comparado com a excentricidade mínima será '+eiycentro.toFixed(2)+' cm.  '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	}
	else {
	docDefinition.content.push({
		text:
		'\r\n'+(Math.abs(eiycentroini)+eay).toFixed(2)+' < '+(alfaby*Math.abs(eiybase)).toFixed(2)+' '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nDesta forma, o valor posteriormente comparado com a excentricidade mínima será '+eiycentro.toFixed(2)+' cm.  '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	}
	
		docDefinition.content.push(
	{
	text:
	'\r\nVerificação quanto à excentricidade mínima:'
	+'\r\n' //pula linha
	, bold: true
	, fontSize: 13
	, alignment: 'justify'
	}
	);
	docDefinition.content.push({
		text:
		'\r\n-No topo do pilar (em módulo):'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\ne1,topo,x = ei,x,topo + ea,x,topo ≥ e1,min,x'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\ne1,topo,x = '+Math.abs(eixtopo).toFixed(2)+' + '+eaxtopo.toFixed(2)+' ≥ '+emix.toFixed(2)+''
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\ne1,topo,x = '+Math.abs(eixtopo+eaxtopo).toFixed(2)+' < '+emix.toFixed(2)+''
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nAo analizar o intervalo permitido, o valor da excentricidade de primeira ordem no topo do pilar (em módulo) para a direção "x" é: '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'e1,topo,x = '+Math.abs(e1topox).toFixed(2)+' cm '
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\ne1,topo,y = ei,y,topo + ea,y,topo ≥ e1,min,y'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\ne1,topo,y = '+Math.abs(eiytopo).toFixed(2)+' + '+eaxtopo.toFixed(2)+' ≥ '+emiy.toFixed(2)+''
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\ne1,topo,y = '+Math.abs(eiytopo+eaytopo).toFixed(2)+' < '+emiy.toFixed(2)+''
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nAo analizar o intervalo permitido, o valor da excentricidade de primeira ordem no topo do pilar (em módulo) para a direção "y" é: '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'e1,topo,y = '+Math.abs(e1topoy).toFixed(2)+' cm '
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\n-Na base do pilar (em módulo):'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\ne1,base,x = ei,x,base + ea,x ≥ e1,min,x'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\ne1,base,x = '+Math.abs(eixbase).toFixed(2)+' + 0 ≥ '+emix.toFixed(2)+''
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	if(eixbase>emix) {
		docDefinition.content.push({
		text:
		'\r\ne1,base,x = '+Math.abs(eixbase).toFixed(2)+' > '+emix.toFixed(2)+''
		+'\r\n' //pula linha
		, alignment: 'justify'
	}); }
	else {
		docDefinition.content.push({
		text:
		'\r\ne1,base,x = '+Math.abs(eixbase).toFixed(2)+' ≤ '+emix.toFixed(2)+''
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	}
	docDefinition.content.push({
		text:
		'\r\nAo analizar o intervalo permitido, o valor da excentricidade de primeira ordem na base do pilar (em módulo) para a direção "x" é: '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'e1,base,x = '+Math.abs(e1basex).toFixed(2)+' cm '
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\ne1,base,y = ei,y,base + ea,y ≥ e1,min,y'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\ne1,base,y = '+Math.abs(eiybase).toFixed(2)+' + 0 ≥ '+emiy.toFixed(2)+''
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
		if(eiybase>emiy) {
		docDefinition.content.push({
		text:
		'\r\ne1,base,y = '+Math.abs(eiybase).toFixed(2)+' > '+emiy.toFixed(2)+''
		+'\r\n' //pula linha
		, alignment: 'justify'
	}); }
	else {
		docDefinition.content.push({
		text:
		'\r\ne1,base,y = '+Math.abs(eiybase).toFixed(2)+' ≤ '+emiy.toFixed(2)+''
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	}
	docDefinition.content.push({
		text:
		'\r\nAo analizar o intervalo permitido, o valor da excentricidade de primeira ordem na base do pilar (em módulo) para a direção "y" é: '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'e1,base,y = '+Math.abs(e1basey).toFixed(2)+' cm '
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});
		docDefinition.content.push({
		text:
		'\r\n-No centro do pilar (em módulo):'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\ne1,centro,x = e,centro,x ≥ e1,min,x'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\ne1,centro,x = '+Math.abs(eixcentro).toFixed(2)+' ≥ '+emix.toFixed(2)+''
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	if((Math.abs(eixcentro))>emix) {
		docDefinition.content.push({
		text:
		'\r\ne1,centro,x = '+(Math.abs(eixcentro)).toFixed(2)+' > '+emix.toFixed(2)+''
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	}
	else {
		docDefinition.content.push({
		text:
		'\r\ne1,centro,x = '+(Math.abs(eixcentro)).toFixed(2)+' ≤ '+emix.toFixed(2)+''
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	}
	
	docDefinition.content.push({
		text:
		'\r\nAo analizar o intervalo permitido, o valor da excentricidade de primeira ordem no centro do pilar (em módulo) para a direção "x" é: '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'e1,centro,x = '+Math.abs(e1centrox).toFixed(2)+' cm '
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\ne1,centro,y = e,centro,y ≥ e1,min,y'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\ne1,centro,y = '+Math.abs(eiycentro).toFixed(2)+' ≥ '+emiy.toFixed(2)+''
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	if((Math.abs(eiycentro))>emiy) {
		docDefinition.content.push({
		text:
		'\r\ne1,centro,y = '+(Math.abs(eiycentro)).toFixed(2)+' > '+emiy.toFixed(2)+''
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	}
	else {
		docDefinition.content.push({
		text:
		'\r\ne1,centro,y = '+(Math.abs(eiycentro)).toFixed(2)+' ≤ '+emiy.toFixed(2)+''
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	}
	docDefinition.content.push({
		text:
		'\r\nAo analizar o intervalo permitido, o valor da excentricidade de primeira ordem no centro do pilar (em módulo) para a direção "y" é: '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'e1,centro,y = '+Math.abs(e1centroy).toFixed(2)+' cm '
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});
	}
	
	else {
		//VERIFICAÇÃO DE EXCENTRICIDADE MÍNIMA PARA PILAR BIAPOIADO
	docDefinition.content.push(
	{
	text:
	'\r\nVerificação quanto à excentricidade mínima:'
	+'\r\n' //pula linha
	, bold: true
	, fontSize: 13
	, alignment: 'justify'
	}
	);
	docDefinition.content.push({
		text:
		'\r\n-No topo do pilar (em módulo):'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\ne1,topo,x = ei,x,topo + ea,x ≥ e1,min,x'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\ne1,topo,x = '+Math.abs(eixtopo).toFixed(2)+' + 0 ≥ '+emix.toFixed(2)+''
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	if(eixtopo>emix) {
		docDefinition.content.push({
		text:
		'\r\ne1,topo,x = '+Math.abs(eixtopo).toFixed(2)+' > '+emix.toFixed(2)+''
		+'\r\n' //pula linha
		, alignment: 'justify'
	}); }
	else {
		docDefinition.content.push({
		text:
		'\r\ne1,topo,x = '+Math.abs(eixtopo).toFixed(2)+' ≤ '+emix.toFixed(2)+''
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	}
	docDefinition.content.push({
		text:
		'\r\nAo analizar o intervalo permitido, o valor da excentricidade de primeira ordem no topo do pilar (em módulo) para a direção "x" é: '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'e1,topo,x = '+Math.abs(e1topox).toFixed(2)+' cm '
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\ne1,topo,y = ei,y,topo + ea,y ≥ e1,min,y'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\ne1,topo,y = '+Math.abs(eiytopo).toFixed(2)+' + 0 ≥ '+emiy.toFixed(2)+''
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	if(eiytopo>emiy) {
		docDefinition.content.push({
		text:
		'\r\ne1,topo,y = '+Math.abs(eiytopo).toFixed(2)+' > '+emiy.toFixed(2)+''
		+'\r\n' //pula linha
		, alignment: 'justify'
	}); }
	else {
		docDefinition.content.push({
		text:
		'\r\ne1,topo,y = '+Math.abs(eiytopo).toFixed(2)+' ≤ '+emiy.toFixed(2)+''
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	}
	docDefinition.content.push({
		text:
		'\r\nAo analizar o intervalo permitido, o valor da excentricidade de primeira ordem no topo do pilar (em módulo) para a direção "y" é: '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'e1,topo,y = '+Math.abs(e1topoy).toFixed(2)+' cm '
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\n-Na base do pilar (em módulo):'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\ne1,base,x = ei,x,base + ea,x ≥ e1,min,x'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\ne1,base,x = '+Math.abs(eixbase).toFixed(2)+' + 0 ≥ '+emix.toFixed(2)+''
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	if(eixbase>emix) {
		docDefinition.content.push({
		text:
		'\r\ne1,base,x = '+Math.abs(eixbase).toFixed(2)+' > '+emix.toFixed(2)+''
		+'\r\n' //pula linha
		, alignment: 'justify'
	}); }
	else {
		docDefinition.content.push({
		text:
		'\r\ne1,base,x = '+Math.abs(eixbase).toFixed(2)+' ≤ '+emix.toFixed(2)+''
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	}
	docDefinition.content.push({
		text:
		'\r\nAo analizar o intervalo permitido, o valor da excentricidade de primeira ordem na base do pilar (em módulo) para a direção "x" é: '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'e1,base,x = '+Math.abs(e1basex).toFixed(2)+' cm '
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\ne1,base,y = ei,y,base + ea,y ≥ e1,min,y'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\ne1,base,y = '+Math.abs(eiybase).toFixed(2)+' + 0 ≥ '+emiy.toFixed(2)+''
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	if(eiybase>emiy) {
		docDefinition.content.push({
		text:
		'\r\ne1,base,y = '+Math.abs(eiybase).toFixed(2)+' > '+emiy.toFixed(2)+''
		+'\r\n' //pula linha
		, alignment: 'justify'
	}); }
	else {
		docDefinition.content.push({
		text:
		'\r\ne1,base,y = '+Math.abs(eiybase).toFixed(2)+' ≤ '+emiy.toFixed(2)+''
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	}
	docDefinition.content.push({
		text:
		'\r\nAo analizar o intervalo permitido, o valor da excentricidade de primeira ordem na base do pilar (em módulo) para a direção "y" é: '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'e1,base,y = '+Math.abs(e1basey).toFixed(2)+' cm '
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});
		docDefinition.content.push({
		text:
		'\r\n-No centro do pilar (em módulo):'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\ne1,centro,x = ei,centro,x + ea,x ≥ e1,min,x'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\ne1,centro,x = '+Math.abs(eixcentro).toFixed(2)+' + '+eax.toFixed(2)+' ≥ '+emix.toFixed(2)+''
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	if((Math.abs(eixcentro)+eax)>emix) {
		docDefinition.content.push({
		text:
		'\r\ne1,centro,x = '+(Math.abs(eixcentro)+eax).toFixed(2)+' > '+emix.toFixed(2)+''
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	}
	else {
		docDefinition.content.push({
		text:
		'\r\ne1,centro,x = '+(Math.abs(eixcentro)+eax).toFixed(2)+' ≤ '+emix.toFixed(2)+''
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	}
	docDefinition.content.push({
		text:
		'\r\nAo analizar o intervalo permitido, o valor da excentricidade de primeira ordem no centro do pilar (em módulo) para a direção "x" é: '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'e1,centro,x = '+Math.abs(e1centrox).toFixed(2)+' cm '
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\ne1,centro,y = ei,centro,y + ea,y ≥ e1,min,y'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\ne1,centro,y = '+eiycentro.toFixed(2)+' + '+eay.toFixed(2)+' ≥ '+emiy.toFixed(2)+''
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	if((Math.abs(eiycentro)+eay)>emiy) {
		docDefinition.content.push({
		text:
		'\r\ne1,centro,y = '+(Math.abs(eiycentro)+eay).toFixed(2)+' > '+emiy.toFixed(2)+''
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	}
	else {
		docDefinition.content.push({
		text:
		'\r\ne1,centro,y = '+(Math.abs(eiycentro)+eay).toFixed(2)+' ≤ '+emiy.toFixed(2)+''
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	}
	docDefinition.content.push({
		text:
		'\r\nAo analizar o intervalo permitido, o valor da excentricidade de primeira ordem no centro do pilar (em módulo) para a direção "y" é: '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'e1,centro,y = '+Math.abs(e1centroy).toFixed(2)+' cm '
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});
	}
	
	docDefinition.content.push(
	{
	text:
	'\r\nDeterminação do Índice de esbeltez limite (λ1):'
	+'\r\n' //pula linha
	, bold: true
	, fontSize: 13
	, alignment: 'justify'
	}
	);
	docDefinition.content.push({
		image: i4  //IMAGEM DO ÍNDICE DE ESBELTEZ LIMITE
		,width: 171
		,height: 40
		, alignment: 'left',
	});
	
	//COMEÇA AGORA ÍNDICE DE ESBELTEZ PARA PILARES BIAPOIADOS SEM CARGA TRANSVERSAL 
	if(selsituac==1) {
		
		docDefinition.content.push({
		text:
		'\r\n-O valor de αb, para pilares biapoiados sem cargas transversais, deve ser obtido conforme estabelecido a seguir:'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		image: i5  //IMAGEM DO ALFAB PARA PILARES BIAPOIADOS SEM CARGA
		,width: 200
		,height: 40
		, alignment: 'left',
	});
	docDefinition.content.push({
		text:
		'\r\n- Para a direção x:'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\n1,0 ≥ αb,x = 0,6 + 0,4 * (MBx / MAx) ≥ 0,4'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\n1,0 ≥ αb,x = 0,6 + 0,4 * ('+MMBx.toFixed(2)+' / '+MMAx.toFixed(2)+') ≥ 0,4'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	if(alfabtestex>1) {
		docDefinition.content.push({
		text:
		'\r\n1,0 < αb,x = '+alfabtestex.toFixed(2)+''
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	}
	else if(alfabtestex<0.4) {
		docDefinition.content.push({
		text:
		'\r\nαb,x = '+alfabtestex.toFixed(2)+' < 0,4'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	}
	else {
		docDefinition.content.push({
		text:
		'\r\n1,0 ≥ αb,x = '+alfabtestex.toFixed(2)+' ≥ 0,4'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	}
	docDefinition.content.push({
		text:
		'\r\nAo analizar o intervalo permitido, o valor de αb para a direção "x" é: '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'αb,x = '+alfabx.toFixed(2)+'  '
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\n- Para a direção y:'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\n1,0 ≥ αb,y = 0,6 + 0,4 * (MBy / MAy) ≥ 0,4'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\n1,0 ≥ αb,y = 0,6 + 0,4 * ('+MMBy.toFixed(2)+' / '+MMAy.toFixed(2)+') ≥ 0,4'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	if(alfabtestey>1) {
		docDefinition.content.push({
		text:
		'\r\n1,0 < αb,y = '+alfabtestey.toFixed(2)+''
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	}
	else if(alfabtestey<0.4) {
		docDefinition.content.push({
		text:
		'\r\nαb,y = '+alfabtestey.toFixed(2)+' < 0,4'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	}
	else {
		docDefinition.content.push({
		text:
		'\r\n1,0 ≥ αb,y = '+alfabtestey.toFixed(2)+' ≥ 0,4'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	}
	docDefinition.content.push({
		text:
		'\r\nAo analizar o intervalo permitido, o valor de αb para a direção "y" é: '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'αb,y = '+alfaby.toFixed(2)+'  '
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});
	}
	
	//COMEÇA AGORA ÍNDICE DE ESBELTEZ PARA PILARES BIAPOIADOS COM CARGA TRANSVERSAL
	else if(selsituac==2) {
		docDefinition.content.push({
		text:
		'\r\n-O valor de αb, para pilares biapoiados com cargas transversais é sempre igual a 1.'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	}
	
	
	
	docDefinition.content.push({
		text:
		'\r\n- Determinação de λ1,x:'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nλ1,x = (25 + 12,5 * (ei,x / hx)) / αb,x '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nλ1,x = (25 + 12,5 * ('+Math.abs(MAx).toFixed(2)+' / '+hx+')) / '+alfabx.toFixed(2)+' '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nλ1,x = '+lambida1xini.toFixed(2)+' '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nAo analizar o intervalo permitido (35 ≤ λ1 ≤ 90), o valor de λ1 para a direção "x" é: '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'λ1,x = '+lambida1x.toFixed(2)+'  '
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\n- Determinação de λ1,y:'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nλ1,y = (25 + 12,5 * (ei,y / hy)) / αb,y '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nλ1,y = (25 + 12,5 * ('+Math.abs(MAy).toFixed(2)+' / '+hy+')) / '+alfaby.toFixed(2)+' '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nλ1,y = '+lambida1yini.toFixed(2)+' '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nAo analizar o intervalo permitido (35 ≤ λ1 ≤ 90), o valor de λ1 para a direção "y" é: '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'λ1,y = '+lambida1y.toFixed(2)+'  '
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\n--Verificação da esbeltez limite: '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	if(lamx>lambida1x) {
	docDefinition.content.push({
		text:
		'\r\nλx = '+lamx.toFixed(2)+' > λ1,x = '+lambida1x.toFixed(2)+' --> Considerar efeitos locais de segunda ordem! '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	}
	else {
		docDefinition.content.push({
		text:
		'\r\nλx = '+lamx.toFixed(2)+' < λ1,x = '+lambida1x.toFixed(2)+' --> Não considerar efeitos locais de segunda ordem! '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
		
	}
	
	if(lamy>lambida1y) {
	docDefinition.content.push({
		text:
		'\r\nλy = '+lamy.toFixed(2)+' > λ1,y = '+lambida1y.toFixed(2)+' --> Considerar efeitos locais de segunda ordem! '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	}
	else {
		docDefinition.content.push({
		text:
		'\r\nλy = '+lamy.toFixed(2)+' < λ1,y = '+lambida1y.toFixed(2)+' --> Não considerar efeitos locais de segunda ordem! '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	}

	
	if(selsegord==1) {
docDefinition.content.push(
	{
	text:
	'\r\nDeterminação do momento fletor total (Md,tot) pelo método do "Pilar padrão com curvatura aproximada":'
	+'\r\n' //pula linha
	, bold: true
	, fontSize: 13
	, alignment: 'justify'
	}
	);
	docDefinition.content.push({
		image: i13  //IMAGEM CURVATURA APROX
		,width: 170
		,height: 63
		, alignment: 'left',
	});
	docDefinition.content.push({
		text:
		'\r\n-Para a direção "x": '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	
	if(lamx>lambida1x) {
		
	docDefinition.content.push({
		text:
		'\r\nCálculo da curvatura aproximada: '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nν = '+Nd+' / ('+hx+' * '+hy+' * '+Fcd.toFixed(2)+') --> ν = '+v.toFixed(2)+''
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\n(1/r),x = 0,005 / ('+hx+' * ('+v.toFixed(2)+' + 0,5)) ≤ (0,005 / '+hx+')'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	if((0.005/(hx*(v+0.5)))<=(0.005/hx)) {
		docDefinition.content.push({
		text:
		'\r\n(1/r),x = '+(0.005/(hx*(v+0.5))).toFixed(8)+' ≤ '+(0.005/hx).toFixed(8)+''
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	}
	else {
		docDefinition.content.push({
		text:
		'\r\n(1/r),x = '+(0.005/(hx*(v+0.5))).toFixed(8)+' > '+(0.005/hx).toFixed(8)+''
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	}
	docDefinition.content.push({
		text:
		'\r\nAo analizar o intervalo, define-se o valor da curvatura aproximada para a direção "x": '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\n(1/r),x = '+curvx.toFixed(8)+' cm^(-1) '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nCálculo do momento fletor  total: '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	
	docDefinition.content.push({
		text:
		'\r\nMd,tot,x = '+alfabx+' * '+M1dAx+' + '+Nd+' * [('+lex+'²) / 10] * '+curvx.toFixed(8)+'   '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'Md,tot,x = '+Mdtotx.toFixed(2)+' kN.cm  '
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});
	
	docDefinition.content.push({
		text:
		'\r\nTransformando o momento em excentricidade: '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\netot,x = Md,tot,x / Nd = '+Mdtotx.toFixed(2)+' / '+Nd+' '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'e,tot,x = '+(Mdtotx/Nd).toFixed(2)+' cm  '
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});
	}
	else {
		docDefinition.content.push({
		text:
		'\r\nNão considerar efeitos de segunda ordem local para a direção "x". '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	}
	
	docDefinition.content.push({
		text:
		'\r\n-Para a direção "y": '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	
	if(lamy>lambida1y) {
		
	docDefinition.content.push({
		text:
		'\r\nCálculo da curvatura aproximada: '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nν = '+Nd+' / ('+hx+' * '+hy+' * '+Fcd.toFixed(2)+') --> ν = '+v.toFixed(2)+''
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\n(1/r),y = 0,005 / ('+hy+' * ('+v.toFixed(2)+' + 0,5)) ≤ (0,005 / '+hy+')'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	if((0.005/(hy*(v+0.5)))<=(0.005/hy)) {
		docDefinition.content.push({
		text:
		'\r\n(1/r),y = '+(0.005/(hy*(v+0.5))).toFixed(8)+' ≤ '+(0.005/hy).toFixed(8)+''
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	}
	else {
		docDefinition.content.push({
		text:
		'\r\n(1/r),y = '+(0.005/(hy*(v+0.5))).toFixed(8)+' > '+(0.005/hy).toFixed(8)+''
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	}
	docDefinition.content.push({
		text:
		'\r\nAo analizar o intervalo, define-se o valor da curvatura aproximada para a direção "y": '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\n(1/r),y = '+curvy.toFixed(8)+' cm^(-1) '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nCálculo do momento fletor  total: '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	
	docDefinition.content.push({
		text:
		'\r\nMd,tot,y = '+alfaby+' * '+M1dAy+' + '+Nd+' * [('+ley+'²) / 10] * '+curvy.toFixed(8)+'   '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'Md,tot,y = '+Mdtoty.toFixed(2)+' kN.cm  '
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});
	
	docDefinition.content.push({
		text:
		'\r\nTransformando o momento em excentricidade: '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\netot,y = Md,tot,y / Nd = '+Mdtoty.toFixed(2)+' / '+Nd+' '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'e,tot,y = '+(Mdtoty/Nd).toFixed(2)+' cm  '
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});
	
	}
	else {
		docDefinition.content.push({
		text:
		'\r\nNão considerar efeitos de segunda ordem local para a direção "y". '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	}
	}
	
	
	else if (selsegord==2) {
		docDefinition.content.push(
	{
	text:
	'\r\nDeterminação do momento fletor total (Md,tot) pelo método do "Pilar padrão com rigidez κ aproximada":'
	+'\r\n' //pula linha
	, bold: true
	, fontSize: 13
	, alignment: 'justify'
	}
	);
	docDefinition.content.push({
		image: i16  //IMAGEM RIGIDEZ KAPPA
		+'\r\n' //pula linha
		,width: 317
		,height: 44
		, alignment: 'left',
	});
	docDefinition.content.push({
		image: i17  //IMAGEM RIGIDEZ KAPPA pt 2
		,width: 351
		,height: 47
		, alignment: 'left',
	});
	
	if(lamx>lambida1x) {
	docDefinition.content.push({
		text:
		'\r\n-Para a direção "x": '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nκ1,x = 1 - (λx² / 3840) = 1 - ('+lamx.toFixed(2)+'² / 3840) --> κ1,x = '+k1x.toFixed(4)+''
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nκ2,x = κ1,x * hx * Nd = '+k1x.toFixed(4)+' * '+hx+' * '+Nd+' --> κ2,x = '+k2x.toFixed(2)+''
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nM1,x = αb,x * M1d,A,x = '+alfabx.toFixed(2)+' * '+M1dAx.toFixed(2)+' --> M1,x = '+M1x.toFixed(2)+' kN.cm'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	
	docDefinition.content.push({
		text:
		'\r\nCálculo do momento fletor total: '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	
	docDefinition.content.push({
		text:
		'\r\nMd,tot,x = [5 * '+M1x.toFixed(2)+' - '+k2x.toFixed(2)+' + √('+k2x.toFixed(2)+'² + 10 * '+M1x.toFixed(2)+' * (2 * '+hx+' * '+Nd+' - '+k2x.toFixed(2)+') + 25* '+M1x.toFixed(2)+'²)] / 10   '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'Md,tot,x = '+Mdtotx.toFixed(2)+' kN.cm  '
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});
	
	docDefinition.content.push({
		text:
		'\r\nTransformando o momento em excentricidade: '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\netot,x = Md,tot,x / Nd = '+Mdtotx.toFixed(2)+' / '+Nd+' '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'e,tot,x = '+(Mdtotx/Nd).toFixed(2)+' cm  '
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});
	}
	else {
		docDefinition.content.push({
		text:
		'\r\nNão considerar efeitos de segunda ordem local para a direção "x". '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	}
	
	
	if(lamy>lambida1y) {
	docDefinition.content.push({
		text:
		'\r\n-Para a direção "y": '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nκ1,y = 1 - (λy² / 3840) = 1 - ('+lamy.toFixed(2)+'² / 3840) --> κ1,y = '+k1y.toFixed(4)+''
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nκ2,y = κ1,y * hx * Nd = '+k1y.toFixed(4)+' * '+hy+' * '+Nd+' --> κ2,y = '+k2y.toFixed(2)+''
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nM1,y = αb,y * M1d,A,y = '+alfabx.toFixed(2)+' * '+M1dAy.toFixed(2)+' --> M1,y = '+M1y.toFixed(2)+' kN.cm'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	
	docDefinition.content.push({
		text:
		'\r\nCálculo do momento fletor total: '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	
	docDefinition.content.push({
		text:
		'\r\nMd,tot,y = [5 * '+M1y.toFixed(2)+' - '+k2y.toFixed(2)+' + √('+k2y.toFixed(2)+'² + 10 * '+M1y.toFixed(2)+' * (2 * '+hy+' * '+Nd+' - '+k2y.toFixed(2)+') + 25* '+M1y.toFixed(2)+'²)] / 10   '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	
	docDefinition.content.push({
		text:
		'Md,tot,y = '+Mdtoty.toFixed(2)+' kN.cm  '
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});
	
	docDefinition.content.push({
		text:
		'\r\nTransformando o momento em excentricidade: '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\netot,y = Md,tot,y / Nd = '+Mdtoty.toFixed(2)+' / '+Nd+' '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'e,tot,y = '+(Mdtoty/Nd).toFixed(2)+' cm  '
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});
	}
	else {
		docDefinition.content.push({
		text:
		'\r\nNão considerar efeitos de segunda ordem local para a direção "y". '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	}
	}
	
	
	docDefinition.content.push(
	{
	text:
	'\r\nDeterminação das armaduras (As):'
	+'\r\n' //pula linha
	, bold: true
	, fontSize: 13
	, alignment: 'justify'
	}
	);
	docDefinition.content.push({
		text:
		'\r\n- Determinação dos Adimensionais:'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		image: i14  //IMAGEM ADIMENSIONAIS
		,width: 156
		,height: 36
		, alignment: 'left',
	});
	docDefinition.content.push({
		text:
		'\r\n-Seção no TOPO do  pilar: '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nν = '+Nd+' / ('+hx+' * '+hy+' * '+Fcd.toFixed(2)+') --> ν = '+v.toFixed(2)+''
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nµ,x,topo = '+v.toFixed(2)+' * ('+e1topox.toFixed(2)+' / '+hx+') --> µ,x,topo = '+uxtopo.toFixed(2)+''
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nµ,y,topo = '+v.toFixed(2)+' * ('+e1topoy.toFixed(2)+' / '+hy+') --> µ,x,topo = '+uytopo.toFixed(2)+''
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\n-Seção no MEIO do  pilar: '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nν = '+Nd+' / ('+hx+' * '+hy+' * '+Fcd.toFixed(2)+') --> ν = '+v.toFixed(2)+''
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nµ,x,meio = '+v.toFixed(2)+' * ('+e1centrofinx.toFixed(2)+' / '+hx+') --> µ,x,meio = '+uxmeio.toFixed(2)+''
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nµ,y,meio = '+v.toFixed(2)+' * ('+e1centrofiny.toFixed(2)+' / '+hy+') --> µ,x,topo = '+uymeio.toFixed(2)+''
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\n-Seção na BASE do  pilar: '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nν = '+Nd+' / ('+hx+' * '+hy+' * '+Fcd.toFixed(2)+') --> ν = '+v.toFixed(2)+''
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nµ,x,base = '+v.toFixed(2)+' * ('+e1basex.toFixed(2)+' / '+hx+') --> µ,x,base = '+uxbase.toFixed(2)+''
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nµ,y,base = '+v.toFixed(2)+' * ('+e1basey.toFixed(2)+' / '+hy+') --> µ,x,base = '+uybase.toFixed(2)+''
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		"\r\n-Relação d'/h: "
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		"\r\nd'x/hx = "+dx+" / "+hx+" --> d'x/hx = "+dhx.toFixed(2)+""
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		"\r\nd'y/hy = "+dy+" / "+hy+" --> d'y/hy = "+dhy.toFixed(2)+""
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nApós os dados acima, o usuário, após acessar ábacos de dimensionamento, inseriu a seguinte taxa mecânica de armadura ω = '+omega+'  '
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\n-Cálculo da Área de Aço:'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		image: i15  //IMAGEM AREA DE AÇO
		,width: 68
		,height: 39
		, alignment: 'left',
	});
	docDefinition.content.push({
		text:
		'\r\nAs = ('+omega+' * '+hx+' * '+hy+' * '+Fcd.toFixed(2)+') / 43,48 --> As = '+As.toFixed(2)+' cm²'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\n-TRANSFORMAÇÃO DE "As" EM BARRAS COMERCIAIS:'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nAs,calc = '+As.toFixed(2)+' cm²'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nAs,proj = '+Asproj+' cm² (O usuário inseriu '+numbar+'ø'+diametrolong*10+'mm, sendo que o programa adotou '+numbar/2+' de cada lado, distribuídas ao longo da maior dimensão da seção).'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	
	docDefinition.content.push({ 
image: convertCanvasToImage(myCanvas), //”my canvas” é o nome que você definiu pra tela, anteriormente, na hora que desenhou
width: 500, 
height: 200,
alignment: 'center',
});

	docDefinition.content.push(
	{
	text:
	'\r\nVERIFICAÇÕES NORMATIVAS'
	+'\r\n ' //pula linha
	, color: '#8B1A1A'
	, bold: true
	, fontSize: 16
	, alignment: 'center'
	}
	);
	docDefinition.content.push(
	{
	text:
	'Verificação quanto ao diâmetro da armadura (18.4.2.1 NBR-6118:2014):'
	+'\r\n' //pula linha
	, bold: true
	, fontSize: 13
	, alignment: 'justify'
	}
	);
	docDefinition.content.push({
		image: i6  //IMAGEM VERIFICAÇÃO DOS DIÂMETROS
		,width: 206
		,height: 27
		, alignment: 'left',
	});
docDefinition.content.push({
		text:
		'10mm ≤ '+(diametrolong*10).toFixed(1)+'mm < ('+b*10+' / 8)  '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'10mm ≤ '+(diametrolong*10).toFixed(1)+'mm < '+b*10/8+'mm --> OK!  '
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});
	docDefinition.content.push(
	{
	text:
	'\r\nVerificação quanto à armadura mínima (17.3.5.3.1 NBR-6118:2014):'
	+'\r\n' //pula linha
	, bold: true
	, fontSize: 13
	, alignment: 'justify'
	}
	);
	docDefinition.content.push({
		image: i7  //IMAGEM VERIFICAÇÃO DA ARMADURA MÍNIMA
		,width: 100
		,height: 30
		, alignment: 'left',
	});
	docDefinition.content.push({
		text:
		'As,min = 0,15 * ('+Nd+' / 43,48) ≥ 0,004 * ('+b*h+')'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	if(Asminini<Asminabs) {
		docDefinition.content.push({
		text:
		'As,min = '+Asminini.toFixed(2)+' < '+Asminabs.toFixed(2)+''
		+'\r\n' //pula linha
		, alignment: 'justify'
	});}
	
	else {
		docDefinition.content.push({
		text:
		'As,min = '+Asminini.toFixed(2)+' ≥ '+Asminabs.toFixed(2)+''
		+'\r\n' //pula linha
		, alignment: 'justify'
	});}
		
	docDefinition.content.push({
		text:
		'\r\nAo analizar o intervalo, tem-se o valor de As,min: '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'As,min = '+Asmin+' cm²'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
		docDefinition.content.push({
		text:
		'As,proj = '+Asproj+' cm² > As,min = '+Asmin+' cm²  --> OK!'
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});
	docDefinition.content.push(
	{
	text:
	'\r\nVerificação quanto à armadura máxima (17.3.5.3.2 NBR-6118:2014):'
	+'\r\n' //pula linha
	, bold: true
	, fontSize: 13
	, alignment: 'justify'
	}
	);
	docDefinition.content.push({
		text:
		'\r\nAs,max = 0,08 * Ac = 0,08 * '+b+' * '+h+' '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'As,max = '+Asmax+' cm²'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'As,proj = '+Asproj+' cm² < As,max = '+Asmax+' cm²  --> OK!'
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nO item 9.5.2.1 da NBR-6118:2014, considera como na mesma seção transversal as emendas que se superpões ou cujas extremidades estejam afastadas de menos que 20% do trecho de traspasse. A imagem a seguir representa o explicitado pela normativa: '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	
	docDefinition.content.push({
		image: i19  //IMAGEM traspasse
		,width: 206
		,height: 101
		, alignment: 'center',
	});
	docDefinition.content.push({
		text:
		'\r\nConsiderando que, nas emendas, a taxa de armadura não pode superar 0,08.Ac em uma mesma seção transversal, é possível estabelecer que As,max≤0,04.Ac (pois, na emenda, existem duas barras sobrepostas), desta forma, é necessário verificar a taxa de armadura projetada:'
		+'\r\n' //pula linha 
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nρ,proj = As,proj/Ac = '+Asproj+' / ('+b+' * '+h+') = '+(Asproj/(b*h)).toFixed(2)+' '
		+'\r\n' //pula linha 
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'ρ,proj = '+(Asproj/(b*h)).toFixed(4)+' '+simbolroproj+' 0,04 --> '+textroproj+' '
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});
	docDefinition.content.push(
	{
	text:
	'\r\nVerificação quanto ao diâmetro mínimo da armadura transversal (øt,min) (17.3.5.3.2 NBR-6118:2014):'
	+'\r\n' //pula linha
	, bold: true
	, fontSize: 13
	, alignment: 'left'
	}
	);
	docDefinition.content.push({
		image: i8  //IMAGEM VERIFICAÇÃO DOS DIÂMETROS DE ESTRIBO
		,width: 52
		,height: 32
		, alignment: 'left',
	});
	docDefinition.content.push({
		text:
		'øl / 4 = '+diametrolong+' / 4 = '+(diametrolong*10/4).toFixed(2)+' mm '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nAo analizar o intervalo e os diâmetros comerciais para barras de aço, tem-se o valor de øt,min: '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'øt,min = '+(diamestribo*10).toFixed(2)+' mm'
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});
	docDefinition.content.push(
	{
	text:
	'\r\nVerificação quanto aos espaçamentos mínimos e máximos entre as barras da armadura longitudinal (18.4.2.2 NBR-6118:2014):'
	+'\r\n' //pula linha
	, bold: true
	, fontSize: 13
	, alignment: 'left'
	}
	);
	docDefinition.content.push({
		image: i9  //IMAGEM VERIFICAÇÃO DO ESPAÇAMENTO LIVRE
		,width: 80
		,height: 53
		, alignment: 'left',
	});
	docDefinition.content.push({
		text:
		'øl = '+diametrolong+' cm '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'1,2 * dmax,agregado = 1,2 * '+dmax+' = '+(1.2*dmax).toFixed(2)+' cm '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
docDefinition.content.push({
		text:
		'Ao se analizar o intervalo, tem-se emin,livre = '+eminlivre+' cm'
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nO espaçamento entre barras disponível (e,livre,disp) é: '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
ebarra=(h-2*cobrimento-2*diamestribo-(numbar/2)*diametrolong)/((numbar/2)-1); // calcula o espaçamento entre barras

	docDefinition.content.push({
		text:
		'e,livre,disp = (h - 2c - 2øt - ((num,total,barras)/2) * øl) / [((num,total,barras)/2)-1] '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'e,livre,disp = ('+h+' - 2 * '+cobrimento+' - 2 * '+diamestribo+' - '+numbar/2+' * '+diametrolong+' / ('+numbar/2+' - 1) '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'e,livre,disp = '+ebarra.toFixed(2)+' cm > emin,livre = '+eminlivre+' cm --> OK!'
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});
	docDefinition.content.push({
		image: i10  //IMAGEM VERIFICAÇÃO DO ESPAÇAMENTO ENTRE EIXOS
		,width: 76
		,height: 36
		, alignment: 'left',
	});
	docDefinition.content.push({
		text:
		'2 * b = 2 * '+b+' = '+2*b+' cm '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
docDefinition.content.push({
		text:
		'Ao se analizar o intervalo, tem-se emax,eixos = '+emaxeixo+' cm'
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nO espaçamento disponível entre eixos das barras (e,eixos,disp) é: '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
eeixos=(h-2*cobrimento-2*diamestribo-diametrolong)/((numbar/2)-1); // calcula o espaçamento entre eixos

	docDefinition.content.push({
		text:
		'e,eixos,disp = (h - 2c - 2øt - øl) / [((num,total,barras)/2)-1] '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'e,eixos,disp = ('+h+' - 2 * '+cobrimento+' - 2 * '+diamestribo+' - '+diametrolong+' / ('+numbar/2+' - 1) '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'e,eixos,disp = '+eeixos.toFixed(2)+' cm < emax,eixos = '+emaxeixo+' cm --> OK!'
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});
	docDefinition.content.push(
	{
	text:
	'\r\nVerificação ao espaçamento máximo da armadura transversal (Smax) (18.4.3 NBR-6118:2014):'
	+'\r\n' //pula linha
	, bold: true
	, fontSize: 13
	, alignment: 'justify'
	}
	);
	docDefinition.content.push({
		image: i11  //IMAGEM VERIFICAÇÃO DO ESPAÇAMENTO MÁX ENTRE ESTRIBOS
		,width: 65
		,height: 54
		, alignment: 'left',
	});
	docDefinition.content.push({
		text:
		'b = '+b+' cm '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'12 * øl = 12 * '+diametrolong+' = '+(12*diametrolong).toFixed(2)+' cm '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
docDefinition.content.push({
		text:
		'Ao se analizar o intervalo, tem-se Smax = '+smax+' cm'
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nPortanto, adotar øt = '+diamestribo*10+'mm a cada '+smax+'cm '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push(
	{
	text:
	'\r\nVerificação do CG das armaduras:'
	+'\r\n' //pula linha
	, bold: true
	, fontSize: 13
	, alignment: 'justify'
	}
	);
	docDefinition.content.push({
		text:
		"\r\nd'x,proj = c + øt + øl/2 = "+cobrimento+" + "+diamestribo+" + "+diametrolong+"/2 = "+dlinhareal+" cm "
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		"\r\nd'y,proj = c + øt + øl/2 = "+cobrimento+" + "+diamestribo+" + "+diametrolong+"/2 = "+dlinhareal+" cm "
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	if(dlinhareal>dlinhax) {
		docDefinition.content.push({
		text:
		"\r\nd'x = "+dx+" cm < d'x,proj = "+dlinhareal+" cm --> ATENÇÃO, VERIFICAR ÁBACO!"
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});} 
	else{
	docDefinition.content.push({
		text:
		"\r\nd'x = "+dx+" cm ≥ d'x,proj = "+dlinhareal+" cm --> OK!"
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});}
	if(dlinhareal>dlinhax) {
		docDefinition.content.push({
		text:
		"\r\nd'y = "+dy+" cm < d'y,proj = "+dlinhareal+" cm --> ATENÇÃO, VERIFICAR ÁBACO!"
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});
	}
	else {
		
	docDefinition.content.push({
		text:
		"\r\nd'y = "+dy+" cm ≥ d'y,proj = "+dlinhareal+" cm --> OK!"
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});}
	docDefinition.content.push(
	{
	text:
	'\r\nVerificação quanto a proteção contra a flambagem das barras (18.4.3 NBR 6118:2014):'
	+'\r\n' //pula linha
	, bold: true
	, fontSize: 13
	, alignment: 'justify'
	}
	);
	docDefinition.content.push({
		text:
		'\r\nCada estribo protege uma região de até 20.øt = 20 * '+diamestribo+' = '+20*diamestribo+' cm. '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nA verificação pode ser feita comparando o espaço desprotegido com o e,livre,disp: '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\ne,desprotegido = h - 2 * c - 2 * 20 * øt = '+h+' - 2 * '+cobrimento+' - 2 * 20 * '+diamestribo+' = '+edesprot+' cm '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	
	docDefinition.content.push({
		text:
		'\r\ne,desprotegido = '+edesprot.toFixed(2)+' cm '+simbolprot+' e,livre,disp = '+ebarra.toFixed(2)+' cm --> '+textprot+''
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});
	
	docDefinition.content.push(
	{
	text:
	'\r\nCálculo do comprimento dos arranques no topo do  pilar:'
	+'\r\n' //pula linha
	, bold: true
	, fontSize: 13
	, alignment: 'justify'
	}
	);
	docDefinition.content.push({
		text:
		'\r\nEste é uma passo necessário em situações onde o elemento poderá ter continuação, como em um edifício de vários pavimentos. Cabe ao projetista utilizar os arranques da maneira correta! '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		image: i12  //IMAGEM CALCULO DOS ARRANQUES
		,width: 352
		,height: 48
		, alignment: 'left',
	});
	docDefinition.content.push({
		text:
		'\r\nfctd = (0,21 / 1,4) * ³√('+10*Fck+'²) = '+fctd.toFixed(2)+' MPa'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nPara a obtenção de fbd são sempre considerados barras nervuradas (η1=2,25) em boas condições de aderência (η2=1)! '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nη3 = 1 quando øl < 32mm; Quando øl ≥ 32mm, η3 = (132-øl) / 100. '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nPara o presente caso, tem-se η3 = '+eta3.toFixed(2)+' '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nfbd = 2,25 * 1,0 * '+eta3.toFixed(2)+' * '+fctd.toFixed(2)+' = '+fbd.toFixed(2)+' MPa'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nlb = ('+diametrolong+' / 4) * (434,8 / '+fbd.toFixed(2)+' = '+lbcalc.toFixed(2)+' cm'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\n25*øl = 25 * '+diametrolong+' = '+25*diametrolong+' cm'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nAo analizar o intervalo para o comprimento dos arranques, tem-se: '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nlb = '+lb.toFixed(2)+' cm'
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});
	docDefinition.content.push({
		text:
		'\r\nOBS: Por questões executivas, deve-se sempre adotar um valor para o lb múltiplo de 5 cm. '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	
	docDefinition.content.push({
		text:
		'\r\nApós todas as verificações anteriores, tem-se que todas as verificações normativas foram atendidas!'
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});
	
	docDefinition.content.push(
	{
	text:
	'\r\nResumo de armadura e desenho da seção transversal:'
	+'\r\n' //pula linha
	, bold: true
	, fontSize: 13
	, alignment: 'justify'
	}
	);
	
	docDefinition.content.push({
		text:
		'\r\nTamanho da seção transversal: '+b+' cm x '+h+' cm '
		+'\r\n' //pula linha
		, color: '#008B45'
		, alignment: 'justify'
	});
	
	docDefinition.content.push({
		text:
		'\r\nArmadura Longitudinal = '+Asproj+' cm² ('+numbar+'ø'+diametrolong*10+'mm, sendo '+numbar/2+' de cada lado, distribuídas ao longo da maior dimensão da seção).'
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	
	docDefinition.content.push({
		text:
		'\r\nArmadura Transversal, adotar øt = '+diamestribo*10+'mm a cada '+smax+'cm. Considerar estribos suplementares conforme seção abaixo. '
		+'\r\n' //pula linha
		, alignment: 'justify'
	});
	
	docDefinition.content.push({ 
image: convertCanvasToImage(myCanvas), //”my canvas” é o nome que você definiu pra tela, anteriormente, na hora que desenhou
width: 500, 
height: 200,
alignment: 'center',
});
	

	
	docDefinition.content.push(
	{
	text:
	'\r\n\r\nReferências bibliográficas'
	+'\r\n ' //pula linha
	, bold: true
	, fontSize: 13
	, alignment: 'left'
	}
	);
	docDefinition.content.push({
		text:[
		'Associação Brasileira de Normas Técnicas (ABNT). NBR 6118 – ',
		{text:'Projeto de estruturas de concreto – Procedimento', bold: true, alignment: 'left'},
		'. Rio de Janeiro. Abnt. 2014. 256 p.'
		]
	});
	docDefinition.content.push({
		text:[
		'\r\nBastos, P. S. S., ',
		{text:'Pilares de Concreto', bold: true, alignment: 'left'},
		'. Notas de Aula, Curso de Engenharia Civil, Universidade Estadual Paulista, Departamento de Engenharia Civil, Bauru, 2015.'
		]
	});
	docDefinition.content.push({
		text:[
		'\r\nScadelai, M. A. ',
		{text:'Dimensionamento de Pilares de Acordo com a NBR 6118', bold: true, alignment: 'left'},
		'. Escola de Engenharia de São Carlos, Departamento de Estruturas, 2004.'
		]
	});
	
}
//RELATÓRIO 

//DESENHO DA SEÇÃO
function desenhosecao () {

//iniciar  tela
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

//origem: canto superior esquerdo, pra baixo e pra direita positivo x,y

if(hy>hx) { //DEFINIÇÃO DA ESCALA DO DESENHO
	sc=160/hy;
}
else {
	sc=460/hx;
}
	
	hxde=hx*sc;
	hyde=hy*sc;
	cobrimentode=cobrimento*sc;
	diamestribode=diamestribo*sc;
	diametrolongde=diametrolong*sc;
	eeixosde=eeixos*sc;
	ebarrade=ebarra*sc;
	
	//cria uma linha -- BORDO SUPERIOR
ctx.beginPath();
ctx.strokeStyle = '#000000'; //cor preta
ctx.lineWidth = 2; //espessura 2
ctx.moveTo((250-hxde/2), (100-hyde/2)); //coordenada local (dentro da área delimitada); cresce x direita e y para baixo
ctx.lineTo((250+hxde/2), (100-hyde/2)); 
ctx.stroke();

//cria uma linha -- BORDO INFERIOR
ctx.beginPath();
ctx.strokeStyle = '#000000'; //cor preta
ctx.lineWidth = 2; //espessura 2
ctx.moveTo((250-hxde/2), (100+hyde/2)); //coordenada local (dentro da área delimitada); cresce x direita e y para baixo
ctx.lineTo((250+hxde/2), (100+hyde/2)); 
ctx.stroke();

//cria uma linha -- BORDO ESQUERDO
ctx.beginPath();
ctx.strokeStyle = '#000000'; //cor preta
ctx.lineWidth = 2; //espessura 2
ctx.moveTo((250-hxde/2), (100-hyde/2)); //coordenada local (dentro da área delimitada); cresce x direita e y para baixo
ctx.lineTo((250-hxde/2), (100+hyde/2)); 
ctx.stroke();

//cria uma linha -- BORDO DIREITO
ctx.beginPath();
ctx.strokeStyle = '#000000'; //cor preta
ctx.lineWidth = 2; //espessura 2
ctx.moveTo((250+hxde/2), (100-hyde/2)); //coordenada local (dentro da área delimitada); cresce x direita e y para baixo
ctx.lineTo((250+hxde/2), (100+hyde/2)); 
ctx.stroke();

if(hxde<hyde) {
//barras da armadura longitudinal SE hxde<hyde 
			var j=0;
			for(var i=0; i<(numbar/2);i++){ 
				//cria um círculo -- BORDO ESQUERDO
ctx.beginPath();
ctx.strokeStyle = '#000000'; //cor preta
ctx.lineWidth = 2; //espessura 2
ctx.strokeStyle="black"; //linha 
ctx.arc(cobrimentode+diamestribode+(diametrolongde/2)+250-(hxde/2),cobrimentode+diamestribode+(diametrolongde/2)+j+100-(hyde/2),diametrolongde,0,2*Math.PI);
ctx.fill();
ctx.stroke();
				//fim cria um círculo
				
				//cria um círculo -- BORDO DIREITO
ctx.beginPath();
ctx.strokeStyle = '#000000'; //cor preta
ctx.lineWidth = 2; //espessura 2
ctx.strokeStyle="black"; //linha 
ctx.arc((-cobrimentode)-diamestribode-(diametrolongde/2)+250+(hxde/2),cobrimentode+diamestribode+(diametrolongde/2)+j+100-(hyde/2),diametrolongde,0,2*Math.PI);
ctx.fill();
ctx.stroke();
				//fim cria um círculo
j = j+eeixosde;
			}
}
else {
	//barras da armadura longitudinal SE hxde>hyde 
			var j=0;
			for(var i=0; i<(numbar/2);i++){ 
				//cria um círculo -- BORDO SUPERIOR
ctx.beginPath();
ctx.strokeStyle = '#000000'; //cor preta
ctx.lineWidth = 1; //espessura 2
ctx.strokeStyle="black"; //linha 
ctx.arc(cobrimentode+diamestribode+(diametrolongde/2)+250-(hxde/2)+j,cobrimentode+diamestribode+(diametrolongde/2)+100-(hyde/2),diametrolongde,0,2*Math.PI);
ctx.fill();
ctx.stroke();
				//fim cria um círculo
				
				//cria um círculo -- BORDO INFERIOR
ctx.beginPath();
ctx.strokeStyle = '#000000'; //cor preta
ctx.lineWidth = 1; //espessura 2
ctx.strokeStyle="black"; //linha 
ctx.arc(cobrimentode+diamestribode+(diametrolongde/2)+250-(hxde/2)+j,(-cobrimentode)-diamestribode-(diametrolongde/2)+100+(hyde/2),diametrolongde,0,2*Math.PI);
ctx.fill();
ctx.stroke();
				//fim cria um círculo
j = j+eeixosde;
			}
}

// INÍCIO DESENHO DO ESTRIBO PRINCIPAL
//cria uma linha -- BORDO SUPERIOR ESTRIBO PRINCIPAL
ctx.beginPath();
ctx.strokeStyle = '#000000'; //cor preta
ctx.lineWidth = 1; //espessura 1
ctx.moveTo((250-hxde/2+cobrimentode), (100-hyde/2+cobrimentode)); //coordenada local (dentro da área delimitada); cresce x direita e y para baixo
ctx.lineTo((250+hxde/2-cobrimentode), (100-hyde/2+cobrimentode)); 
ctx.stroke();

//cria uma linha -- BORDO INFERIOR ESTRIBO PRINCIPAL
ctx.beginPath();
ctx.strokeStyle = '#000000'; //cor preta
ctx.lineWidth = 1; //espessura 1
ctx.moveTo((250-hxde/2+cobrimentode), (100+hyde/2-cobrimentode)); //coordenada local (dentro da área delimitada); cresce x direita e y para baixo
ctx.lineTo((250+hxde/2-cobrimentode), (100+hyde/2-cobrimentode)); 
ctx.stroke();

//cria uma linha -- BORDO ESQUERDO ESTRIBO PRINCIPAL
ctx.beginPath();
ctx.strokeStyle = '#000000'; //cor preta
ctx.lineWidth = 1; //espessura 1
ctx.moveTo((250-hxde/2+cobrimentode), (100-hyde/2+cobrimentode)); //coordenada local (dentro da área delimitada); cresce x direita e y para baixo
ctx.lineTo((250-hxde/2+cobrimentode), (100+hyde/2-cobrimentode)); 
ctx.stroke();

//cria uma linha -- BORDO DIREITO ESTRIBO PRINCIPAL
ctx.beginPath();
ctx.strokeStyle = '#000000'; //cor preta
ctx.lineWidth = 1; //espessura 1
ctx.moveTo((250+hxde/2-cobrimentode), (100-hyde/2+cobrimentode)); //coordenada local (dentro da área delimitada); cresce x direita e y para baixo
ctx.lineTo((250+hxde/2-cobrimentode), (100+hyde/2-cobrimentode)); 
ctx.stroke();

	// INÍCIO DESENHO DOS ESTRIBOS SUPLEMENTARES
y=diamestribode+cobrimentode+barprot*diametrolongde+barprot*ebarrade;
if(hyde>hxde) {
	for (var g=0; g<((numbar/2)-2*barprot); g++) {
//cria uma linha --
ctx.beginPath();
ctx.strokeStyle = '#000000'; //cor preta
ctx.lineWidth = 1; //espessura 2
ctx.moveTo((250-hxde/2+(cobrimentode+diamestribode+(diametrolongde/2))), (100-hyde/2+y)); //coordenada local (dentro da área delimitada); cresce x direita e y para baixo
ctx.lineTo((250+hxde/2-(cobrimentode+diamestribode+(diametrolongde/2))), (100-hyde/2+y+(1*diametrolongde))); 
ctx.stroke();
	y=(y+ebarrade+(1*diametrolongde));
	}
}
else {
		for (var g=0; g<((numbar/2)-2*barprot); g++) {
//cria uma linha -- 
ctx.beginPath();
ctx.strokeStyle = '#000000'; //cor preta
ctx.lineWidth = 1; //espessura 2
ctx.moveTo((250-hxde/2+y), (100-hyde/2+(cobrimentode+diamestribode+(diametrolongde/2)))); //coordenada local (dentro da área delimitada); cresce x direita e y para baixo
ctx.lineTo((250-hxde/2)+y+(1*diametrolongde), (100+hyde/2-(cobrimentode+diamestribode+(diametrolongde/2)))); 
ctx.stroke();
	y=(y+ebarrade+(1*diametrolongde));
	}
}

ctx.font="16px Arial";
ctx.fillText("Seção Transversal",20,20);



}
//FIM DESENHO DA SEÇÃO
	

//LIMPAR TELA
function fclearcanvas () {
var c = document.getElementById("myCanvas");
c.width = 500; <!--tamanho da tela em x-->
c.height = 200; <!--tamanho da tela em y-->
}
//FIM LIMPAR TELA

// Converte canvas para uma imagem
function convertCanvasToImage(canvas) {
	var simage=canvas.toDataURL("image/png");
	return simage;
}


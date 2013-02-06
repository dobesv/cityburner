
try{

if (Elm.Main) throw new Error("Module name collision, 'Main' is already defined."); 
Elm.Main=function(){
 var $op={};
 for(Elm['i'] in Elm){eval('var '+Elm['i']+'=Elm[Elm.i];');}
 try{
  if (!(Elm.Prelude instanceof Object)) throw new Error('module not found');
 } catch(e) {
  throw new Error("Module 'Prelude' is missing. Compile with --make flag or load missing module in a separate JavaScript file.");
 }
 var hiddenVars={};
 for (Elm['i'] in Elm.Prelude) {
  if (hiddenVars[Elm['i']]) continue;
  eval('var ' + Elm['i'] + ' = Elm.Prelude[Elm.i];');}
 try{
  if (!(Elm.Automaton instanceof Object)) throw new Error('module not found');
 } catch(e) {
  throw new Error("Module 'Automaton' is missing. Compile with --make flag or load missing module in a separate JavaScript file.");
 }
 var init$=Elm.Automaton.init$;
 try{
  if (!(Elm.JavaScript instanceof Object)) throw new Error('module not found');
 } catch(e) {
  throw new Error("Module 'JavaScript' is missing. Compile with --make flag or load missing module in a separate JavaScript file.");
 }
 var hiddenVars={};
 for (Elm['i'] in Elm.JavaScript) {
  if (hiddenVars[Elm['i']]) continue;
  eval('var ' + Elm['i'] + ' = Elm.JavaScript[Elm.i];');}
 try{
  if (!(Elm.JavaScript.Experimental instanceof Object)) throw new Error('module not found');
 } catch(e) {
  throw new Error("Module 'JavaScript.Experimental' is missing. Compile with --make flag or load missing module in a separate JavaScript file.");
 }
 var hiddenVars={};
 for (Elm['i'] in Elm.JavaScript.Experimental) {
  if (hiddenVars[Elm['i']]) continue;
  eval('var ' + Elm['i'] + ' = Elm.JavaScript.Experimental[Elm.i];');}
 var jsRobotAnimation_0=Elm.Signal.constant(castElementToJSElement(spacer(0)(0)));
 Value.addListener(document, 'provideRobotAnimation', function(e) { Dispatcher.notify(jsRobotAnimation_0.id, e.value); });
 function headMaybe_2(lst_43){
  return function(){
  switch(lst_43[0]){
   case 'Cons':
   return Just(lst_43[1]);
   case 'Nil':
   return Nothing;
  }
  throw new Error("Non-exhaustive pattern match in case expression (Line 13, Column 5)");}();}
 function nthMaybe_3(n_46){
  return function(lst_47){
   return function(){
   switch(lst_47[0]){
    case 'Cons':
    return (eq(n_46,0)?Just(lst_47[1]):nthMaybe_3((n_46-1))(lst_47[2]));
    case 'Nil':
    return Nothing;
   }
   throw new Error("Non-exhaustive pattern match in case expression (Line 20, Column 5)");}();};}
 function nth_4(n_50){
  return function(lst_51){
   return head(drop(n_50)(lst_51));};}
 function takeWhile_5(p_52){
  return function(lst_53){
   return function(){
   switch(lst_53[0]){
    case 'Cons':
    return (p_52(lst_53[1])?['Cons',lst_53[1],takeWhile_5(p_52)(lst_53[2])]:['Nil']);
    case 'Nil':
    return ['Nil'];
   }
   throw new Error("Non-exhaustive pattern match in case expression (Line 31, Column 5)");}();};}
 function dropWhile_6(p_56){
  return function(lst_57){
   return function(){
   switch(lst_57[0]){
    case 'Cons':
    return (p_56(lst_57[1])?dropWhile_6(p_56)(lst_57[2]):lst_57);
    case 'Nil':
    return ['Nil'];
   }
   throw new Error("Non-exhaustive pattern match in case expression (Line 38, Column 5)");}();};}
 $op['>>>'] = function(f_60){
  return function(g_61){
   return function(x){
    return g_61(f_60(x));};};};
 $op['|>'] = function(x_62){
  return function(g_63){
   return g_63(x_62);};};
 function half_7(x_64){
  return div(x_64)(2);}
 function cropImage_8(url_65){
  return function(origWidth_66){
   return function(origHeight_67){
    return function(left_68){
     return function(top_69){
      return function(width_70){
       return function(height_71){
        return collage(width_70)(height_71)(['Cons',sprite(url_65)(origWidth_66)(origHeight_67)(['Tuple2',(div(origWidth_66)(2)-left_68),(div(origHeight_67)(2)-top_69)]),['Nil']]);};};};};};};}
 function crop_9(element_72){
  return function(left_73){
   return function(top_74){
    return function(width_75){
     return function(height_76){
      return function(){
       var eltWidth_77=widthOf(element_72);
       var eltHeight_78=heightOf(element_72);
       return collage(width_75)(height_76)(['Cons',toForm(['Tuple2',(div(eltWidth_77)(2)-left_73),(div(eltHeight_78)(2)-top_74)])(element_72),['Nil']]);}();};};};};}
 function bldg_11(_0_79){
  return function(){
  switch(_0_79[0]){
   case 'Tuple5':
   return {
     height : [_0_79[4]],
     hitMask : [move((0-_0_79[1]))((0-_0_79[2]))(filled(green)(polygon(_0_79[5])(['Tuple2',0,0])))],
     image : [cropImage_8(function(r){
    return '_' in r ? r.src[0] : r.src;}(bldgSheet_10))(function(r){
    return '_' in r ? r.width[0] : r.width;}(bldgSheet_10))(function(r){
    return '_' in r ? r.height[0] : r.height;}(bldgSheet_10))(_0_79[1])(_0_79[2])(_0_79[3])(_0_79[4])],
     width : [_0_79[3]],
     _ : true};
  }
  throw new Error("Non-exhaustive pattern match in case expression (Line 73, Column 4)");}();}
 function firePolygon_31(x_88){
  return function(y_89){
   return function(scale_90){
    return function(){
     var n_91=div((x_88+y_89))(10);
     function firePolys_92(n_93){
      return function(angle_94){
       return (function() { var ord = compare(angle_94)((2*pi))[0]; return ord==='GT' || ord==='EQ'; }()?['Nil']:function(){
        var r_95=(nth_4(mod(n_93)(firePatternLength_28))(firePattern_27)*scale_90);
        var dx_96=(cos(angle_94)*r_95);
        var dy_97=(sin(angle_94)*r_95);
        var deltaAngle_98=nth_4(mod(n_93)(fireAnglesLength_30))(fireAngles_29);
        return ['Cons',['Tuple2',dx_96,dy_97],firePolys_92((1+n_93))((angle_94+deltaAngle_98))];}());};}
     return filled(fireRed_34)(polygon(firePolys_92(n_91)(0))(['Tuple2',x_88,y_89]));}();};};}
 function nthBuilding_32(n_99){
  return function(){
  var case18=nthMaybe_3(mod(n_99)(bldgCount_25))(bldgs_24);
  switch(case18[0]){
   case 'Just':
   return case18[1];
   case 'Nothing':
   return head(bldgs_24);
  }
  throw new Error("Non-exhaustive pattern match in case expression (Line 119, Column 17)");}();}
 function updateGame_35(input_101){
  return function(oldState_102){
   return function(){
    var _0_116=input_101;
    var t_104=function(r){
     return '_' in r ? r.t[0] : r.t;}(_0_116);
    var mouseDown_105=function(r){
     return '_' in r ? r.mouseDown[0] : r.mouseDown;}(_0_116);
    var mousePosition_106=function(r){
     return '_' in r ? r.mousePosition[0] : r.mousePosition;}(_0_116);
    var oldFires_107=function(r){
     return '_' in r ? r.oldFires[0] : r.oldFires;}(oldState_102);
    var robotElt_108=function(r){
     return '_' in r ? r.robot[0] : r.robot;}(function(r){
     return '_' in r ? r.jselts[0] : r.jselts;}(input_101));
    var _0_116=mousePosition_106;
    var mouseX_110=function(){
    switch(_0_116[0]){
     case 'Tuple2':
     return _0_116[1];
    }
    throw new Error("Non-exhaustive pattern match in case expression (Line 138, Column 28)");}();
    var mouseY_111=function(){
    switch(_0_116[0]){
     case 'Tuple2':
     return _0_116[2];
    }
    throw new Error("Non-exhaustive pattern match in case expression (Line 138, Column 28)");}();
    var gameWidth_112=1024;
    var gameHeight_113=630;
    var speed_114=0.15;
    var distanceTravelled_115=truncate((t_104*speed_114));
    var _0_116=function(){
     var currentLoopX_141=mod(distanceTravelled_115)(allBldgsWidth_26);
     function buildingsOnScreen_142(loopX_143){
      return function(bX_144){
       return function(bs_145){
        return function(n_146){
         return ((compare((bX_144-loopX_143))(gameWidth_112)[0] === 'GT')?['Tuple2',['Nil'],['Nil']]:function(){
         switch(bs_145[0]){
          case 'Cons':
          return function(){
           var rest_149=buildingsOnScreen_142(loopX_143)((bX_144+function(r){
            return '_' in r ? r.width[0] : r.width;}(bs_145[1])))(bs_145[2])(n_146);
           return ((compare((bX_144+function(r){
            return '_' in r ? r.width[0] : r.width;}(bs_145[1])))(loopX_143)[0] === 'LT')?rest_149:function(){
            var bldgLeft_150=(bX_144-loopX_143);
            var bldgTop_151=(gameHeight_113-function(r){
             return '_' in r ? r.height[0] : r.height;}(bs_145[1]));
            var form_152=toForm(['Tuple2',(bldgLeft_150+half_7(function(r){
             return '_' in r ? r.width[0] : r.width;}(bs_145[1]))),(bldgTop_151+half_7(function(r){
             return '_' in r ? r.height[0] : r.height;}(bs_145[1])))])(function(r){
             return '_' in r ? r.image[0] : r.image;}(bs_145[1]));
            var hitMask_153=move(bldgLeft_150)(bldgTop_151)(function(r){
             return '_' in r ? r.hitMask[0] : r.hitMask;}(bs_145[1]));
            return ['Tuple2',['Cons',form_152,fst(rest_149)],['Cons',hitMask_153,snd(rest_149)]];}());}();
          case 'Nil':
          return ((compare(n_146)(10)[0] === 'LT')?buildingsOnScreen_142(loopX_143)(bX_144)(bldgs_24)((1+n_146)):['Tuple2',['Nil'],['Nil']]);
         }
         throw new Error("Non-exhaustive pattern match in case expression (Line 147, Column 26)");}());};};};}
     return buildingsOnScreen_142(currentLoopX_141)(0)(bldgs_24)(1);}();
    var cityShapes_117=function(){
    switch(_0_116[0]){
     case 'Tuple2':
     return _0_116[1];
    }
    throw new Error("Non-exhaustive pattern match in case expression (Line 144, Column 13)");}();
    var cityHitMasks_118=function(){
    switch(_0_116[0]){
     case 'Tuple2':
     return _0_116[2];
    }
    throw new Error("Non-exhaustive pattern match in case expression (Line 144, Column 13)");}();
    var headCenter_119=['Tuple2',292,410];
    var monsterShapes_120=['Cons',robotElt_108,['Nil']];
    var laserShapes_121=(mouseDown_105?function(){
     var dx_158=(fst(mousePosition_106)-fst(headCenter_119));
     var dy_159=(snd(mousePosition_106)-snd(headCenter_119));
     var dist_160=sqrt(((dx_158*dx_158)+(dy_159*dy_159)));
     var angle_161=atan2(dy_159)(dx_158);
     var mx_162=cos((angle_161+(pi/2)));
     var my_163=sin((angle_161+(pi/2)));
     var size_164=10;
     var p1_165=['Tuple2',(size_164*mx_162),(size_164*my_163)];
     var p2_166=['Tuple2',(0-(size_164*mx_162)),(0-(size_164*my_163))];
     return ['Cons',filled(fireRed_34)(polygon(['Cons',p1_165,['Cons',['Tuple2',0,0],['Cons',p2_166,['Cons',['Tuple2',dx_158,dy_159],['Nil']]]]])(headCenter_119)),['Cons',filled(fireRed_34)(circle(size_164)(headCenter_119)),['Nil']]];}():['Nil']);
    var oldVisibleFires_125=filter(fireVisible_123)(oldFires_107);
    var newFire_126={
      since : [t_104],
      worldX : [(mouseX_110+distanceTravelled_115)],
      worldY : [mouseY_111],
      _ : true};
    var mouseOverBuilding_127=any(isWithin(mousePosition_106))(cityHitMasks_118);
    var mouseOverFire_128=any(isWithin(mousePosition_106))(map(fireShape_124)(oldVisibleFires_125));
    var timeSinceLastFire_129=function(){
    switch(oldFires_107[0]){
     case 'Cons':
     return (t_104-function(r){
      return '_' in r ? r.since[0] : r.since;}(oldFires_107[1]));
     case 'Nil':
     return 1000;
    }
    throw new Error("Non-exhaustive pattern match in case expression (Line 186, Column 29)");}();
    var newFires_130=((mouseDown_105&&(mouseOverBuilding_127&&(not(mouseOverFire_128)&&(compare(timeSinceLastFire_129)(333)[0] === 'GT'))))?['Cons',newFire_126,oldVisibleFires_125]:oldVisibleFires_125);
    var newState_131={
      oldFires : [newFires_130],
      _ : true};
    var fireShapes_132=map(fireShape_124)(newFires_130);
    var shapes_133=Value.append(monsterShapes_120,Value.append(laserShapes_121,Value.append(cityShapes_117,fireShapes_132)));
    var gameView_134=collage(gameWidth_112)(gameHeight_113)(shapes_133);
    var newView_136=gameView_134;
    function fireRadius_122(since_167){
     return (sqrt((t_104-since_167))*speed_114);}
    function fireVisible_123(_0_168){
     return function(){
      var worldX_169=function(r){
       return '_' in r ? r.worldX[0] : r.worldX;}(_0_168);
      var since_170=function(r){
       return '_' in r ? r.since[0] : r.since;}(_0_168);
      return (compare(worldX_169)((distanceTravelled_115-fireRadius_122(since_170)))[0] === 'GT');}();}
    function fireShape_124(_0_171){
     return function(){
      var worldX_172=function(r){
       return '_' in r ? r.worldX[0] : r.worldX;}(_0_171);
      var worldY_173=function(r){
       return '_' in r ? r.worldY[0] : r.worldY;}(_0_171);
      var since_174=function(r){
       return '_' in r ? r.since[0] : r.since;}(_0_171);
      return function(){
       var radius_175=fireRadius_122(since_174);
       var x_176=(worldX_172-distanceTravelled_115);
       return firePolygon_31(x_176)(worldY_173)(radius_175);}();}();}
    function debugView_135(_0_179){
     return function(){
     switch(_0_179[0]){
      case 'Tuple0':
      return function(){
       var debugTextView_180=$op['>>>'](show)($op['>>>'](toText)($op['>>>'](Text.color(green))($op['>>>'](Text.monospace)(Graphics.text))));
       var views_181=['Cons',debugTextView_180(input_101),['Cons',debugTextView_180(oldState_102),['Cons',debugTextView_180(newState_131),['Cons',debugTextView_180(bldgs_24),['Nil']]]]];
       return flow(down)(views_181);}();
     }
     throw new Error("Non-exhaustive pattern match in case expression (Line 200, Column 13)");}();}
    return ['Tuple2',newView_136,newState_131];}();};}
 function mkjselts_36(r_182){
  return {
    robot : [r_182],
    _ : true};}
 function mkinput_38(t_183){
  return function(mouseDown_184){
   return function(mousePosition_185){
    return function(jselts_186){
     return function(){
      var r_187={
        jselts : [jselts_186],
        mouseDown : [mouseDown_184],
        mousePosition : [mousePosition_185],
        t : [t_183],
        _ : true};
      return r_187;}();};};};}
 var robotAnimation_1=lift(castJSElementToElement(262)(373))(jsRobotAnimation_0);
 var bldgSheet_10={
   height : [400],
   src : [Value.str('images/CityBurner_Buildings_V2.png')],
   width : [1800],
   _ : true};
 var b1_12=['Tuple5',0,249,141,151,['Cons',['Tuple2',3,398],['Cons',['Tuple2',4,325],['Cons',['Tuple2',13,320],['Cons',['Tuple2',13,293],['Cons',['Tuple2',96,294],['Cons',['Tuple2',94,308],['Cons',['Tuple2',112,320],['Cons',['Tuple2',112,340],['Cons',['Tuple2',138,341],['Cons',['Tuple2',137,399],['Nil']]]]]]]]]]]];
 var b2_13=['Tuple5',178,61,86,339,['Cons',['Tuple2',180,400],['Cons',['Tuple2',180,193],['Cons',['Tuple2',190,189],['Cons',['Tuple2',190,149],['Cons',['Tuple2',203,139],['Cons',['Tuple2',203,118],['Cons',['Tuple2',240,118],['Cons',['Tuple2',241,149],['Cons',['Tuple2',260,150],['Cons',['Tuple2',262,194],['Cons',['Tuple2',262,400],['Nil']]]]]]]]]]]]];
 var b3_14=['Tuple5',307,204,120,196,['Cons',['Tuple2',310,400],['Cons',['Tuple2',310,299],['Cons',['Tuple2',342,268],['Cons',['Tuple2',342,229],['Cons',['Tuple2',348,229],['Cons',['Tuple2',349,214],['Cons',['Tuple2',366,209],['Cons',['Tuple2',388,220],['Cons',['Tuple2',390,226],['Cons',['Tuple2',403,227],['Cons',['Tuple2',404,233],['Cons',['Tuple2',411,243],['Cons',['Tuple2',424,250],['Cons',['Tuple2',421,259],['Cons',['Tuple2',425,265],['Cons',['Tuple2',425,400],['Nil']]]]]]]]]]]]]]]]]];
 var b4_15=['Tuple5',479,186,86,214,['Cons',['Tuple2',483,400],['Cons',['Tuple2',486,226],['Cons',['Tuple2',507,197],['Cons',['Tuple2',557,214],['Cons',['Tuple2',557,286],['Cons',['Tuple2',560,286],['Cons',['Tuple2',561,400],['Nil']]]]]]]]];
 var b5_16=['Tuple5',632,232,86,168,['Cons',['Tuple2',634,400],['Cons',['Tuple2',634,255],['Cons',['Tuple2',643,251],['Cons',['Tuple2',643,237],['Cons',['Tuple2',655,237],['Cons',['Tuple2',663,247],['Cons',['Tuple2',709,242],['Cons',['Tuple2',714,400],['Nil']]]]]]]]]];
 var b6_17=['Tuple5',782,285,74,115,['Cons',['Tuple2',784,400],['Cons',['Tuple2',784,295],['Cons',['Tuple2',854,295],['Cons',['Tuple2',853,400],['Nil']]]]]];
 var b7_18=['Tuple5',904,322,143,78,['Cons',['Tuple2',906,400],['Cons',['Tuple2',906,338],['Cons',['Tuple2',926,324],['Cons',['Tuple2',951,339],['Cons',['Tuple2',951,388],['Cons',['Tuple2',957,388],['Cons',['Tuple2',957,338],['Cons',['Tuple2',992,323],['Cons',['Tuple2',1013,337],['Cons',['Tuple2',1036,331],['Cons',['Tuple2',1046,340],['Cons',['Tuple2',1045,400],['Nil']]]]]]]]]]]]]];
 var b8_19=['Tuple5',1057,8,120,392,['Cons',['Tuple2',1059,400],['Cons',['Tuple2',1059,221],['Cons',['Tuple2',1065,221],['Cons',['Tuple2',1066,175],['Cons',['Tuple2',1073,174],['Cons',['Tuple2',1073,163],['Cons',['Tuple2',1086,152],['Cons',['Tuple2',1086,124],['Cons',['Tuple2',1091,120],['Cons',['Tuple2',1092,101],['Cons',['Tuple2',1099,100],['Cons',['Tuple2',1111,80],['Cons',['Tuple2',1113,9],['Cons',['Tuple2',1117,81],['Cons',['Tuple2',1128,99],['Cons',['Tuple2',1137,99],['Cons',['Tuple2',1145,109],['Cons',['Tuple2',1145,131],['Cons',['Tuple2',1153,132],['Cons',['Tuple2',1157,136],['Cons',['Tuple2',1160,145],['Cons',['Tuple2',1161,161],['Cons',['Tuple2',1172,161],['Cons',['Tuple2',1173,179],['Cons',['Tuple2',1173,400],['Nil']]]]]]]]]]]]]]]]]]]]]]]]]]];
 var b9_20=['Tuple5',1206,228,133,172,['Cons',['Tuple2',1208,400],['Cons',['Tuple2',1210,243],['Cons',['Tuple2',1234,243],['Cons',['Tuple2',1234,229],['Cons',['Tuple2',1245,229],['Cons',['Tuple2',1244,241],['Cons',['Tuple2',1329,244],['Cons',['Tuple2',1333,400],['Nil']]]]]]]]]];
 var ba_21=['Tuple5',1374,25,90,375,['Cons',['Tuple2',1376,400],['Cons',['Tuple2',1376,299],['Cons',['Tuple2',1382,270],['Cons',['Tuple2',1383,166],['Cons',['Tuple2',1386,166],['Cons',['Tuple2',1386,136],['Cons',['Tuple2',1409,89],['Cons',['Tuple2',1414,86],['Cons',['Tuple2',1415,25],['Cons',['Tuple2',1423,87],['Cons',['Tuple2',1433,87],['Cons',['Tuple2',1440,122],['Cons',['Tuple2',1445,122],['Cons',['Tuple2',1462,197],['Cons',['Tuple2',1462,209],['Cons',['Tuple2',1457,214],['Cons',['Tuple2',1457,263],['Cons',['Tuple2',1462,267],['Cons',['Tuple2',1462,290],['Cons',['Tuple2',1457,296],['Cons',['Tuple2',1458,348],['Cons',['Tuple2',1463,351],['Cons',['Tuple2',1463,400],['Nil']]]]]]]]]]]]]]]]]]]]]]]]];
 var bb_22=['Tuple5',1504,294,140,106,['Cons',['Tuple2',1509,400],['Cons',['Tuple2',1509,337],['Cons',['Tuple2',1513,337],['Cons',['Tuple2',1515,317],['Cons',['Tuple2',1576,313],['Cons',['Tuple2',1579,316],['Cons',['Tuple2',1579,357],['Cons',['Tuple2',1583,355],['Cons',['Tuple2',1586,319],['Cons',['Tuple2',1630,318],['Cons',['Tuple2',1630,337],['Cons',['Tuple2',1641,336],['Cons',['Tuple2',1641,400],['Nil']]]]]]]]]]]]]]];
 var bc_23=['Tuple5',1656,324,134,76,['Cons',['Tuple2',1660,400],['Cons',['Tuple2',1660,368],['Cons',['Tuple2',1667,362],['Cons',['Tuple2',1665,341],['Cons',['Tuple2',1687,326],['Cons',['Tuple2',1704,342],['Cons',['Tuple2',1724,328],['Cons',['Tuple2',1746,342],['Cons',['Tuple2',1762,325],['Cons',['Tuple2',1785,343],['Cons',['Tuple2',1785,400],['Nil']]]]]]]]]]]]];
 var bldgs_24=map(bldg_11)(['Cons',b1_12,['Cons',b2_13,['Cons',b3_14,['Cons',b4_15,['Cons',b5_16,['Cons',b6_17,['Cons',b7_18,['Cons',b8_19,['Cons',b9_20,['Cons',ba_21,['Cons',bb_22,['Cons',bc_23,['Nil']]]]]]]]]]]]]);
 var bldgCount_25=length(bldgs_24);
 var allBldgsWidth_26=foldr(function(bldg_85){
  return function(w_86){
   return (function(r){
    return '_' in r ? r.width[0] : r.width;}(bldg_85)+w_86);};})(0)(bldgs_24);
 var firePattern_27=['Cons',9,['Cons',3,['Cons',10,['Cons',2,['Cons',7,['Cons',2,['Cons',8,['Cons',2,['Cons',6,['Cons',1,['Cons',4,['Cons',1,['Cons',9,['Cons',2,['Cons',6,['Cons',1,['Cons',8,['Cons',3,['Cons',7,['Cons',1,['Nil']]]]]]]]]]]]]]]]]]]]];
 var firePatternLength_28=length(firePattern_27);
 var fireAngles_29=map(function(a_87){
  return ((a_87*4.0e-2)*pi);})(['Cons',4,['Cons',7,['Cons',2,['Cons',9,['Cons',5,['Cons',4,['Cons',3,['Cons',5,['Cons',3,['Cons',2,['Cons',4,['Cons',2,['Cons',3,['Cons',1,['Cons',9,['Cons',4,['Cons',2,['Cons',5,['Cons',1,['Cons',4,['Cons',3,['Cons',2,['Nil']]]]]]]]]]]]]]]]]]]]]]]);
 var fireAnglesLength_30=length(fireAngles_29);
 var laserRed_33=rgba(200)(50)(50)(0.75);
 var fireRed_34=rgba(200)(50)(50)(0.3);
 var jselts_37=lift(mkjselts_36)(robotAnimation_1);
 var input_39=lift4(mkinput_38)(every(0.1))(Mouse.isDown)(Mouse.position)(jselts_37);
 var startState_40={
   oldFires : [['Nil']],
   _ : true};
 var gameAutomaton_41=init$(startState_40)(updateGame_35);
 var main_42=Automaton.run(gameAutomaton_41)(input_39);
 return {$op : {'>>>' : $op['>>>'], '|>' : $op['|>']},
 jsRobotAnimation:jsRobotAnimation_0,
 robotAnimation:robotAnimation_1,
 headMaybe:headMaybe_2,
 nthMaybe:nthMaybe_3,
 nth:nth_4,
 takeWhile:takeWhile_5,
 dropWhile:dropWhile_6,
 half:half_7,
 cropImage:cropImage_8,
 crop:crop_9,
 bldgSheet:bldgSheet_10,
 bldg:bldg_11,
 b1:b1_12,
 b2:b2_13,
 b3:b3_14,
 b4:b4_15,
 b5:b5_16,
 b6:b6_17,
 b7:b7_18,
 b8:b8_19,
 b9:b9_20,
 ba:ba_21,
 bb:bb_22,
 bc:bc_23,
 bldgs:bldgs_24,
 bldgCount:bldgCount_25,
 allBldgsWidth:allBldgsWidth_26,
 firePattern:firePattern_27,
 firePatternLength:firePatternLength_28,
 fireAngles:fireAngles_29,
 fireAnglesLength:fireAnglesLength_30,
 firePolygon:firePolygon_31,
 nthBuilding:nthBuilding_32,
 laserRed:laserRed_33,
 fireRed:fireRed_34,
 updateGame:updateGame_35,
 mkjselts:mkjselts_36,
 jselts:jselts_37,
 mkinput:mkinput_38,
 input:input_39,
 startState:startState_40,
 gameAutomaton:gameAutomaton_41,
 main:main_42};}();
Elm.main=function(){
 return Elm.Main.main;};
} catch (e) {
Elm.main=function() {
var msg = ('<br/><h2>Your browser may not be supported. Are you using a modern browser?</h2>' + '<br/><span style="color:grey">Runtime Error in Main module:<br/>' + e + '<br/><br/>The problem may stem from an improper usage of:<br/>::, Text.color, atan2, circle, every, fst, init\', snd</span>');
document.body.innerHTML = Elm.Text.monospace(msg);throw e;};}
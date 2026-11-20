<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Registro de producción (Operario) | ABBIE</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <style>
    :root{ --abbie-pink:#f78bc9; --abbie-red:#c0192e; --abbie-white:#fff; --abbie-text:#231f20; }
    body{ background:var(--abbie-pink); color:var(--abbie-text); }
    .navbar{ background:var(--abbie-white); box-shadow:0 2px 10px rgba(0,0,0,.06); }
    .card-ghost{ background:var(--abbie-white); border:0; box-shadow:0 6px 20px rgba(0,0,0,.08); border-radius:12px; }
    .btn-abbie{ background:var(--abbie-red); border-color:var(--abbie-red); color:#fff; }
    .btn-abbie:hover{ filter:brightness(.92); color:#fff; }
    .qty-input{ text-align:right; }
    .badge-soft{ background:rgba(192,25,46,.08); color:var(--abbie-red); }
    .small-mono{ font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; font-size:.8rem; }

    /* Checkboxes más visibles */
    .form-check-input{ width:1.2em; height:1.2em; border:2px solid var(--abbie-red); cursor:pointer; }
    .form-check-input:checked{ background-color:var(--abbie-red); border-color:var(--abbie-red); }
    .form-check-label{ font-weight:500; margin-left:.25rem; cursor:pointer; }
  </style>
</head>
<body>
<nav class="navbar">
  <div class="container">
    <a class="navbar-brand" href="/abbie/public/index.php">
      <img src="/abbie/public/assets/logo.png" height="28" alt="ABBIE">
    </a>
    <div class="ms-auto d-flex gap-2">
      <a class="btn btn-outline-dark" href="/abbie/public/outfits/index.php">Conjuntos</a>
      <a class="btn btn-outline-dark" href="/abbie/public/corte/index.php">Cortes</a>
    </div>
  </div>
</nav>

<div class="container py-4">
  <div class="d-flex justify-content-between align-items-center mb-3">
    <h1 class="h4 m-0">Registro de actividades</h1>
    <span class="badge rounded-pill badge-soft">Usuario: WILLY 19N</span>
  </div>

  <!-- Filtros -->
  <div class="card card-ghost mb-3">
    <div class="card-body">
      <div class="row g-3">
        <div class="col-12 col-md-4">
          <label class="form-label">Conjunto</label>
          <select id="selOutfit" class="form-select">
            <option value="">Seleccione…</option>
                          <option value="297">Lupe 14 nov</option>
                          <option value="296">Olivia bengalina 12 nov</option>
                          <option value="295">MEILIN 10 NOV</option>
                          <option value="294">IVANA 11 NOVIEMBRE</option>
                          <option value="293">MAYA PLUS 9 NOVIEMBRE</option>
                          <option value="292">MAYA 9 NOVIEMBRE</option>
                          <option value="291">napoleon 6 nov</option>
                          <option value="290">ALLEGRA 5 NOVIEMBRE</option>
                          <option value="289">ADHELA 4 NOVIEMBRE</option>
                          <option value="288">ana 3 noviembre</option>
                          <option value="287">SHORT ADIDAS VALERY TALLA PLUS</option>
                          <option value="286">PENELOPE 30 OCTUBRE</option>
                          <option value="285">SHORT ADIDAS VALERY TALLA UNICA</option>
                          <option value="284">NOHELIA 28 OCTUBRE</option>
                          <option value="283">ADIDAS VALENTINA 26 OCTUBRE</option>
                          <option value="282">IVANNA CREPE 26 OCT</option>
                          <option value="281">lupe 22 oct</option>
                          <option value="280">melina plus 21 oct</option>
                          <option value="279">belinda unica 20 oct</option>
                          <option value="278">ALLEGRA ADIDAS 19 OCT</option>
                          <option value="277">LUNA 17 OCT</option>
                          <option value="276">JUANA BENGALINA 16 OCT</option>
                          <option value="275">BELINDA PLUS 15 OCT</option>
                          <option value="274">ADHELA CREPE 13 OCT</option>
                          <option value="273">sami 12 octubre</option>
                          <option value="272">maya plus 10 octubre</option>
                          <option value="271">ADIDAS VALETINA 9 OCT</option>
                          <option value="270">ABRIL PLUS  8 OCT</option>
                          <option value="269">IVANA CREPE 8 OCT</option>
                          <option value="268">ANA BURDA MANGA RANGLAN 7 OCTUBRE</option>
                          <option value="267">nohelia  6 octubre</option>
                          <option value="266">melina plus 5 octubre</option>
                          <option value="265">luna 03 octubre</option>
                          <option value="264">penelope 01 octubre</option>
                          <option value="263">lupe 29 septiembre</option>
                          <option value="262">juana 29 septiembre</option>
                          <option value="261">MARGARITA EXTRAS</option>
                          <option value="260">ABRIL PLUS 26 SEPTIEMBRE</option>
                          <option value="259">SOLO JOGGER TUBO</option>
                          <option value="258">PANTALON SOLO BASICO</option>
                          <option value="257">abril UNICA 23 SEP</option>
                          <option value="256">VESTIDO DEPORTIVO SALOME</option>
                          <option value="255">DEPORTIVO  (EMILIA)</option>
                          <option value="254">DEPORTIVO ALO (THALIA)</option>
                          <option value="253">MAYA PLUS 23 SEPTIEMBRE</option>
                          <option value="252">MAYA UNICA 22 SEPTIEMBRE</option>
                          <option value="251">BELINDA UNICA 19 SEPTIEMBRE</option>
                          <option value="250">set adidas valentina 18 septiembre</option>
                          <option value="249">belinda PLUS 17 septiembre</option>
                          <option value="248">greta deportivo ( M - L ) 17 septiembre</option>
                          <option value="247">greta deportivo ( s - m ) 17 septiembre</option>
                          <option value="246">sami 16 septiembre</option>
                          <option value="245">renata 15 septiembre</option>
                          <option value="244">SAIRA ( TALLA M-L)</option>
                          <option value="243">SAIRA ( TALLA S-M)</option>
                          <option value="242">pantalones 12 septiembre</option>
                          <option value="241">MELINA PLUS</option>
                          <option value="240">penelope 10 septiembre</option>
                          <option value="239">body escote trasero circular 09 septiembre</option>
                          <option value="238">body manga larga 09  septiembre</option>
                          <option value="237">body escote 09 septiembre</option>
                          <option value="236">body sisa doble sesgo</option>
                          <option value="234">belinda PLUS 08 septiembre</option>
                          <option value="233">cabana 05 septiembre</option>
                          <option value="232">maya talla PLUS 05 septiembre</option>
                          <option value="231">maya talla única  05 septiembre</option>
                          <option value="230">rihana 02 septiembre</option>
                          <option value="229">ivana 01 septiembre</option>
                          <option value="228">lupe 01 septiembre</option>
                          <option value="227">abril talla plus 29 agosto</option>
                          <option value="226">martina 28 agosto</option>
                          <option value="225">ana 27 agosto</option>
                          <option value="224">maya 26 agosto</option>
                          <option value="223">belinda talla unica 26 agosto</option>
                          <option value="222">maya 25 agosto</option>
                          <option value="221">noelia 25 agosto</option>
                          <option value="220">debora 24 agosto</option>
                          <option value="219">adidas ambar 22 agosto (completo)</option>
                          <option value="218">adidas ambar 22 agosto (combinado)</option>
                          <option value="216">cony 21 agosto</option>
                          <option value="215">serena 20 agosto</option>
                          <option value="214">Mafer plus 19 agosto</option>
                          <option value="213">zoe plus 18 agosto</option>
                          <option value="212">maya PLUS 17 agosto</option>
                          <option value="211">milly 15 agosto</option>
                          <option value="210">SAMI 14 AGOSTO</option>
                          <option value="209">LUPE 13 AGOSTO</option>
                          <option value="208">belinda talla unica  11 agosto</option>
                          <option value="207">aranza 10 agosto</option>
                          <option value="206">cinthia PLUS 08 agosto</option>
                          <option value="205">leidy 06 agosto</option>
                          <option value="204">abril 05 agosto</option>
                          <option value="203">abril PLUS 04 agosto</option>
                          <option value="202">natalia 04 agosto</option>
                          <option value="201">noelia 02 julio</option>
                          <option value="200">belinda PLUS 01 agosto</option>
                          <option value="199">zoe 31 julio</option>
                          <option value="198">vicky 29 julio</option>
                          <option value="197">ambar 29 julio</option>
                          <option value="196">maya 28 julio</option>
                          <option value="195">penelope 28 julio</option>
                          <option value="194">lupe 25 julio</option>
                          <option value="193">tania 25 julio</option>
                          <option value="192">ivana 24 julio</option>
                          <option value="191">zoe plus 23 julio</option>
                          <option value="190">mia 22 julio</option>
                          <option value="189">aranza 22 julio</option>
                          <option value="188">mafer plus 20 julio</option>
                          <option value="187">luana conjunto galleta 18 julio</option>
                          <option value="186">melany short 18 julio</option>
                          <option value="185">karina short / camisa 17 julio</option>
                          <option value="184">cleo 16 julio</option>
                          <option value="183">zoe 16 julio</option>
                          <option value="182">leidy 13 julio</option>
                          <option value="181">abril plus 11 julio</option>
                          <option value="180">maya 10 julio</option>
                          <option value="179">kata 9  julio</option>
                          <option value="178">eliana 8 julio</option>
                          <option value="177">tania 7 de julio</option>
                          <option value="176">abril 4 julio</option>
                          <option value="175">isla 30 junio</option>
                          <option value="174">zoe 3 junio</option>
                          <option value="173">penelope 2 julio</option>
                          <option value="172">leidy 27 junio</option>
                          <option value="171">abril plus 26 junio</option>
                          <option value="170">camisa polo con perilla de doble color 26 junio</option>
                          <option value="169">amanda plus  25 junio</option>
                          <option value="168">belinda 24 de junio</option>
                          <option value="167">maite 24 junio</option>
                          <option value="166">serena 22 junio</option>
                          <option value="165">cleo 21 junio</option>
                          <option value="164">conjunto trio plus zoe</option>
                          <option value="163">eliana plus 18 junio</option>
                          <option value="162">amanda plus 17 junio</option>
                          <option value="161">abril 17 junio</option>
                          <option value="160">leidy 16 junio</option>
                          <option value="159">maya 16 junio</option>
                          <option value="158">eliana 15 junio</option>
                          <option value="157">aranza 13 junio</option>
                          <option value="156">eliana 11 junio</option>
                          <option value="154">penelope 10 junio</option>
                          <option value="153">lupe 9 de junio</option>
                          <option value="152">abril PLUS  06 junio</option>
                          <option value="151">amanda PLUS 5 junio</option>
                          <option value="150">serena 03 junio</option>
                          <option value="149">thalia 4 junio</option>
                          <option value="148">short basico 3 junio</option>
                          <option value="147">eliana plus 3 junio</option>
                          <option value="146">esmeralda 2 junio</option>
                          <option value="145">maite 1 junio</option>
                          <option value="144">antonia 30 mayo</option>
                          <option value="143">lupe 29 mayo</option>
                          <option value="142">paula 27 mayo</option>
                          <option value="141">abril 26 mayo</option>
                          <option value="140">karla 26 mayo</option>
                          <option value="139">eliana 23 mayo</option>
                          <option value="138">alma 22 mayo</option>
                          <option value="137">esmeralda 20 mayo</option>
                          <option value="136">bianca 19 mayo</option>
                          <option value="135">serena 19 mayo</option>
                          <option value="134">maya 16 mayo</option>
                          <option value="133">amanda 15 mayo</option>
                          <option value="132">paula 14 mayo</option>
                          <option value="131">lupe 13 mayo</option>
                          <option value="130">nike 12 mayo</option>
                          <option value="129">short basico 4 mayo</option>
                          <option value="128">abril 8 mayo</option>
                          <option value="127">grecia 8 mayo</option>
                          <option value="126">esmeralda 6 mayo</option>
                          <option value="125">ELIANA 6 MAYO</option>
                          <option value="124">AMARA 5 MAYO</option>
                          <option value="123">AURORA 1 MAYO</option>
                          <option value="122">ANTONIA 29 abril</option>
                          <option value="121">ISABEL 29 ABRIL</option>
                          <option value="120">grecia  26 abril</option>
                          <option value="119">serena 27 abril</option>
                          <option value="118">amanda 24 abril</option>
                          <option value="117">alma 23 abril</option>
                          <option value="116">abril</option>
                          <option value="115">ambar 18 abril</option>
                          <option value="114">amara 17 abril</option>
                          <option value="113">california short/polo</option>
                          <option value="112">karina short/camisa</option>
                          <option value="111">MARIANA 13 ABRIL</option>
                          <option value="110">ELIANA 11 ABRIL</option>
                          <option value="109">PAULA 10 ABRIL</option>
                          <option value="108">lupe 9 abril</option>
                          <option value="107">enterizo karla</option>
                          <option value="106">maya 7 abril</option>
                          <option value="105">amara 6 abril</option>
                          <option value="104">SHORT ADIDAS YADI</option>
                          <option value="103">AMANDA JOGGER</option>
                          <option value="102">NIKE PANT Y CAM</option>
                          <option value="101">NORA 30 MARZO</option>
                          <option value="100">ELIANA  24 MARZO</option>
                          <option value="99">LICETH CHAQUETA 25 MARZO</option>
                          <option value="98">MAYA 26 MARZO</option>
                          <option value="97">bianca 27 marzo</option>
                          <option value="96">abril 28 marzo</option>
                          <option value="95">LUPÈ 21 MARZO</option>
                          <option value="94">serena 20 marzo</option>
                          <option value="93">luciana 19 marzo</option>
                          <option value="92">#2 margarita bengalina · 16 marzo</option>
                          <option value="91">gisel galleta 18 marzo</option>
                          <option value="90">#1 margarita bengalina · 16 marzo</option>
                          <option value="89">amara 13 marzo</option>
                          <option value="88">maya 14marzo</option>
                          <option value="87">nora 12 marzo</option>
                          <option value="86">karen 11 marzo</option>
                          <option value="85">paula 10 marzo</option>
                          <option value="84">serena crepe 10 marzo</option>
                          <option value="83">LUPE 6 MARZO</option>
                          <option value="82">MAYA 5 MARZO</option>
                          <option value="81">SILVANA 4 MARZO</option>
                          <option value="80">ABRIL  3 MARZO</option>
                          <option value="79">LIBIA CAPRI 28 FEBRERO</option>
                          <option value="78">ADIDAS SHORT TODO BURDA 28 FEBRERO</option>
                          <option value="77">EMMA ENTERIZO BOTONES</option>
                          <option value="76">LUANA PANTALON RIB CAMISA OVER CORTA</option>
                          <option value="75">LUPE 26 FEBRERO</option>
                          <option value="74">paula 25 feb</option>
                          <option value="73">mariana 21 febrero</option>
                          <option value="72">amara 20 febrero</option>
                          <option value="71">eliana  19 febrero</option>
                          <option value="70">abril 18 febrero</option>
                          <option value="69">nora (buso) 17 febrero</option>
                          <option value="68">MAYA 16 FEBRERO</option>
                          <option value="67">LUCIANA 13 FEBRERO</option>
                          <option value="66">isabella</option>
                          <option value="65">LUPE 9 FEBRERO</option>
                          <option value="64">CAMISA BASICA CORTA</option>
                          <option value="63">ADIDAS CAMPANA CARGO 7 FEB/26</option>
                          <option value="62">MEGAN CAPRI CHAQUETA 6 FEB/26</option>
                          <option value="61">ADIDAS CAPRI CARGO 7 FEB/26</option>
                          <option value="60">AITANA CREPE 5FEB/26</option>
                          <option value="59">PAULA 3FEB/26</option>
                          <option value="58">ESMERALDA 2 FEB/26</option>
                          <option value="57">LUCIANA CREPE 30 ENERO</option>
                          <option value="56">SILVANA 28 ENERO</option>
                          <option value="55">NOA BURDA 28 ENERO</option>
                          <option value="54">mariana 27 enero</option>
                          <option value="53">adhara capri</option>
                          <option value="52">BARBARA ADIDAS 19 ENERO</option>
                          <option value="51">LUISA JOGGER 19 ENERO</option>
                          <option value="50">LUPE CREPE CUELLO V 22 ENERO</option>
                          <option value="49">PAULA CREPÉ BASICO 22 ENERO</option>
                          <option value="48">ESMERALDA BURDA 21 ENERO</option>
                          <option value="47">AMELIA 17 ENERO</option>
                          <option value="46">maya 15 enero</option>
                          <option value="45">isabella  14 enero</option>
                          <option value="44">lupe crepe 13 enerp</option>
                          <option value="43">paula 12 enero</option>
                          <option value="42">amara 10 enero</option>
                          <option value="41">camila 29 dic</option>
                          <option value="40">martina 26 dic</option>
                          <option value="39">lorena 26 dic</option>
                          <option value="38">lupe 22 dic</option>
                          <option value="37">meli 18 dic</option>
                          <option value="36">victoria galleta 18 dic</option>
                          <option value="35">valeria 17 dic</option>
                          <option value="34">Camila 15 dic</option>
                          <option value="33">Brenda pantalon taches 9 dic</option>
                          <option value="32">amara 11 dic</option>
                          <option value="31">martina  12 dic</option>
                          <option value="30">maya 13 dic</option>
                          <option value="29">LUPE CREPE CUELLO V 6 dic</option>
                          <option value="28">KAREN 5 DIC</option>
                          <option value="27">LORENA 4 DIC</option>
                          <option value="26">CAMILA TRIO BURDA 3 DIC (CHAQUETA TOP PANT)</option>
                          <option value="25">martina enterizo siza</option>
                          <option value="24">ISABELLA CREPE</option>
                          <option value="23">ENTERIZO JOGGER LORENA</option>
                          <option value="22">PARIS</option>
                          <option value="21">JUANA</option>
                          <option value="19">short adidas</option>
                          <option value="18">adidas jogger</option>
                          <option value="17">vangogh</option>
                          <option value="16">NUBIA short camisa con perilla dos colores</option>
                          <option value="15">DEBORA</option>
                          <option value="14">ENTERIZO AMARA DE JOGGER</option>
                          <option value="13">rachell galleta</option>
                          <option value="12">KAREN (TRIO) RIB ALGODON</option>
                          <option value="11">ANA BURDA CUELLO BLANCO</option>
                          <option value="10">MARIANA SHORT GALLETA 1 DIC</option>
                          <option value="9">HANNA PANTALON BURDA, CAMISA ALGODON</option>
                          <option value="8">DANI CREPE CARGO</option>
                          <option value="20">FABIANA</option>
                          <option value="4">PAULA CREPÉ BASICO</option>
                          <option value="3">OLIVIA CONJUNTO EN BURDA CON CUELLO Y PUÑO BLANCO</option>
                          <option value="1">MAYA ENTERIZO EN ALGODON CON CIERRE</option>
                          <option value="5">SARA CONJUNTO EN BURDA</option>
                      </select>
        </div>
        <div class="col-12 col-md-4">
          <label class="form-label">Prenda</label>
          <select id="selPrenda" class="form-select" disabled>
            <option value="">Seleccione un conjunto primero…</option>
          </select>
        </div>
        <div class="col-12 col-md-4">
          <label class="form-label">Proceso</label>
          <select id="selProceso" class="form-select">
            <option value="">Seleccione…</option>
                          <option value="9">CORTADOR</option>
                          <option value="1">AYUDANTES DE CORTE</option>
                          <option value="2">MAQUINA FILETEADORA</option>
                          <option value="3">MAQUINA PLANA</option>
                          <option value="5">MAQUINA MULTIAGUJA</option>
                          <option value="6">MAQUINA DOBLE AGUJA</option>
                          <option value="4">MAQUINA COLLARIN</option>
                          <option value="7">TERMINACION</option>
                          <option value="8">REVISION</option>
                      </select>
        </div>

        <div class="col-12 col-md-4">
          <label class="form-label">Actividad</label>
          <select id="selActividad" class="form-select" disabled>
            <option value="">Seleccione prenda y proceso…</option>
          </select>
          <div class="form-text">Solo aparecen actividades habilitadas para la prenda en ese proceso.</div>
        </div>

        <!-- 3) Empleado fijado al operario de sesión -->
        <div class="col-12 col-md-4">
          <label class="form-label">Empleado</label>
          <select id="selEmpleado" class="form-select" disabled>
            <option value="57">WILLY 19N</option>
          </select>
          <!-- input oculto NO es necesario para el flujo actual, 
               porque el JS lee el value de #selEmpleado. 
               Si en algún momento envías el form tradicional, 
               podrías duplicar el valor aquí: 
               <input type="hidden" name="id_usuario" value="57"> -->
        </div>

        <div class="col-12 col-md-4">
          <label class="form-label">Fecha</label>
          <input id="inpFecha" type="date" class="form-control" value="2026-11-20">
        </div>

        <div class="col-12">
          <label class="form-label">Observaciones</label>
          <input id="inpObs" type="text" class="form-control" maxlength="255" placeholder="Opcional…">
        </div>
      </div>
    </div>
  </div>

  <!-- Tabla de pendientes por color -->
  <div class="card card-ghost">
    <div class="card-body">
      <div class="d-flex justify-content-between align-items-center mb-2">
        <h2 class="h6 m-0">Pendientes por color</h2>
        <div class="small text-muted">Total pendiente: <span id="totalPendiente" class="small-mono">0</span></div>
      </div>

      <!-- Opcional: seleccionar todos/ninguno -->
      <div class="d-flex gap-2 mb-2">
        <button type="button" class="btn btn-sm btn-outline-dark" id="btnSelTodo">Seleccionar todo</button>
        <button type="button" class="btn btn-sm btn-outline-dark" id="btnSelNada">Seleccionar ninguno</button>
      </div>

      <div class="table-responsive">
        <table id="tablaPendientes" class="table align-middle">
          <thead class="table-light">
            <tr>
              <th style="width:70px">Usar</th>
              <th style="width:30%">Color</th>
              <th class="text-end">Programado</th>
              <th class="text-end">Hecho</th>
              <th class="text-end">Pendiente</th>
              <th style="width:140px">Registrar</th>
            </tr>
          </thead>
          <tbody>
            <tr><td colspan="6" class="text-center text-muted">Seleccione conjunto, prenda, proceso y actividad.</td></tr>
          </tbody>
        </table>
      </div>

      <div class="d-flex justify-content-end gap-2 mt-3">
                <button id="btnGuardar" class="btn btn-abbie" disabled>Guardar</button>
        <a href="/abbie/public/produccion/historial_operarios.php" class="btn btn-outline-dark">Historial</a>
      </div>
    </div>
  </div>
</div>

<script>
const BASE = "\/abbie\/public";

document.addEventListener('DOMContentLoaded', () => {
  // En la versión operario NO cargamos la lista completa de empleados.
  // Dejamos el select con el único valor del usuario de sesión.
  hookEventos();
});

function hookEventos(){
  const selOutfit    = document.getElementById('selOutfit');
  const selPrenda    = document.getElementById('selPrenda');
  const selProceso   = document.getElementById('selProceso');
  const selActividad = document.getElementById('selActividad');

  selOutfit.addEventListener('change', async () => {
    limpiarTablaInfo('Seleccione prenda, proceso y actividad.');
    await cargarPrendas(selOutfit.value);
    selActividad.innerHTML = '<option value="">Seleccione prenda y proceso…</option>';
    selActividad.disabled = true;
    updateTotalesYBoton();
  });

  selPrenda.addEventListener('change', async () => { await cargarActividades(); });
  selProceso.addEventListener('change', async () => { await cargarActividades(); });
  selActividad.addEventListener('change', async () => { await cargarPendientes(); });

  document.getElementById('inpFecha').addEventListener('change', updateTotalesYBoton);
  document.getElementById('btnGuardar').addEventListener('click', onGuardar);

  // botones seleccionar todo/ninguno
  document.getElementById('btnSelTodo').addEventListener('click', () => {
    document.querySelectorAll('#tablaPendientes tbody tr').forEach(tr => {
      const chk = tr.querySelector('input[type="checkbox"]');
      const qty = tr.querySelector('.qty-input');
      if (!chk || !qty) return;
      const max = Number(qty.max || 0);
      chk.checked = true;
      qty.disabled = false;
      if (Number(qty.value || 0) === 0) qty.value = max;
    });
    updateTotalesYBoton();
  });
  document.getElementById('btnSelNada').addEventListener('click', () => {
    document.querySelectorAll('#tablaPendientes tbody tr').forEach(tr => {
      const chk = tr.querySelector('input[type="checkbox"]');
      const qty = tr.querySelector('.qty-input');
      if (!chk || !qty) return;
      chk.checked = false;
      qty.value = 0;
      qty.disabled = true;
    });
    updateTotalesYBoton();
  });
}

function limpiarTablaInfo(msg){
  const tbody = document.querySelector('#tablaPendientes tbody');
  tbody.innerHTML = `<tr><td colspan="6" class="text-center text-muted">${msg || 'Sin datos.'}</td></tr>`;
  document.getElementById('totalPendiente').textContent = '0';
}

async function cargarPrendas(idOutfit){
  const sel = document.getElementById('selPrenda');
  sel.innerHTML = '<option value="">Cargando…</option>';
  sel.disabled = true;
  if(!idOutfit){
    sel.innerHTML = '<option value="">Seleccione un conjunto primero…</option>';
    return;
  }
  try{
    const r = await fetch(`${BASE}/produccion/api_pendientes.php?action=prendas&id_outfit=${encodeURIComponent(idOutfit)}`);
    const j = await r.json();
    sel.innerHTML = '<option value="">Seleccione…</option>';
    if(j.ok && Array.isArray(j.data)){
      j.data.forEach(p => {
        const opt = document.createElement('option');
        opt.value = p.id_outfit_prenda;
        opt.textContent = p.nombre;
        sel.appendChild(opt);
      });
      sel.disabled = false;
    }else{
      sel.innerHTML = '<option value="">Sin prendas</option>';
    }
  }catch(e){
    sel.innerHTML = '<option value="">Error cargando</option>';
  }
}

async function cargarActividades(){
  const idPrenda  = document.getElementById('selPrenda').value;
  const idProceso = document.getElementById('selProceso').value;
  const selAct    = document.getElementById('selActividad');

  selAct.innerHTML = '<option value="">Cargando…</option>';
  selAct.disabled = true;
  limpiarTablaInfo('Seleccione actividad…');

  if(!idPrenda || !idProceso){
    selAct.innerHTML = '<option value="">Seleccione prenda y proceso…</option>';
    return;
  }

  try{
    const r = await fetch(`${BASE}/produccion/api_pendientes.php?action=actividades&id_outfit_prenda=${encodeURIComponent(idPrenda)}&id_proceso=${encodeURIComponent(idProceso)}`);
    const j = await r.json();
    selAct.innerHTML = '<option value="">Seleccione…</option>';
    if(j.ok && Array.isArray(j.data) && j.data.length){
      j.data.forEach(a => {
        const opt = document.createElement('option');
        opt.value = a.id_actividad;
        opt.textContent = a.nombre;
        selAct.appendChild(opt);
      });
      selAct.disabled = false;
    }else{
      selAct.innerHTML = '<option value="">No hay actividades habilitadas</option>';
      selAct.disabled = true;
    }
    updateTotalesYBoton();
  }catch(e){
    selAct.innerHTML = '<option value="">Error cargando</option>';
    selAct.disabled = true;
    updateTotalesYBoton();
  }
}

async function cargarPendientes(){
  const idPrenda   = document.getElementById('selPrenda').value;
  const idActividad= document.getElementById('selActividad').value;
  if(!idPrenda || !idActividad){
    limpiarTablaInfo('Seleccione prenda y actividad.');
    updateTotalesYBoton();
    return;
  }
  try{
    const r = await fetch(`${BASE}/produccion/api_pendientes.php?action=pendientes&id_outfit_prenda=${encodeURIComponent(idPrenda)}&id_actividad=${encodeURIComponent(idActividad)}`);
    const j = await r.json();
    if(!j.ok){ throw new Error(j.msg || 'Error'); }
    renderPendientes(j.data || []);
  }catch(e){
    limpiarTablaInfo('Error cargando pendientes.');
  }
  updateTotalesYBoton();
}

function renderPendientes(data){
  const tbody = document.querySelector('#tablaPendientes tbody');
  tbody.innerHTML = '';
  let totalPend = 0;

  if(!Array.isArray(data) || !data.length){
    limpiarTablaInfo('No hay pendientes para esta actividad.');
    updateTotalesYBoton();
    return;
  }

  data.forEach(row => {
    const idColor   = Number(row.id_color);
    const colorNom  = row.color || '';
    const program   = Number(row.programado || 0);
    const hecho     = Number(row.hecho || 0);
    const pendiente = Math.max(Number(row.pendiente || 0), 0);

    totalPend += pendiente;

    const tr = document.createElement('tr');

    // Checkbox USAR
    const tdUse = document.createElement('td');
    const chkUse = document.createElement('input');
    chkUse.type = 'checkbox';
    chkUse.className = 'form-check-input';
    chkUse.style.cursor = 'pointer';
    if (pendiente <= 0) {
      chkUse.disabled = true;
      chkUse.title = 'Sin pendiente';
    }
    tdUse.appendChild(chkUse);

    const tdColor = document.createElement('td');
    tdColor.textContent = colorNom;

    const tdProg = document.createElement('td');
    tdProg.className = 'text-end';
    tdProg.textContent = program;

    const tdHecho = document.createElement('td');
    tdHecho.className = 'text-end';
    tdHecho.textContent = hecho;

    const tdPend = document.createElement('td');
    tdPend.className = 'text-end text-muted';
    tdPend.textContent = pendiente;

    const tdReg = document.createElement('td');
    tdReg.style.width = '140px';

    const inpQty = document.createElement('input');
    inpQty.type = 'number';
    inpQty.className = 'form-control form-control-sm qty-input';
    inpQty.min = 0;
    inpQty.step = 1;
    inpQty.max = pendiente;
    inpQty.value = 0;
    inpQty.disabled = true;
    inpQty.dataset.idColor = idColor;

    chkUse.addEventListener('change', () => {
      if (chkUse.checked) {
        inpQty.disabled = false;
        if (Number(inpQty.value || 0) === 0) inpQty.value = pendiente;
      } else {
        inpQty.value = 0;
        inpQty.disabled = true;
      }
      updateTotalesYBoton();
    });

    inpQty.addEventListener('input', () => {
      let v = Number(inpQty.value || 0);
      if (isNaN(v) || v < 0) v = 0;
      if (v > pendiente) v = pendiente;
      inpQty.value = v;
      updateTotalesYBoton();
    });

    tdReg.appendChild(inpQty);
    tr.append(tdUse, tdColor, tdProg, tdHecho, tdPend, tdReg);
    tbody.appendChild(tr);
  });

  document.getElementById('totalPendiente').textContent = totalPend;
  updateTotalesYBoton();
}

function updateTotalesYBoton(){
  const sum = Array.from(document.querySelectorAll('.qty-input'))
    .filter(inp => !inp.disabled)
    .reduce((acc, inp) => acc + (Number(inp.value || 0) || 0), 0);

  const okEmpleado  = !!document.getElementById('selEmpleado').value; // valor fijo del operario
  const okFecha     = !!document.getElementById('inpFecha').value;
  const okOutfit    = !!document.getElementById('selOutfit').value;
  const okPrenda    = !!document.getElementById('selPrenda').value;
  const okProceso   = !!document.getElementById('selProceso').value;
  const okActividad = !!document.getElementById('selActividad').value;

  const puedeGuardar = sum > 0 && okEmpleado && okFecha && okOutfit && okPrenda && okProceso && okActividad;
  document.getElementById('btnGuardar').disabled = !puedeGuardar;
}

async function onGuardar(ev){
  ev.preventDefault();

  const id_outfit_prenda = document.getElementById('selPrenda').value;
  const id_actividad     = document.getElementById('selActividad').value;
  const id_usuario       = document.getElementById('selEmpleado').value; // fijo al operario de sesión
  const fecha            = document.getElementById('inpFecha').value;
  const observaciones    = document.getElementById('inpObs').value.trim();

  const items = [];
  document.querySelectorAll('.qty-input').forEach(inp => {
    if (inp.disabled) return;
    const cant = Number(inp.value || 0);
    const idc  = Number(inp.dataset.idColor || 0);
    if (idc > 0 && cant > 0) items.push({ id_color:idc, cantidad:cant });
  });

  if (!items.length) { alert('No hay cantidades a registrar.'); return; }

  const payload = {
    id_outfit_prenda: Number(id_outfit_prenda),
    id_actividad: Number(id_actividad),
    id_usuario: Number(id_usuario),
    fecha: fecha,
    observaciones: observaciones,
    items: items
  };

  try{
    const r = await fetch(`${BASE}/produccion/registrar.php`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const j = await r.json();
    if(!j.ok){
      alert('Error: ' + (j.msg || 'No se pudo guardar'));
      return;
    }
    if (Array.isArray(j.errores) && j.errores.length){
      alert('Guardado parcial. Errores:\n- ' + j.errores.join('\n- '));
    } else {
      alert(`Registros insertados: ${j.insertados}`);
    }
    await cargarPendientes();
  }catch(e){
    alert('Error de red/servidor al guardar.');
  }
}
</script>
</body>
</html>

<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Detalle de corte | ABBIE</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <style>
    :root{ --abbie-red:#c0192e; }
    .btn-abbie{ background:var(--abbie-red); border-color:var(--abbie-red); color:#fff; }
    .btn-abbie:hover{ filter:brightness(.92); color:#fff; }
    .card-ghost{ background:#fff; border:0; box-shadow:0 6px 20px rgba(0,0,0,.08); border-radius:12px; }
    .muted{ color:#6c757d; }
    .label{ font-size:.8rem; text-transform:uppercase; letter-spacing:.04em; color:#6c757d;}
    th.sticky{ position:sticky; top:0; background:#f8f9fa; z-index:1; }
  </style>
</head>
<body class="bg-light">
<nav class="navbar navbar-light bg-white border-bottom">
  <div class="container">
    <a class="navbar-brand" href="/abbie/public/corte/index.php">← Cortes</a>
    <div class="ms-auto d-flex gap-2">
      <a class="btn btn-outline-secondary" href="/abbie/public/corte/edit_2.php?id_instancia=160">Editar</a>
      <a class="btn btn-abbie" href="/abbie/public/corte/create.php?id_outfit_prenda=143">Registrar nuevo</a>
    </div>
  </div>
</nav>

<div class="container py-4">
  <div class="mb-3">
    <div class="label">Conjunto / Prenda</div>
    <h1 class="h5 m-0">ANTONIA 29 abril — CAMISA BASICA</h1>
  </div>

  <div class="row g-3">
    <div class="col-12">
      <div class="card card-ghost">
        <div class="card-body">
          <div class="row g-3">
            <div class="col-md-3"><div class="label">Nombre de corte</div><div>CAMISAS ANTONIA</div></div>
            <div class="col-md-3"><div class="label">Tipo de tela</div><div>ALGODON</div></div>
            <div class="col-md-3"><div class="label">Medida de corte</div><div>—</div></div>
            <div class="col-md-3"><div class="label">Cant por capa</div><div>2.000 UND</div></div>
            <div class="col-md-3"><div class="label">Fecha inicio</div><div>2026-05-04</div></div>
            <div class="col-md-3"><div class="label">Fecha fin</div><div>2026-05-04</div></div>
            <div class="col-md-3"><div class="label">Estado</div><div>confirmado</div></div>
            <div class="col-12"><div class="label">Observaciones</div><div class="muted"></div></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Tabla por color/rollo -->
    <div class="col-12">
      <div class="card card-ghost">
        <div class="card-body">
          <h2 class="h6 mb-3">Detalle por color y rollo</h2>
                    <div class="table-responsive">
            <table class="table table-sm align-middle">
              <thead>
                <tr>
                  <th class="sticky">Color</th>
                  <th class="sticky text-end">UND total</th>
                  <th class="sticky">Responsable</th>
                  <th class="sticky">Proveedor</th>
                  <th class="sticky text-end">Capas</th>
                  <th class="sticky text-end">UND corte</th>
                  <th class="sticky text-end">Cant. inicial (kg)</th>
                  <th class="sticky text-end">Cant usada (kg)</th>
                  <th class="sticky text-end">Extra por marras (kg)</th>
                  <th class="sticky text-end">Cant. en retazos (kg)</th>
                </tr>
              </thead>
              <tbody>
                                <tr>
                                          <td rowspan="3">ALGODON MARFIL</td>
                      <td rowspan="3" class="text-end">100</td>
                      <td rowspan="3">—</td>
                                        <td></td>
                    <td class="text-end">22</td>
                    <td class="text-end">44</td>
                    <td class="text-end">—</td>
                    <td class="text-end">—</td>
                    <td class="text-end">—</td>
                    <td class="text-end">—</td>
                  </tr>
                                  <tr>
                                        <td></td>
                    <td class="text-end">22</td>
                    <td class="text-end">44</td>
                    <td class="text-end">—</td>
                    <td class="text-end">—</td>
                    <td class="text-end">—</td>
                    <td class="text-end">—</td>
                  </tr>
                                  <tr>
                                        <td></td>
                    <td class="text-end">6</td>
                    <td class="text-end">12</td>
                    <td class="text-end">—</td>
                    <td class="text-end">—</td>
                    <td class="text-end">—</td>
                    <td class="text-end">—</td>
                  </tr>
                                            </tbody>
            </table>
          </div>
                  </div>
      </div>
    </div>
  </div>
</div>
</body>
</html>

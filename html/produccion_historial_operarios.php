<!doctype html>
<html lang="es">
<head>
    <meta charset="utf-8">
    <title>Mi historial de producción</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
    <style>
        body { padding: 16px; }
        .totales { font-size: 1.05rem; }
        .table thead th { white-space: nowrap; }
        .btn-volver { margin: 12px 0 20px; }
        .filtros .form-control { max-width: 220px; }
    </style>
</head>
<body class="bg-light">

<div class="container-fluid">
    <h1 class="h4 mb-3">Mi historial de producción</h1>

    <div class="btn-volver">
        <a href="../index.php" class="btn btn-primary">Regresar al inicio</a>
    </div>

    <form class="row gy-2 align-items-end filtros mb-3" method="get">
        <div class="col-auto">
            <label for="desde" class="form-label mb-0">Desde</label>
            <input type="date" class="form-control" id="desde" name="desde"
                   value="2026-10-21">
        </div>
        <div class="col-auto">
            <label for="hasta" class="form-label mb-0">Hasta</label>
            <input type="date" class="form-control" id="hasta" name="hasta"
                   value="2026-11-20">
        </div>
        <div class="col-auto">
            <div class="form-check pt-4">
               <!-- <input class="form-check-input" type="checkbox" value="1" id="debug" name="debug" >
                <label class="form-check-label" for="debug">Mostrar errores</label> -->
            </div>
        </div>
        <div class="col-auto">
            <button class="btn btn-outline-secondary">Aplicar</button>
        </div>
    </form>

    <div class="card mb-3 shadow-sm">
        <div class="card-body d-flex justify-content-between align-items-center totales">
            <div>
                <strong>Período:</strong>
                2026-10-21 a 2026-11-20            </div>
            <div>
                <strong>Total a pagar:</strong>
                $0,00            </div>
        </div>
    </div>

    <div class="card shadow-sm">
        <div class="card-body table-responsive">
            <table class="table table-sm table-striped align-middle">
                <thead class="table-light">
                <tr>
                    <th>Fecha y hora</th>
                    <th>Outfit</th>
                    <th>Prenda</th>
                    <th>Proceso</th>
                    <th>Actividad</th>
                    <th>Color</th>
                    <th class="text-end">Cantidad</th>
                    <th class="text-end">V. Unitario</th>
                    <th class="text-end">Subtotal</th>
                    <th>Obs.</th>
                </tr>
                </thead>
                <tbody>
                                    <tr><td colspan="10" class="text-center text-muted">Sin registros en el rango seleccionado.</td></tr>
                                </tbody>
            </table>

            <div class="btn-volver text-center">
                <a href="../index.php" class="btn btn-primary">Regresar al inicio</a>
            </div>
        </div>
    </div>
</div>
</body>
</html>

<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Panel | ABBIE</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap" rel="stylesheet">
  <style>
    :root{
      --abbie-pink:#f78bc9;
      --abbie-red:#c0192e;
      --abbie-text:#231f20;
      --abbie-white:#ffffff;
    }
    body{ 
      font-family: 'Poppins', sans-serif;
      background: linear-gradient(135deg, var(--abbie-pink) 0%, #f9c2d9 100%);
      color: var(--abbie-text); 
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
    .navbar{ 
      background: var(--abbie-white); 
      box-shadow: 0 4px 15px rgba(0,0,0,.08); 
    }
    .brand-name{ 
      font-weight: 700; 
      letter-spacing: .5px; 
      color: var(--abbie-red); 
      font-size: 1.5rem;
    }
    .card-ghost{ 
      background: var(--abbie-white); 
      border: 0; 
      box-shadow: 0 10px 30px rgba(0,0,0,.1); 
      border-radius: 12px;
      overflow: hidden;
      border-left: 5px solid var(--abbie-pink);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .card-ghost:hover{
      transform: translateY(-5px) scale(1.02);
      box-shadow: 0 15px 40px rgba(0,0,0,.15);
    }
    .btn-abbie{ 
      background: var(--abbie-red); 
      border-color: var(--abbie-red); 
      color: #fff; 
      transition: all 0.3s ease;
      font-weight: 500;
      padding: .6rem 1.2rem;
      border-radius: 8px;
    }
    .btn-abbie:hover{ 
      filter: brightness(1.1); 
      box-shadow: 0 4px 12px rgba(192,25,46,.3);
      color: #fff; 
    }
    .btn-outline-dark {
      border-radius: 8px;
      transition: all 0.3s ease;
      font-weight: 500;
    }
    .btn-outline-dark:hover {
      background-color: var(--abbie-red);
      color: var(--abbie-white);
      border-color: var(--abbie-red);
    }
    .chip{ 
      display: inline-block; 
      padding: .3rem .8rem; 
      border-radius: 999px; 
      font-size: .8rem; 
      font-weight: 500;
      color: var(--abbie-white); 
      background: linear-gradient(45deg, var(--abbie-red), #f73d57);
      box-shadow: 0 2px 8px rgba(192,25,46,.4);
    }
    .navbar-nav .nav-link {
      font-weight: 500;
      color: var(--abbie-text);
      transition: color 0.2s ease;
    }
    .navbar-nav .nav-link:hover {
      color: var(--abbie-red);
    }
    .card-body h2 {
      font-weight: 700;
      color: var(--abbie-red);
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .card-body p {
      font-size: .9rem;
    }
    main {
      flex: 1;
    }
    footer {
      padding: 1rem;
      text-align: center;
      color: rgba(0,0,0,.5);
      font-size: .8rem;
    }
  </style>
</head>
<body>

  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <a class="navbar-brand d-flex align-items-center gap-2" href="/abbie/public/index.php">
        <img src="/abbie/public/assets/logo.png" alt="ABBIE" height="28" style="border-radius:4px;">
        <span class="brand-name">ABBIE</span>
      </a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMain" aria-controls="navMain" aria-expanded="false" aria-label="Menú">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navMain">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item"><a class="nav-link" href="/abbie/public/outfits/index.php"><i class="fas fa-tshirt"></i> Conjuntos</a></li>
          <li class="nav-item"><a class="nav-link" href="/abbie/public/corte/index.php"><i class="fas fa-cut"></i> Corte</a></li>

          
          <li class="nav-item ms-lg-3"><a class="btn btn-outline-dark" href="/abbie/public/logout.php">Cerrar sesión <i class="fas fa-sign-out-alt"></i></a></li>
        </ul>
      </div>
    </div>
  </nav>

  <main class="container py-4 py-md-5">

    <div class="d-flex justify-content-between align-items-center mb-4">
      <h1 class="h4 m-0">Bienvenido, WILLY 19N <span class="chip text-capitalize">operario</span></h1>
    </div>

    <div class="row g-4">
      <div class="col-12 col-md-6 col-lg-4">
        <div class="card card-ghost h-100">
          <div class="card-body d-flex flex-column">
            <h2 class="h5"><i class="fas fa-tshirt"></i> Gestión de Conjuntos</h2>
            <p class="text-muted mb-4">Crea conjuntos, agrega prendas, fotos y gestiona su estado.</p>
            <div class="mt-auto d-flex gap-2">
              <a class="btn btn-abbie" href="/abbie/public/outfits/index.php">Ir a Conjuntos</a>
                          </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-6 col-lg-4">
        <div class="card card-ghost h-100">
          <div class="card-body d-flex flex-column">
            <h2 class="h5"><i class="fas fa-cut"></i> Corte</h2>
            <p class="text-muted mb-4">Registra proveedor, capas, pesajes y cantidades por color con responsable.</p>
            <div class="mt-auto d-flex gap-2">
              <a class="btn btn-abbie" href="/abbie/public/corte/index.php">Ir a Corte</a>
                          </div>
          </div>
        </div>
      </div>

      
      
       <div class="col-12 col-md-6 col-lg-4">
    <div class="card card-ghost h-100">
      <div class="card-body d-flex flex-column">
        <h2 class="h5"><i class="fas fa-cogs"></i> Producción</h2>
        <p class="text-muted mb-4">Registra cantidades por color y actividad. Consulta avances y valores.</p>
        <div class="mt-auto d-flex gap-2">

          
          <a href="/abbie/public/produccion/registro_operario.php" class="btn btn-abbie">Registrar</a>
          <a href="/abbie/public/produccion/historial_operarios.php" class="btn btn-outline-dark">Historial</a>

        </div>
      </div>
    </div>
  </div>


    </div>

  </main>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, KeepTogether, HRFlowable
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch

PDF_PATH_PUBLIC = r"C:\Users\Usuario\Documents\ABBI\public\COMPARATIVA_ABBIE_CORETEXTIL.pdf"
PDF_PATH_ROOT = r"C:\Users\Usuario\Documents\ABBI\COMPARATIVA_ABBIE_CORETEXTIL.pdf"
os.makedirs(os.path.dirname(PDF_PATH_PUBLIC), exist_ok=True)

doc = SimpleDocTemplate(
    PDF_PATH_PUBLIC,
    pagesize=letter,
    leftMargin=36,
    rightMargin=36,
    topMargin=36,
    bottomMargin=36
)

styles = getSampleStyleSheet()

# Estilos personalizados
COLOR_RED = colors.HexColor("#c0192e")
COLOR_PINK = colors.HexColor("#f78bc9")
COLOR_PURPLE = colors.HexColor("#7c3aed")
COLOR_GREEN = colors.HexColor("#10b981")
COLOR_DARK = colors.HexColor("#0f172a")
COLOR_GRAY = colors.HexColor("#64748b")
COLOR_BG_LIGHT = colors.HexColor("#f8fafc")

title_style = ParagraphStyle(
    "DocTitle",
    parent=styles["Normal"],
    fontName="Helvetica-Bold",
    fontSize=18,
    leading=22,
    textColor=COLOR_RED
)

subtitle_style = ParagraphStyle(
    "DocSubtitle",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=9,
    leading=13,
    textColor=COLOR_GRAY
)

section_heading = ParagraphStyle(
    "SectionHeading",
    parent=styles["Normal"],
    fontName="Helvetica-Bold",
    fontSize=12,
    leading=16,
    textColor=COLOR_DARK
)

cell_var = ParagraphStyle(
    "CellVar",
    parent=styles["Normal"],
    fontName="Helvetica-Bold",
    fontSize=8,
    leading=10,
    textColor=COLOR_DARK
)

cell_antes = ParagraphStyle(
    "CellAntes",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=7.5,
    leading=9.5,
    textColor=colors.HexColor("#b91c1c")
)

cell_despues = ParagraphStyle(
    "CellDespues",
    parent=styles["Normal"],
    fontName="Helvetica-Bold",
    fontSize=7.5,
    leading=9.5,
    textColor=colors.HexColor("#15803d")
)

cell_beneficio = ParagraphStyle(
    "CellBeneficio",
    parent=styles["Normal"],
    fontName="Helvetica-Bold",
    fontSize=7.5,
    leading=9.5,
    textColor=COLOR_PURPLE
)

th_style = ParagraphStyle(
    "TableHeader",
    parent=styles["Normal"],
    fontName="Helvetica-Bold",
    fontSize=8,
    leading=10,
    textColor=COLOR_DARK
)

elements = []

# Encabezado Superior (Logo / Título y Meta)
header_data = [
    [
        Paragraph("<b>ABBIE</b> <font size=9 color='#7c3aed'><b>| EVOLUCIÓN 2.0 CORETEXTIL</b></font>", title_style),
        Paragraph("Preparado para: <b>Andrés & Leidy</b><br/>Plataforma: <b>https://node-abbi.vercel.app</b><br/>Fecha: <b>Noviembre 2026</b>", subtitle_style)
    ]
]
t_header = Table(header_data, colWidths=[330, 210])
t_header.setStyle(TableStyle([
    ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
    ('ALIGN', (1,0), (1,0), 'RIGHT'),
    ('BOTTOMPADDING', (0,0), (-1,-1), 0),
    ('TOPPADDING', (0,0), (-1,-1), 0),
]))
elements.append(t_header)

elements.append(Spacer(1, 8))
elements.append(HRFlowable(width="100%", thickness=1.5, color=COLOR_RED, spaceAfter=8, spaceBefore=0))

elements.append(Paragraph("Matriz Comparativa de Transformación Operativa & Financiera", section_heading))
elements.append(Paragraph("Auditoría técnica del sistema actual de confección frente a la implementación de trazabilidad por Atados QR, Visor 2D y Control Anti-Fraude de Destajo.", subtitle_style))
elements.append(Spacer(1, 10))

# Tabla Comparativa Principal
table_content = [
    [
        Paragraph("VARIABLE DE CONTROL", th_style),
        Paragraph("CÓMO OPERA ABBIE HOY", th_style),
        Paragraph("CON LA VERSIÓN CORETEXTIL", th_style),
        Paragraph("BENEFICIO & RETORNO REAL", th_style)
    ],
    [
        Paragraph("<b>Registro de labor por operario</b>", cell_var),
        Paragraph("2 a 3 minutos buscando en lista manual de 300 prendas.", cell_antes),
        Paragraph("<b>1 segundo</b> con escáner QR en celular.", cell_despues),
        Paragraph("Ahorro de ~2 horas de cuadrilla al día en planta.", cell_beneficio)
    ],
    [
        Paragraph("<b>Trazabilidad por Color y Atado</b>", cell_var),
        Paragraph("Ciega; columna 'Responsable' vacía (—) en el corte.", cell_antes),
        Paragraph("<b>Matriz en vivo por cuadrilla</b> (Filete/Plana/Equipo).", cell_despues),
        Paragraph("Eliminación del 100% de atados refundidos o cruzados.", cell_beneficio)
    ],
    [
        Paragraph("<b>Control de Modelos y Tallas</b>", cell_var),
        Paragraph("No existe registro de tallas en producción.", cell_antes),
        Paragraph("<b>Identificación unívoca</b> (REF-COLOR-TALLA-NN).", cell_despues),
        Paragraph("Inventario exacto por modelo y balance de ensamble.", cell_beneficio)
    ],
    [
        Paragraph("<b>Monitoreo de Estado de Ensamble</b>", cell_var),
        Paragraph("Ninguno; requiere llamadas o bajar al taller.", cell_antes),
        Paragraph("<b>Visor 2D Dinámico</b> (Verde / Amarillo / Gris).", cell_despues),
        Paragraph("La gerencia visualiza el avance real desde el móvil.", cell_beneficio)
    ],
    [
        Paragraph("<b>Despiece de Nuevos Diseños</b>", cell_var),
        Paragraph("Manual, digitando 40 operaciones una a una.", cell_antes),
        Paragraph("<b>Vision Engine V2 (IA)</b> en 3 segundos.", cell_despues),
        Paragraph("Fichas técnicas y rutas SAM al subir la foto.", cell_beneficio)
    ],
    [
        Paragraph("<b>Riesgo de Pago por Piezas Fantasma</b>", cell_var),
        Paragraph("Alto (reportes manuales sin topes de corte).", cell_antes),
        Paragraph("<b>Bloqueo matemático</b> estricto en base de datos.", cell_despues),
        Paragraph("Ahorro directo de $1.5M a $3M COP mensuales.", cell_beneficio)
    ],
    [
        Paragraph("<b>Liquidación de Nómina Destajo</b>", cell_var),
        Paragraph("Revisión manual de cuadernos al fin de semana.", cell_antes),
        Paragraph("<b>Liquidación a 1 clic</b> con comprobante digital.", cell_despues),
        Paragraph("Cero disputas de pago; exactitud al centavo.", cell_beneficio)
    ],
]

t_comp = Table(table_content, colWidths=[120, 140, 140, 140])
t_comp.setStyle(TableStyle([
    ('BACKGROUND', (0,0), (-1,0), COLOR_BG_LIGHT),
    ('GRID', (0,0), (-1,-1), 0.5, colors.HexColor("#e2e8f0")),
    ('LINEBELOW', (0,0), (-1,0), 1.5, colors.HexColor("#cbd5e1")),
    ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
    ('TOPPADDING', (0,0), (-1,-1), 5),
    ('BOTTOMPADDING', (0,0), (-1,-1), 5),
    ('LEFTPADDING', (0,0), (-1,-1), 6),
    ('RIGHTPADDING', (0,0), (-1,-1), 6),
    ('BACKGROUND', (1,1), (1,-1), colors.HexColor("#fef2f2")),
    ('BACKGROUND', (2,1), (2,-1), colors.HexColor("#f0fdf4")),
    ('BACKGROUND', (3,1), (3,-1), colors.HexColor("#faf5ff")),
]))
elements.append(t_comp)

elements.append(Spacer(1, 10))

# Tarjetas de Impacto Financiero y ROI
roi_data = [
    [
        Paragraph("<font size=7 color='#64748b'><b>AHORRO EN DESTAJO INFLADO</b></font><br/><font size=12 color='#0f172a'><b>$1.5M – $3.0M COP</b></font><br/><font size=7 color='#64748b'>Ahorro mensual directo al bloquear matemáticamente piezas no cortadas.</font>", styles["Normal"]),
        Paragraph("<font size=7 color='#64748b'><b>TIEMPO GANADO EN PLANTA</b></font><br/><font size=12 color='#7c3aed'><b>+12 Horas / Semana</b></font><br/><font size=7 color='#64748b'>Tiempo productivo recuperado al eliminar búsqueda en listas manuales.</font>", styles["Normal"]),
        Paragraph("<font size=7 color='#64748b'><b>RETORNO DE INVERSIÓN (ROI)</b></font><br/><font size=12 color='#10b981'><b>&lt; 30 Días</b></font><br/><font size=7 color='#64748b'>El sistema se paga solo desde el primer corte con el dinero recuperado.</font>", styles["Normal"]),
    ]
]
t_roi = Table(roi_data, colWidths=[180, 180, 180])
t_roi.setStyle(TableStyle([
    ('BOX', (0,0), (0,0), 1, COLOR_RED),
    ('BOX', (1,0), (1,0), 1, COLOR_PURPLE),
    ('BOX', (2,0), (2,0), 1, COLOR_GREEN),
    ('BACKGROUND', (0,0), (-1,-1), colors.white),
    ('TOPPADDING', (0,0), (-1,-1), 6),
    ('BOTTOMPADDING', (0,0), (-1,-1), 6),
    ('LEFTPADDING', (0,0), (-1,-1), 8),
    ('RIGHTPADDING', (0,0), (-1,-1), 8),
]))
elements.append(t_roi)

elements.append(Spacer(1, 10))

# Conclusión Ejecutiva
conclusion_data = [
    [
        Paragraph(
            "<b>Conclusión para la Gerencia (Andrés & Leidy):</b> Esta evolución no reemplaza la identidad de ABBI ni exige cambios traumáticos en planta. Se trata de una <b>actualización inteligente</b> que conecta la mesa de corte con los equipos de costura (fileteadora + plana, en planta o satélites sin límite de personal) y las máquinas compartidas (collarinera y multiaguja), asegurando que cada metro de tela se traduzca en utilidad líquida y control en tiempo real desde el celular.",
            ParagraphStyle("Concl", parent=styles["Normal"], fontSize=7.5, leading=10.5, textColor=COLOR_DARK)
        )
    ]
]
t_concl = Table(conclusion_data, colWidths=[540])
t_concl.setStyle(TableStyle([
    ('BACKGROUND', (0,0), (-1,-1), COLOR_BG_LIGHT),
    ('BOX', (0,0), (-1,-1), 0.5, colors.HexColor("#cbd5e1")),
    ('TOPPADDING', (0,0), (-1,-1), 6),
    ('BOTTOMPADDING', (0,0), (-1,-1), 6),
    ('LEFTPADDING', (0,0), (-1,-1), 10),
    ('RIGHTPADDING', (0,0), (-1,-1), 10),
]))
elements.append(t_concl)

elements.append(Spacer(1, 10))

# Footer
footer_data = [
    [
        Paragraph("Desarrollado para: <b>ABBI Confección</b> | Nodo Federado", subtitle_style),
        Paragraph("Tecnología: <b>CoreTextil SaaS v2.5</b> × Ecosistema Neural Nexus", subtitle_style)
    ]
]
t_footer = Table(footer_data, colWidths=[270, 270])
t_footer.setStyle(TableStyle([
    ('LINEABOVE', (0,0), (-1,-1), 0.5, colors.HexColor("#e2e8f0")),
    ('ALIGN', (1,0), (1,0), 'RIGHT'),
    ('TOPPADDING', (0,0), (-1,-1), 4),
]))
elements.append(t_footer)

doc.build(elements)

# Copiar a la raíz también
import shutil
shutil.copyfile(PDF_PATH_PUBLIC, PDF_PATH_ROOT)

print(f"PDF generado con éxito en:\n1. {PDF_PATH_PUBLIC}\n2. {PDF_PATH_ROOT}")

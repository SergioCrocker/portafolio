import React, { useState, useEffect } from 'react'

export default function Projects(){
  const [pdfs, setPdfs] = useState([])
  const [expanded, setExpanded] = useState({ unit: false, owasp: false, analysis: false, types: false, chai: false })

  useEffect(()=>{
    fetch('/src/data/pdfs.json').then(r=>r.json()).then(setPdfs).catch(()=>setPdfs([]))
  },[])

  function toggle(key){
    setExpanded(prev => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <section id="projects" className="my-5">
      <h2 style={{color: 'var(--secondary-teal)', fontWeight: '800', fontSize: '2.5rem', marginBottom: '2rem'}}>Proyectos y Documentos Técnicos</h2>
      <div className="container-fluid px-0">
        <div className="cards-grid mt-3">
  <div className={`card ${expanded.unit ? 'expanded' : 'collapsed'}`}>
          <div className="card-body">
            <h5 className="card-title">UNIT TEST</h5>
            <p className="card-text">🔗 <strong>Repositorio:</strong><br />
              <a href="https://github.com/SergioCrocker/Proy.Creditos.git" target="_blank" rel="noreferrer" className="project-link">github.com/SergioCrocker/Proy.Creditos.git</a>
            </p>
            <p className="card-text">🧪 <strong>Demo interactivo:</strong><br />
              <a href="https://d35d406d-28b4-4fe8-bda8-34b7ac570d11-00-12ztcou5hx00j.riker.replit.dev/" target="_blank" rel="noreferrer" className="project-link">Ver aplicación en vivo</a>
            </p>
          </div>
        </div>
        
  <div className={`card ${expanded.chai ? 'expanded' : 'collapsed'}`}>
          <div className="card-body">
            <h5 className="card-title">Aserciones en Chai</h5>

            <section className="mb-3">
              <p>En Chai, las aserciones son declaraciones que verifican si el resultado de una operación o función coincide con las expectativas de la prueba. Chai ofrece varios estilos de aserciones: <strong>assert</strong>, <strong>expect</strong> y <strong>should</strong>. A continuación se muestran ejemplos de cada estilo.</p>
            </section>

            <section className="card-section">
              <h6>Ejemplos de Código</h6>
              <div>
                <pre style={{margin:0, whiteSpace:'pre-wrap'}}>
const assert = require('chai').assert;
const expect = require('chai').expect;
const should = require('chai').should();

let num = 5;

// Estilo assert
assert.equal(num, 5, 'El número debería ser igual a 5');

// Estilo expect
expect(num).to.equal(5);

// Estilo should
num.should.equal(5);
                </pre>
              </div>
            </section>
          </div>
        </div>

  <div className={`card ${expanded.owasp ? 'expanded' : 'collapsed'}`}>
          <div className="card-body">
            <h5 className="card-title">Guia OWASP</h5>

            <section className="card-section">
              <h6>Guía práctica para prevenir vulnerabilidades web (OWASP Top 10 - resumen)</h6>
              <p>Esta guía está diseñada para ayudar a cualquier persona —sin conocimientos técnicos— a entender los riesgos más comunes en aplicaciones web y cómo prevenirlos de forma sencilla.</p>
              <ol>
                <li><strong>Control de Acceso Roto</strong>: validar permisos en cada operación; revisar roles y probar rutas restringidas.</li>
                <li><strong>Fallos Criptográficos</strong>: usar HTTPS y cifrado adecuado (bcrypt para contraseñas); no guardar datos sensibles en texto claro.</li>
                <li><strong>Inyecciones</strong>: validar y sanitizar todos los datos de entrada; evitar concatenaciones directas en consultas.</li>
                <li><strong>Diseño Inseguro</strong>: integrar seguridad desde el diseño, aplicar principio de mínimo privilegio y separación de funciones.</li>
                <li><strong>Configuración Incorrecta de Seguridad</strong>: revisar configuraciones, cambiar contraseñas por defecto y limitar mensajes de error.</li>
                <li><strong>Componentes Vulnerables y Obsoletos</strong>: mantener dependencias actualizadas y eliminar componentes no usados.</li>
                <li><strong>Fallos de Identificación y Autenticación</strong>: contraseñas robustas, bloqueo por intentos fallidos y 2FA donde sea posible.</li>
                <li><strong>Fallos de Integridad de Datos</strong>: usar firmas digitales y controlar origen de actualizaciones.</li>
                <li><strong>Registro y Monitoreo</strong>: registrar eventos de seguridad y establecer alertas ante comportamientos sospechosos.</li>
                <li><strong>SSRF (Falsificación de Peticiones del Lado del Servidor)</strong>: validar y restringir URLs que el servidor puede solicitar.</li>
              </ol>
            </section>

            <section className="mb-3">
              <h6>Glosario de términos</h6>
              <ul>
                <li><strong>Servidor:</strong> Computadora que almacena y ejecuta aplicaciones o sitios web.</li>
                <li><strong>Formulario:</strong> Elemento web donde el usuario escribe datos.</li>
                <li><strong>HTTPS:</strong> Protocolo seguro que cifra la información entre usuario y servidor.</li>
                <li><strong>Contraseña fuerte:</strong> Clave segura con letras, números y símbolos.</li>
                <li><strong>Autenticación:</strong> Proceso para comprobar la identidad del usuario.</li>
                <li><strong>Validación:</strong> Comprobar que los datos ingresados son correctos y seguros.</li>
              </ul>
            </section>

            <section className="card-section">
              <h6>Parte 2: Planes y casos de prueba (Catálogo CRUD - ejemplo)</h6>
              <p>Un plan de pruebas describe el enfoque, recursos y actividades para garantizar que una aplicación funcione correctamente. A continuación, un ejemplo de casos de prueba para un catálogo CRUD.</p>

              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Caso #</th>
                      <th>Funcionalidad</th>
                      <th>Descripción</th>
                      <th>Pasos para probar</th>
                      <th>Resultado esperado</th>
                      <th>Estado</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Crear producto</td>
                      <td>Verificar que se pueda crear un producto con datos válidos</td>
                      <td>1. Ir a 'Nuevo producto' 2. Ingresar datos válidos 3. Presionar 'Guardar'</td>
                      <td>El producto aparece en la lista</td>
                      <td>Alto</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Crear producto vacío</td>
                      <td>Verificar que no se permita crear un producto sin nombre</td>
                      <td>1. Ir a 'Nuevo producto' 2. Dejar nombre vacío 3. Presionar 'Guardar'</td>
                      <td>Mensaje de error indicando que el nombre es obligatorio</td>
                      <td>Alto</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Editar producto</td>
                      <td>Verificar que se pueda modificar un producto existente</td>
                      <td>1. Seleccionar producto 2. Cambiar precio 3. Guardar cambios</td>
                      <td>El producto se actualiza</td>
                      <td>Alto</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Eliminar producto</td>
                      <td>Verificar que se pueda eliminar un producto</td>
                      <td>1. Seleccionar producto 2. Clic en 'Eliminar' 3. Confirmar</td>
                      <td>El producto desaparece</td>
                      <td>Alto</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Validación duplicado</td>
                      <td>Intentar crear un producto con nombre repetido</td>
                      <td>1. Ingresar un nombre ya existente 2. Guardar</td>
                      <td>Mensaje indicando nombre en uso</td>
                      <td>Alto</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

          </div>
          <div className="card-footer bg-white">
            <button className="card-toggle" onClick={()=>toggle('owasp')}>{expanded.owasp ? 'Colapsar' : 'Expandir'}</button>
          </div>
        </div>

  <div className={`card ${expanded.analysis ? 'expanded' : 'collapsed'}`}>
          <div className="card-body">
            <h5 className="card-title">Analisis</h5>
            <section className="mb-3">
              <h6>1. Estándares internacionales y calidad del software</h6>
              <p>
                El aseguramiento de la calidad del software (SQA) tiene como objetivo principal garantizar
                que el producto final cumpla con los requisitos establecidos, tanto funcionales como no
                funcionales. Para ello, es fundamental apoyarse en estándares internacionales
                ampliamente aceptados. Estos estándares definen buenas prácticas, estructuras y
                procesos que ayudan a las organizaciones a desarrollar software con altos niveles de
                calidad, seguridad, mantenibilidad y eficiencia.
              </p>
              <ul>
                <li><strong>ISO/IEC 25010:</strong> Este modelo define ocho características de calidad del software: funcionalidad, eficiencia de desempeño, compatibilidad, usabilidad, fiabilidad, seguridad, mantenibilidad y portabilidad. Se aplica desde las etapas de diseño, ayudando a definir requisitos no funcionales. En un proyecto de desarrollo de una aplicación bancaria, por ejemplo, se puede usar para establecer criterios claros de seguridad y usabilidad. El principal beneficio de este estándar es su estructura moderna y adaptada a las necesidades actuales de los usuarios.</li>
                <li><strong>ISO/IEC/IEEE 29119:</strong> Este conjunto de normas ofrece un marco detallado para la gestión de pruebas de software. Desde la planificación hasta la ejecución y documentación, sus cinco partes permiten estandarizar el proceso de pruebas. Se utiliza en empresas que desarrollan sistemas críticos, como aeronáutica o salud, donde la trazabilidad y rigurosidad en las pruebas es clave. Los beneficios incluyen reducción de fallos en producción y mejor documentación de resultados.</li>
                <li><strong>IEEE 730:</strong> Esta norma define el contenido mínimo de un plan de aseguramiento de la calidad, incluyendo políticas, métricas, auditorías, procedimientos y responsables. Es útil desde el inicio del proyecto para establecer cómo se controlará la calidad. Aplicado, por ejemplo, en sistemas gubernamentales, permite garantizar conformidad normativa. Aporta claridad organizacional y mejora continua del proceso.</li>
              </ul>
            </section>

            <section className="card-section">
              <h6>2. Comparativa de modelos de calidad</h6>
              <p>La evolución de la ingeniería del software ha dado lugar a diferentes modelos de calidad, cada uno con enfoques particulares sobre cómo definir y medir la calidad. A continuación se comparan tres de los más conocidos: ISO/IEC 25010, McCall y Boehm.</p>
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Modelo</th>
                      <th>Atributos Evaluados</th>
                      <th>Enfoque</th>
                      <th>Época</th>
                      <th>Ventajas / Desventajas</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>ISO/IEC 25010</strong></td>
                      <td>8 características: funcionalidad, fiabilidad, seguridad, etc.</td>
                      <td>Orientado a usuario, calidad en uso y del producto.</td>
                      <td>2011</td>
                      <td>Actual, completo, adaptado a sistemas modernos. Puede ser complejo.</td>
                    </tr>
                    <tr>
                      <td><strong>McCall</strong></td>
                      <td>Corrección, eficiencia, flexibilidad, testabilidad, etc.</td>
                      <td>Divide calidad en tres perspectivas: operación, transición y revisión.</td>
                      <td>1977</td>
                      <td>Pionero, claro. Limitado en tecnologías modernas.</td>
                    </tr>
                    <tr>
                      <td><strong>Boehm</strong></td>
                      <td>Mantenibilidad, confiabilidad, eficiencia, etc.</td>
                      <td>Jerárquico, basado en objetivos del software.</td>
                      <td>1978</td>
                      <td>Estructurado. No contempla características modernas como la seguridad.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-3">
              <h6>3. Roles en el aseguramiento de calidad</h6>
              <ul>
                <li><strong>Ingeniero de Pruebas:</strong> Su rol es validar que el software cumpla los requisitos mediante casos de prueba. Interactúa con desarrolladores para corregir defectos. También puede usar herramientas de automatización y pruebas de regresión. Aporta seguridad antes del lanzamiento del producto. (Pressman, 2014)</li>
                <li><strong>Analista QA:</strong> Se enfoca en la planificación de pruebas, definición de métricas, revisión de procesos y aseguramiento de que se sigan los estándares. Se comunica con stakeholders para validar que la calidad esperada esté alineada con los objetivos del negocio.</li>
                <li><strong>Auditor de Calidad:</strong> Evalúa de forma independiente que se cumplan procedimientos de calidad, realiza auditorías internas y documenta hallazgos. Es clave para la mejora continua del proceso y para cumplir regulaciones en industrias críticas.</li>
              </ul>
            </section>

            <section className="mb-3">
              <h6>4. Análisis crítico</h6>
              <p><strong>Ejemplo 1:</strong> En 2012, Knight Capital Group sufrió una pérdida de 440 millones USD debido a un software desplegado sin pruebas completas. El sistema ejecutó operaciones financieras no deseadas por un error de configuración que pudo haberse detectado con QA formal. (Group., 2012)</p>
              <p><strong>Ejemplo 2:</strong> En 2018, un sistema médico de registro en línea provocó fallos en el diagnóstico y asignación de medicamentos debido a errores no detectados. La falta de pruebas de integración y validación con usuarios reales generó demandas legales y problemas éticos.</p>
              <p>Estos casos muestran que el aseguramiento de calidad no es una opción, sino una obligación ética y profesional en el desarrollo de software confiable, eficiente y seguro.</p>
            </section>

            <section>
              <h6>Bibliografía</h6>
              <ul>
                <li>Group., K. C. (2012). Análisis crítico. Alfa.</li>
                <li>Pressman, R. S. (2014). Roles en el aseguramiento de calidad. Alfa.</li>
                <li><a href="https://www.hiberus.com/crecemos-contigo/los-estandares-de-calidad-del-software-masimportantes/" target="_blank" rel="noreferrer">https://www.hiberus.com/crecemos-contigo/los-estandares-de-calidad-del-software-masimportantes/</a></li>
                <li><a href="https://www.redalyc.org/journal/2654/265452747018/html/" target="_blank" rel="noreferrer">https://www.redalyc.org/journal/2654/265452747018/html/</a></li>
              </ul>
            </section>
          </div>
          <div className="card-footer bg-white">
            <button className="card-toggle" onClick={()=>toggle('analysis')}>{expanded.analysis ? 'Colapsar' : 'Expandir'}</button>
          </div>
        </div>

  <div className={`card ${expanded.types ? 'expanded' : 'collapsed'}`}>
          <div className="card-body">
            <h5 className="card-title">Tipos de Prueba</h5>

            <section className="mb-3">
              <h6>Introducción</h6>
              <p>El presente trabajo tiene como finalidad realizar una investigación detallada sobre tres tipos fundamentales de pruebas de software: pruebas funcionales, pruebas de rendimiento y pruebas de seguridad. Estas pruebas son esenciales en el ciclo de vida del desarrollo de software (SDLC) porque permiten validar que el producto cumpla con las especificaciones, se desempeñe adecuadamente bajo condiciones reales y esté protegido contra posibles ataques.</p>
              <p>Implementar estas pruebas desde las primeras etapas del desarrollo reduce costos, evita fallos en producción y aumenta la satisfacción del usuario final.</p>
            </section>

            <section className="mb-3">
              <h6>Pruebas Funcionales</h6>
              <p><strong>Definición y Objetivo:</strong> Verificar que cada función del software opere conforme a los requisitos definidos. Evalúan la interacción del usuario con el sistema, el flujo de datos y las salidas generadas.</p>
              <p><strong>Tipos comunes:</strong></p>
              <ul>
                <li>Pruebas de humo (Smoke Testing)</li>
                <li>Pruebas de regresión</li>
                <li>Pruebas de integración</li>
                <li>Pruebas de aceptación del usuario (UAT)</li>
              </ul>
              <p><strong>Herramientas:</strong></p>
              <ol>
                <li>Selenium: open-source para automatizar navegadores (Chrome, Firefox, Edge).</li>
                <li>TestComplete: herramienta comercial que soporta aplicaciones web y de escritorio.</li>
              </ol>
            </section>

            <section className="mb-3">
              <h6>Pruebas de Rendimiento</h6>
              <p><strong>Definición y Objetivo:</strong> Analizan capacidad de respuesta, estabilidad y uso de recursos bajo diferentes cargas. Identifican cuellos de botella y ayudan a optimizar antes del lanzamiento.</p>
              <ul>
                <li>Pruebas de carga</li>
                <li>Pruebas de estrés</li>
                <li>Pruebas de estabilidad (soak testing)</li>
                <li>Pruebas de volumen</li>
                <li>Pruebas de picos</li>
              </ul>
            </section>

            <section className="mb-3">
              <h6>Pruebas de Seguridad</h6>
              <p><strong>Definición y Objetivo:</strong> Identificar vulnerabilidades que puedan ser explotadas por atacantes, comprometiendo confidencialidad, integridad o disponibilidad.</p>
              <p><strong>Herramientas:</strong></p>
              <ol>
                <li>OWASP ZAP: open-source para escaneo automatizado y manual.</li>
                <li>Burp Suite: herramienta comercial utilizada por pentesters.</li>
              </ol>
            </section>

            <section className="mb-3">
              <h6>Conclusiones</h6>
              <p>Implementar pruebas funcionales, de rendimiento y de seguridad es fundamental para garantizar la calidad del software. La elección de herramientas dependerá del presupuesto, la complejidad del proyecto y la experiencia del equipo. Las pruebas continuas reducen riesgos y mejoran la experiencia del usuario.</p>
            </section>

            <section className="mb-3">
              <h6>Recomendaciones</h6>
              <ul>
                <li>Realizar una evaluación previa de necesidades antes de seleccionar herramientas.</li>
                <li>Integrar pruebas en cada fase del ciclo de vida del desarrollo.</li>
                <li>Capacitar continuamente al equipo de QA y desarrollo.</li>
                <li>Documentar y analizar resultados para mejora continua.</li>
              </ul>
            </section>
          </div>
          <div className="card-footer bg-white">
            <button className="card-toggle" onClick={()=>toggle('types')}>{expanded.types ? 'Colapsar' : 'Expandir'}</button>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}

function PdfText({text}){
  const [open, setOpen] = useState(false)
  if(!text) return <p className="text-muted">No hay texto extraído.</p>
  const preview = text.slice(0, 500)
  return (
    <div>
      <p style={{whiteSpace:'pre-wrap'}}>{open ? text : preview + (text.length>500 ? '...' : '')}</p>
      {text.length>500 && (
        <button className="btn btn-sm btn-outline-danger" onClick={()=>setOpen(s=>!s)}>{open ? 'Mostrar menos' : 'Leer más'}</button>
      )}
    </div>
  )
}

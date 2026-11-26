// Guide articles in all four site languages. English is the original; the
// TR/ES/RU versions are translations of it, sentence for sentence, served at
// /tr/guides/..., /es/guides/..., /ru/guides/... with hreflang links between
// them. Every number is generic industry math, identical in every language -
// no fabricated user claims. Money stays in US format ($4,100, $0.41) in every
// language, like the app.
//
// Vocabulary follows the app's own locale files: TR "Aracı (Broker)", "boş
// mil", "brüt", "kesintiler"; ES "bróker", "millas vacías", "bruto",
// "deducciones"; RU "брокер", "пустые мили", "гросс", "удержания". Terms the
// drivers use in English on the job (rate con, detention, layover, TONU, ELD,
// escrow, practical miles) stay in English.
import { ALL_LANGS } from "./locale";

export const GUIDES = [
  {
    slug: "cost-per-mile-guide",
    date: "2026-08-11",
    readMinutes: 5,
    content: {
      en: {
        title: "Cost Per Mile: The Only Number That Keeps Your Truck Profitable",
        description:
          "What cost per mile (CPM) really includes, how to calculate yours in five minutes, and how to use it on every rate decision.",
        sections: [
          {
            p: [
              "Ask ten owner-operators what their cost per mile is and most will guess. But CPM is the number every single rate decision depends on: a load that pays above your cost per mile makes you money, and a load below it costs you money to haul - no matter how big the gross looks.",
            ],
          },
          {
            h2: "What goes into cost per mile",
            p: ["Your total cost per mile is the sum of two very different kinds of cost:"],
            ul: [
              "Fixed costs - truck payment, insurance, permits, trailer rent, parking, software. You pay these whether the wheels turn or not.",
              "Variable costs - fuel, maintenance, tires, tolls. These scale with every mile you run.",
            ],
          },
          {
            h2: "The five-minute calculation",
            p: [
              "Add up your fixed costs for one month and divide by the miles you actually run in a month. Then add your fuel cost per mile (fuel price divided by your truck's MPG) and a maintenance reserve per mile.",
              "Example: $4,100/month fixed ÷ 10,000 miles = $0.41. Fuel at $3.60/gal ÷ 6.5 MPG = $0.55. Maintenance reserve $0.18. Total: $1.14 per mile - every mile, loaded or empty.",
            ],
          },
          {
            h2: "The mistake that hides losses",
            p: [
              "Most drivers divide costs by loaded miles only. But your truck doesn't care whether the trailer is full - deadhead miles burn the same fuel. Divide by ALL miles, then judge rates against total miles for the round trip, not just the loaded leg.",
            ],
          },
          {
            h2: "Using CPM on every rate call",
            p: [
              "Once you know your number, negotiation gets simple: rate per total mile above CPM = profit; below = loss. A $2,000 load for 700 loaded miles looks like $2.86/mi - but if it takes 300 deadhead miles to get there, it's really $2.00/mi against 1,000 miles. At $1.14 CPM you still profit; at $1.90 CPM you're working for pocket change.",
              "Recalculate monthly. Fuel prices move, insurance renews, miles change - a CPM from last winter can quietly turn wrong.",
            ],
          },
        ],
      },
      tr: {
        title: "Mil Başı Maliyet: Kamyonunu Kârlı Tutan Tek Rakam",
        description:
          "Mil başı maliyetin (CPM) gerçekte neleri kapsadığı, kendi rakamını beş dakikada nasıl hesaplayacağın ve her rate kararında onu nasıl kullanacağın.",
        sections: [
          {
            p: [
              "On owner-operator'a mil başı maliyetlerini sor, çoğu tahmin yürütür. Oysa CPM, her rate kararının dayandığı rakamdır: mil başı maliyetinin üzerinde ödeyen bir yük sana para kazandırır, altında kalan bir yük ise brütü ne kadar büyük görünürse görünsün taşıması sana para kaybettirir.",
            ],
          },
          {
            h2: "Mil başı maliyete neler girer",
            p: ["Toplam mil başı maliyetin, birbirinden çok farklı iki tür giderin toplamıdır:"],
            ul: [
              "Sabit giderler - kamyon ödemesi, sigorta, izinler, treyler kirası, park, yazılım. Tekerlekler dönse de dönmese de bunları ödersin.",
              "Değişken giderler - yakıt, bakım, lastik, otoyol geçişleri. Bunlar sürdüğün her milde artar.",
            ],
          },
          {
            h2: "Beş dakikalık hesap",
            p: [
              "Bir aylık sabit giderlerini topla ve ayda gerçekten sürdüğün mile böl. Sonra mil başı yakıt maliyetini (yakıt fiyatı ÷ kamyonunun MPG'si) ve mil başı bakım payını ekle.",
              "Örnek: aylık $4,100 sabit gider ÷ 10,000 mil = $0.41. Galonu $3.60 olan yakıt ÷ 6.5 MPG = $0.55. Bakım payı $0.18. Toplam: mil başı $1.14 - yüklü ya da boş, her mil için.",
            ],
          },
          {
            h2: "Zararı gizleyen hata",
            p: [
              "Çoğu şoför giderleri yalnızca yüklü millere böler. Ama kamyonun treylerin dolu olup olmadığına bakmaz - boş miller (deadhead) de aynı yakıtı yakar. Giderleri TÜM millere böl, sonra rate'leri yalnızca yüklü bacağa göre değil, gidiş-dönüşün toplam miline göre değerlendir.",
            ],
          },
          {
            h2: "CPM'i her rate görüşmesinde kullan",
            p: [
              "Rakamını bildiğinde pazarlık basitleşir: toplam mil başına düşen rate CPM'in üzerindeyse kâr, altındaysa zarar. 700 yüklü mil için $2,000'lık bir yük mil başı $2.86 gibi görünür - ama oraya ulaşmak 300 boş mil gerektiriyorsa, aslında 1,000 mile karşılık mil başı $2.00'dır. CPM'in $1.14 ise hâlâ kârdasın; $1.90 ise cep harçlığına çalışıyorsun.",
              "Her ay yeniden hesapla. Yakıt fiyatları değişir, sigorta yenilenir, miller değişir - geçen kışın CPM'i sessizce yanlışa dönebilir.",
            ],
          },
        ],
      },
      es: {
        title: "Costo por milla: el único número que mantiene tu camión rentable",
        description:
          "Qué incluye realmente el costo por milla (CPM), cómo calcular el tuyo en cinco minutos y cómo usarlo en cada decisión de tarifa.",
        sections: [
          {
            p: [
              "Pregúntales a diez owner-operators cuál es su costo por milla y la mayoría lo adivinará. Pero el CPM es el número del que depende cada decisión de tarifa: una carga que paga por encima de tu costo por milla te deja dinero, y una que paga por debajo te cuesta dinero transportarla, por grande que parezca el bruto.",
            ],
          },
          {
            h2: "Qué entra en el costo por milla",
            p: ["Tu costo total por milla es la suma de dos tipos de costo muy distintos:"],
            ul: [
              "Costos fijos - pago del camión, seguro, permisos, renta del tráiler, estacionamiento, software. Los pagas ruede o no ruede el camión.",
              "Costos variables - combustible, mantenimiento, llantas, peajes. Crecen con cada milla que manejas.",
            ],
          },
          {
            h2: "El cálculo de cinco minutos",
            p: [
              "Suma tus costos fijos de un mes y divídelos entre las millas que realmente manejas en un mes. Luego súmales tu costo de combustible por milla (precio del combustible dividido entre las MPG de tu camión) y una reserva de mantenimiento por milla.",
              "Ejemplo: $4,100/mes de costos fijos ÷ 10,000 millas = $0.41. Combustible a $3.60/gal ÷ 6.5 MPG = $0.55. Reserva de mantenimiento: $0.18. Total: $1.14 por milla - cada milla, cargada o vacía.",
            ],
          },
          {
            h2: "El error que esconde las pérdidas",
            p: [
              "La mayoría de los conductores divide los costos solo entre las millas cargadas. Pero a tu camión no le importa si el tráiler va lleno: las millas vacías (deadhead) queman el mismo combustible. Divide entre TODAS las millas y luego evalúa las tarifas contra las millas totales del viaje redondo, no solo del tramo cargado.",
            ],
          },
          {
            h2: "Usa el CPM en cada negociación de tarifa",
            p: [
              "Cuando conoces tu número, negociar se vuelve sencillo: tarifa por milla total por encima del CPM = ganancia; por debajo = pérdida. Una carga de $2,000 por 700 millas cargadas parece $2.86/mi, pero si llegar a ella cuesta 300 millas vacías, en realidad son $2.00/mi sobre 1,000 millas. Con un CPM de $1.14 todavía ganas; con un CPM de $1.90 trabajas por centavos.",
              "Recalcula cada mes. El precio del combustible cambia, el seguro se renueva, las millas varían: un CPM del invierno pasado puede volverse incorrecto sin que lo notes.",
            ],
          },
        ],
      },
      ru: {
        title: "Стоимость мили: единственное число, которое держит ваш трак в плюсе",
        description:
          "Что на самом деле входит в стоимость мили (CPM), как посчитать свою за пять минут и как опираться на неё в каждом решении по ставке.",
        sections: [
          {
            p: [
              "Спросите десять owner-operator'ов, какая у них стоимость мили, и большинство назовёт число наугад. А ведь CPM - это число, от которого зависит каждое решение по ставке: груз, который платит выше вашей стоимости мили, приносит деньги, а груз ниже неё возить себе в убыток, каким бы большим ни выглядел гросс.",
            ],
          },
          {
            h2: "Из чего складывается стоимость мили",
            p: ["Полная стоимость мили - это сумма двух очень разных видов расходов:"],
            ul: [
              "Постоянные расходы - платёж за трак, страховка, пермиты, аренда трейлера, парковка, софт. Вы платите их, крутятся колёса или нет.",
              "Переменные расходы - топливо, обслуживание, шины, платные дороги. Они растут с каждой пройденной милей.",
            ],
          },
          {
            h2: "Расчёт за пять минут",
            p: [
              "Сложите постоянные расходы за месяц и разделите на мили, которые вы реально проезжаете за месяц. Затем прибавьте стоимость топлива на милю (цена топлива, делённая на MPG вашего трака) и резерв на обслуживание на милю.",
              "Пример: $4,100 постоянных расходов в месяц ÷ 10,000 миль = $0.41. Топливо по $3.60/галлон ÷ 6.5 MPG = $0.55. Резерв на обслуживание - $0.18. Итого: $1.14 за милю - за каждую милю, гружёную или пустую.",
            ],
          },
          {
            h2: "Ошибка, которая прячет убытки",
            p: [
              "Большинство водителей делят расходы только на гружёные мили. Но траку всё равно, полон ли трейлер: пустые мили (deadhead) сжигают столько же топлива. Делите на ВСЕ мили и оценивайте ставки по общему пробегу всего рейса туда и обратно, а не только по гружёному плечу.",
            ],
          },
          {
            h2: "CPM в каждом разговоре о ставке",
            p: [
              "Когда вы знаете своё число, торговаться просто: ставка за общую милю выше CPM - прибыль, ниже - убыток. Груз за $2,000 на 700 гружёных миль выглядит как $2.86 за милю, но если до него 300 пустых миль, на деле это $2.00 за милю на 1,000 миль. При CPM $1.14 вы всё ещё в плюсе; при CPM $1.90 вы работаете за копейки.",
              "Пересчитывайте каждый месяц. Цены на топливо меняются, страховка продлевается, пробег меняется - CPM прошлой зимы может незаметно стать неверным.",
            ],
          },
        ],
      },
    },
  },
  {
    slug: "reduce-deadhead-miles",
    date: "2026-08-11",
    readMinutes: 4,
    content: {
      en: {
        title: "Deadhead Miles: Why Empty Miles Eat Your Profit (and How to Cut Them)",
        description:
          "Empty miles cost the same fuel as loaded ones and pay nothing. How to measure your deadhead percentage and the habits that shrink it.",
        sections: [
          {
            p: [
              "A deadhead mile costs you exactly as much as a loaded one - same fuel, same tire wear, same hours - and pays you nothing. If your cost per mile is $1.14, every 100 empty miles is $114 straight out of your pocket before the next load pays a cent.",
            ],
          },
          {
            h2: "Know your deadhead percentage",
            p: [
              "Deadhead % = empty miles ÷ total miles. Under 10% is strong; 15% is common; above 20% means your routing - not your rates - is the biggest leak in the business. You can't improve it if you don't track loaded and empty miles separately on every single load.",
            ],
          },
          {
            h2: "Habits that cut empty miles",
            ul: [
              "Book the next load before you deliver the current one - the worst deadhead decisions happen when you're already empty and burning hours.",
              "Price the deadhead into the rate: judge every offer against total miles (deadhead + loaded), not the loaded leg alone.",
              "Learn your dead zones. Certain markets pay well inbound and terribly outbound - a great rate into a bad market is often a bad round trip.",
              "Prefer triangles over out-and-backs: three decent legs that keep the trailer full usually beat one great leg with a long empty return.",
              "Review your own history monthly: which brokers, lanes and regions actually produced the empty miles?",
            ],
          },
          {
            h2: "Measure it, then manage it",
            p: [
              "Drivers who track deadhead on every load start seeing patterns in weeks: the same broker who shorts the reload, the same city that strands the truck. The fix isn't heroic negotiating - it's refusing round trips that were losers before you ever picked up.",
            ],
          },
        ],
      },
      tr: {
        title: "Boş Mil (Deadhead): Boş Miller Kârını Neden Yer (ve Nasıl Azaltırsın)",
        description:
          "Boş miller yüklü miller kadar yakıt yakar ve hiçbir şey ödemez. Boş mil yüzdeni nasıl ölçeceğin ve onu küçülten alışkanlıklar.",
        sections: [
          {
            p: [
              "Bir boş mil (deadhead) sana tam olarak yüklü bir mil kadar mal olur - aynı yakıt, aynı lastik aşınması, aynı saatler - ve sana hiçbir şey ödemez. Mil başı maliyetin $1.14 ise, her 100 boş mil, bir sonraki yük tek kuruş ödemeden önce doğrudan cebinden çıkan $114 demektir.",
            ],
          },
          {
            h2: "Boş mil yüzdeni bil",
            p: [
              "Boş mil % = boş miller ÷ toplam mil. %10'un altı güçlü; %15 yaygın; %20'nin üzeri ise işindeki en büyük sızıntının rate'lerin değil rotan olduğu anlamına gelir. Her yükte yüklü ve boş milleri ayrı ayrı takip etmezsen bunu iyileştiremezsin.",
            ],
          },
          {
            h2: "Boş mili azaltan alışkanlıklar",
            ul: [
              "Elindeki yükü teslim etmeden bir sonrakini ayarla - en kötü boş mil kararları, zaten boşken ve saatler yanarken verilir.",
              "Boş mili rate'e kat: her teklifi yalnızca yüklü bacağa göre değil, toplam mile (boş + yüklü) göre değerlendir.",
              "Ölü bölgelerini öğren. Bazı pazarlar gelen yüke iyi, çıkan yüke çok kötü öder - kötü bir pazara giden harika bir rate, çoğu zaman kötü bir gidiş-dönüştür.",
              "Git-gel yerine üçgen rotaları tercih et: treyleri dolu tutan üç makul bacak, genellikle uzun bir boş dönüşü olan tek harika bacaktan iyidir.",
              "Kendi geçmişini her ay gözden geçir: boş milleri gerçekte hangi aracılar (broker), hatlar ve bölgeler üretti?",
            ],
          },
          {
            h2: "Önce ölç, sonra yönet",
            p: [
              "Her yükte boş mili takip eden şoförler birkaç hafta içinde kalıpları görmeye başlar: dönüş yükünde hep eksik bırakan aynı broker, kamyonu hep mahsur bırakan aynı şehir. Çözüm kahramanca pazarlık değil - daha yükü almadan zararına olan gidiş-dönüşleri reddetmektir.",
            ],
          },
        ],
      },
      es: {
        title: "Millas vacías (deadhead): por qué se comen tu ganancia y cómo reducirlas",
        description:
          "Las millas vacías gastan el mismo combustible que las cargadas y no pagan nada. Cómo medir tu porcentaje de deadhead y los hábitos que lo reducen.",
        sections: [
          {
            p: [
              "Una milla vacía te cuesta exactamente lo mismo que una cargada - el mismo combustible, el mismo desgaste de llantas, las mismas horas - y no te paga nada. Si tu costo por milla es de $1.14, cada 100 millas vacías son $114 que salen directo de tu bolsillo antes de que la siguiente carga pague un centavo.",
            ],
          },
          {
            h2: "Conoce tu porcentaje de deadhead",
            p: [
              "Deadhead % = millas vacías ÷ millas totales. Menos del 10% es muy bueno; 15% es lo común; más del 20% significa que tu ruteo - no tus tarifas - es la mayor fuga del negocio. No puedes mejorarlo si no registras las millas cargadas y las vacías por separado en cada carga.",
            ],
          },
          {
            h2: "Hábitos que reducen las millas vacías",
            ul: [
              "Reserva la siguiente carga antes de entregar la actual: las peores decisiones de deadhead se toman cuando ya vas vacío y quemando horas.",
              "Incluye el deadhead en la tarifa: evalúa cada oferta contra las millas totales (vacías + cargadas), no solo contra el tramo cargado.",
              "Conoce tus zonas muertas. Algunos mercados pagan bien de entrada y muy mal de salida: una gran tarifa hacia un mal mercado suele ser un mal viaje redondo.",
              "Prefiere los triángulos a la ida y vuelta: tres tramos decentes que mantienen el tráiler lleno suelen superar a un gran tramo con un largo regreso vacío.",
              "Revisa tu propio historial cada mes: ¿qué brókers, rutas y regiones produjeron realmente las millas vacías?",
            ],
          },
          {
            h2: "Mídelo y luego adminístralo",
            p: [
              "Los conductores que registran el deadhead en cada carga empiezan a ver patrones en pocas semanas: el mismo bróker que siempre falla con la recarga, la misma ciudad que siempre deja el camión varado. La solución no es negociar como un héroe: es rechazar los viajes redondos que ya eran perdedores antes de recoger la carga.",
            ],
          },
        ],
      },
      ru: {
        title: "Пустые мили (deadhead): почему они съедают прибыль и как их сократить",
        description:
          "Пустые мили сжигают столько же топлива, сколько гружёные, и ничего не приносят. Как измерить свой процент deadhead и какие привычки его снижают.",
        sections: [
          {
            p: [
              "Пустая миля обходится вам ровно во столько же, во сколько гружёная, - то же топливо, тот же износ шин, те же часы, - и не приносит ни цента. Если ваша стоимость мили $1.14, каждые 100 пустых миль - это $114 прямо из вашего кармана ещё до того, как следующий груз заплатит хоть что-то.",
            ],
          },
          {
            h2: "Знайте свой процент deadhead",
            p: [
              "Deadhead % = пустые мили ÷ общий пробег. Меньше 10% - отлично; 15% - обычное дело; больше 20% значит, что главная утечка в бизнесе - маршруты, а не ставки. Улучшить это не получится, если не учитывать гружёные и пустые мили отдельно по каждому грузу.",
            ],
          },
          {
            h2: "Привычки, которые сокращают пустые мили",
            ul: [
              "Берите следующий груз до того, как сдадите текущий: худшие решения по пустым милям принимаются, когда вы уже пустой и теряете часы.",
              "Закладывайте deadhead в ставку: оценивайте каждое предложение по общему пробегу (пустые + гружёные мили), а не только по гружёному плечу.",
              "Изучите свои «мёртвые зоны». Одни рынки хорошо платят на въезд и ужасно на выезд: отличная ставка в плохой рынок часто оборачивается плохим рейсом туда и обратно.",
              "Выбирайте треугольники вместо «туда и обратно»: три нормальных плеча с полным трейлером обычно лучше одного отличного плеча с долгим пустым возвратом.",
              "Каждый месяц разбирайте собственную историю: какие брокеры, направления и регионы на самом деле дали пустые мили?",
            ],
          },
          {
            h2: "Сначала измеряйте, потом управляйте",
            p: [
              "Водители, которые учитывают deadhead по каждому грузу, уже через несколько недель видят закономерности: один и тот же брокер, который подводит с обратным грузом, один и тот же город, где трак застревает. Решение - не героические торги, а отказ от рейсов, которые были убыточными ещё до погрузки.",
            ],
          },
        ],
      },
    },
  },
  {
    slug: "weekly-settlements-explained",
    date: "2026-08-11",
    readMinutes: 5,
    content: {
      en: {
        title: "How to Read Your Weekly Settlement (Without Getting Shorted)",
        description:
          "Line by line: gross, deductions, accessorials, advances and escrow - and the checks that catch settlement errors before they cost you.",
        sections: [
          {
            p: [
              "Your settlement is the weekly truth of your business - and settlement errors are common enough that reading it line by line pays better per minute than driving. Here's what each block means and what to check.",
            ],
          },
          {
            h2: "The blocks of a settlement",
            ul: [
              "Gross revenue - every load delivered in the period, at the agreed rate. Check it against your own records load by load, not as a lump sum.",
              "Accessorial pay - detention, layover, extra stops, TONU. The most commonly missing line: if you waited 4 hours and it's not here, that's your money.",
              "Deductions - fuel advances, insurance, trailer rent, ELD, dispatch fees. Verify recurring ones didn't double-charge and one-time ones actually end.",
              "Escrow/maintenance holds - money moved, not money spent. Track the running balance; you're owed it back eventually.",
              "Net pay - what actually hits the bank.",
            ],
          },
          {
            h2: "The three checks that catch most errors",
            p: [
              "First: does every delivered load appear, at the rate on the rate con? Second: are the miles right - was pay calculated on the miles you agreed to, not a shorter practical-miles figure? Third: do this week's deductions match last week's, and can you explain every difference?",
            ],
          },
          {
            h2: "Keep your own books",
            p: [
              "The only way to audit a settlement is to have your own number for what the week should have paid - before the settlement arrives. That means logging every load with its rate, miles and accessorials as it happens, not reconstructing the week from memory on Friday.",
              "Whether you do that in a notebook, a spreadsheet, or an app that builds the weekly settlement for you automatically, the habit is the same: your records first, their paperwork second.",
            ],
          },
        ],
      },
      tr: {
        title: "Haftalık Settlement'ını Nasıl Okursun (Eksik Ödeme Almadan)",
        description:
          "Satır satır: brüt, kesintiler, ek ödemeler (accessorial), avanslar ve escrow - ve settlement hatalarını sana mal olmadan yakalayan kontroller.",
        sections: [
          {
            p: [
              "Settlement'ın, işinin haftalık gerçeğidir - ve settlement hataları o kadar yaygındır ki onu satır satır okumak, dakika başına direksiyondan daha çok kazandırır. İşte her bölümün ne anlama geldiği ve neyi kontrol etmen gerektiği.",
            ],
          },
          {
            h2: "Bir settlement'ın bölümleri",
            ul: [
              "Brüt gelir - dönem içinde teslim edilen her yük, anlaşılan rate üzerinden. Toplu bir tutar olarak değil, kendi kayıtlarınla yük yük karşılaştır.",
              "Ek ödemeler (accessorial) - detention, layover, ekstra duraklar, TONU. En sık eksik çıkan satır budur: 4 saat beklediysen ve burada yoksa, o senin paran.",
              "Kesintiler - yakıt avansları, sigorta, treyler kirası, ELD, dispeç ücretleri. Düzenli kesintilerin iki kez alınmadığını, tek seferlik olanların gerçekten bittiğini doğrula.",
              "Escrow/bakım blokajları - harcanan değil, kenara ayrılan para. Birikmiş bakiyeyi takip et; eninde sonunda sana geri ödenmesi gerekir.",
              "Net ödeme - hesabına gerçekten yatan tutar.",
            ],
          },
          {
            h2: "Hataların çoğunu yakalayan üç kontrol",
            p: [
              "Birincisi: teslim edilen her yük, rate confirmation'daki rate ile yer alıyor mu? İkincisi: miller doğru mu - ödeme daha kısa bir practical miles rakamına göre değil, anlaştığın millere göre mi hesaplandı? Üçüncüsü: bu haftanın kesintileri geçen haftakilerle uyuşuyor mu ve her farkı açıklayabiliyor musun?",
            ],
          },
          {
            h2: "Kendi defterini tut",
            p: [
              "Bir settlement'ı denetlemenin tek yolu, settlement gelmeden önce haftanın ne ödemesi gerektiğine dair kendi rakamına sahip olmaktır. Bu da haftayı cuma günü hafızandan yeniden kurmak yerine, her yükü rate'i, milleri ve ek ödemeleriyle birlikte olduğu anda kaydetmek demektir.",
              "Bunu bir deftere, bir tabloya ya da haftalık settlement'ı senin için otomatik hazırlayan bir uygulamaya kaydetsen de alışkanlık aynıdır: önce senin kayıtların, sonra onların evrakı.",
            ],
          },
        ],
      },
      es: {
        title: "Cómo leer tu liquidación semanal (sin que te paguen de menos)",
        description:
          "Línea por línea: bruto, deducciones, pagos adicionales (accessorials), adelantos y escrow, y las revisiones que detectan errores antes de que te cuesten.",
        sections: [
          {
            p: [
              "Tu liquidación (settlement) es la verdad semanal de tu negocio, y los errores en ella son tan comunes que leerla línea por línea paga mejor por minuto que manejar. Esto es lo que significa cada bloque y qué revisar.",
            ],
          },
          {
            h2: "Los bloques de una liquidación",
            ul: [
              "Ingreso bruto - cada carga entregada en el periodo, a la tarifa acordada. Compáralo carga por carga con tus propios registros, no como una suma global.",
              "Pagos adicionales (accessorials) - detention, layover, paradas extra, TONU. Es la línea que más falta: si esperaste 4 horas y no aparece aquí, es tu dinero.",
              "Deducciones - adelantos de combustible, seguro, renta del tráiler, ELD, comisiones de despacho. Verifica que las recurrentes no se cobren dos veces y que las únicas realmente terminen.",
              "Retenciones de escrow/mantenimiento - dinero apartado, no gastado. Lleva el saldo acumulado; tarde o temprano te lo deben devolver.",
              "Pago neto - lo que realmente llega al banco.",
            ],
          },
          {
            h2: "Las tres revisiones que detectan la mayoría de los errores",
            p: [
              "Primera: ¿aparece cada carga entregada, a la tarifa de la confirmación de tarifa (rate con)? Segunda: ¿son correctas las millas? ¿Se calculó el pago con las millas que acordaste y no con una cifra menor de practical miles? Tercera: ¿las deducciones de esta semana coinciden con las de la semana pasada y puedes explicar cada diferencia?",
            ],
          },
          {
            h2: "Lleva tus propios libros",
            p: [
              "La única forma de auditar una liquidación es tener tu propio número de lo que la semana debió pagar, antes de que llegue la liquidación. Eso significa registrar cada carga con su tarifa, sus millas y sus pagos adicionales en el momento, no reconstruir la semana de memoria el viernes.",
              "Ya sea en una libreta, una hoja de cálculo o una app que arma la liquidación semanal por ti automáticamente, el hábito es el mismo: primero tus registros, después sus papeles.",
            ],
          },
        ],
      },
      ru: {
        title: "Как читать еженедельный расчёт (и не получить меньше положенного)",
        description:
          "Строка за строкой: гросс, удержания, доплаты (accessorials), авансы и escrow - и проверки, которые ловят ошибки в расчёте, пока они не стоили вам денег.",
        sections: [
          {
            p: [
              "Расчёт (settlement) - это еженедельная правда о вашем бизнесе, а ошибки в нём встречаются так часто, что построчная проверка приносит за минуту больше, чем вождение. Вот что означает каждый блок и что в нём проверять.",
            ],
          },
          {
            h2: "Из каких блоков состоит расчёт",
            ul: [
              "Гросс - каждый груз, доставленный за период, по согласованной ставке. Сверяйте его со своими записями по каждому грузу, а не одной суммой.",
              "Доплаты (accessorials) - detention, layover, дополнительные остановки, TONU. Чаще всего пропадает именно эта строка: если вы ждали 4 часа, а здесь этого нет, - это ваши деньги.",
              "Удержания - топливные авансы, страховка, аренда трейлера, ELD, оплата диспетчера. Проверьте, что регулярные удержания не списаны дважды, а разовые действительно закончились.",
              "Escrow и резерв на обслуживание - деньги отложенные, а не потраченные. Следите за накопленным балансом: рано или поздно его должны вернуть.",
              "Чистая оплата - то, что реально приходит на счёт.",
            ],
          },
          {
            h2: "Три проверки, которые ловят большинство ошибок",
            p: [
              "Первая: есть ли в расчёте каждый доставленный груз и по ставке из rate confirmation? Вторая: верны ли мили - посчитана ли оплата по милям, о которых вы договорились, а не по меньшей цифре practical miles? Третья: совпадают ли удержания этой недели с прошлой и можете ли вы объяснить каждое отличие?",
            ],
          },
          {
            h2: "Ведите собственный учёт",
            p: [
              "Единственный способ проверить расчёт - иметь собственную цифру того, сколько должна была принести неделя, ещё до того, как придёт расчёт. Это значит записывать каждый груз со ставкой, милями и доплатами сразу, а не восстанавливать неделю по памяти в пятницу.",
              "Ведёте ли вы учёт в блокноте, в таблице или в приложении, которое само собирает еженедельный расчёт, привычка одна: сначала ваши записи, потом их бумаги.",
            ],
          },
        ],
      },
    },
  },
  {
    slug: "how-to-read-a-rate-confirmation",
    date: "2026-11-26",
    readMinutes: 6,
    content: {
      en: {
        title: "How to Read a Rate Confirmation Before You Accept the Load",
        description:
          "What each part of a rate confirmation means, from linehaul and accessorials to detention and payment terms, and the red flags to check before you sign.",
        sections: [
          {
            p: [
              "A rate confirmation (rate con) is the contract for one load: it says what you haul, where, when and what you get paid. Brokers send it fast and expect a fast signature, but a few minutes reading it line by line is how you avoid hauling a load on terms you never agreed to on the phone.",
            ],
          },
          {
            h2: "The basics: who, what and the load number",
            p: [
              "Start at the top. Check the load number (you will need it on every invoice, message and settlement line), the broker's company name and MC number, and the contact who booked the load. Then compare the commodity, weight and equipment type with what you were told and with what your truck can legally carry.",
            ],
          },
          {
            h2: "Stops and appointment windows",
            p: [
              "Every stop should have a full address, a date and either a firm appointment or a window (for example, pickup 08:00 to 14:00). Watch for extra stops that were not mentioned on the call, a delivery time that leaves no room for your legal driving hours, and whether a stop is FCFS (first come, first served) or by appointment. The miles on the rate con should be close to your own routing; if they are short, ask before you sign.",
            ],
          },
          {
            h2: "The money: linehaul, fuel and accessorials",
            p: ["The rate is usually split into parts. Make sure you know which number is the total you will be paid."],
            ul: [
              "Linehaul - the base pay for moving the load from pickup to delivery.",
              "Fuel surcharge - sometimes listed separately, sometimes included in an all-in rate. Know which one you agreed to.",
              "Accessorials - extra pay for extra work: detention, layover, extra stops, lumper, TONU. If it is not written on the rate con, expect a fight to get it paid.",
              "Detention and layover terms - how many hours are free, what it pays per hour or per day after that, and what proof the broker requires (for example: 2 hours free, then $50 per hour, with in and out times on the BOL).",
              "TONU (truck ordered, not used) - what you get paid if the load is cancelled after you were dispatched or arrived.",
              "Payment terms - how many days until you get paid, and whether quick pay is offered and at what fee.",
            ],
          },
          {
            h2: "Red flags before you accept",
            p: [
              "Check these before you sign. If something is wrong, ask for a corrected rate con: once the load is on your trailer, most of your leverage is gone.",
            ],
            ul: [
              "The rate on the rate con is lower than the rate you agreed to on the phone.",
              "Detention, layover or TONU are missing, or come with rules you cannot realistically meet.",
              "Unexplained fines or deductions for things like late arrival, no tracking or paperwork delays.",
              "A broker name or MC number that does not match the company you spoke with.",
              "Stops, weights or a commodity that differ from what you were told.",
            ],
          },
          {
            h2: "Keep it on record",
            p: [
              "Save every rate con with its load. It is your proof when a settlement comes in short or detention goes missing. In Load Zeta you can forward the rate con (text, PDF or photo) to the Telegram bot @truckerlogbot or use Fill from document in the app: it reads the load number, broker, stops, dates, miles and rate, and you check everything before saving.",
            ],
          },
        ],
      },
      tr: {
        title: "Rate Confirmation Nasıl Okunur: Yükü Kabul Etmeden Önce Bakman Gerekenler",
        description:
          "Rate confirmation'daki her bölümün anlamı, linehaul ve ek ödemelerden detention ve ödeme koşullarına kadar, ve imzalamadan önce kontrol etmen gereken uyarı işaretleri.",
        sections: [
          {
            p: [
              "Rate confirmation (rate con), tek bir yükün sözleşmesidir: ne taşıdığını, nereye, ne zaman ve sana ne kadar ödeneceğini yazar. Aracılar (broker) onu hızlı gönderir ve hızlı imza bekler, ama birkaç dakika ayırıp satır satır okumak, telefonda hiç kabul etmediğin koşullarla yük taşımaktan seni korur.",
            ],
          },
          {
            h2: "Temel bilgiler: kim, ne ve yük numarası",
            p: [
              "En üstten başla. Yük numarasını (her faturada, mesajda ve settlement satırında ona ihtiyacın olacak), broker'ın şirket adını ve MC numarasını, yükü ayarlayan kişiyi kontrol et. Sonra yükün cinsini, ağırlığını ve ekipman tipini sana söylenenle ve kamyonunun yasal olarak taşıyabileceğiyle karşılaştır.",
            ],
          },
          {
            h2: "Duraklar ve randevu saatleri",
            p: [
              "Her durağın tam adresi, tarihi ve ya kesin bir randevusu ya da bir saat aralığı olmalı (örneğin yükleme 08:00 ile 14:00 arası). Telefonda konuşulmayan ekstra duraklara, yasal sürüş saatlerine yer bırakmayan bir teslim saatine ve durağın FCFS (first come, first served, yani sıra usulü) mü yoksa randevulu mu olduğuna dikkat et. Rate con'da yazan mil, kendi rota hesabına yakın olmalı; eksikse imzalamadan önce sor.",
            ],
          },
          {
            h2: "Para: linehaul, yakıt ve ek ödemeler",
            p: ["Rate genellikle parçalara ayrılır. Sana ödenecek toplamın hangi rakam olduğunu bildiğinden emin ol."],
            ul: [
              "Linehaul - yükü yükleme noktasından teslim noktasına taşımanın taban ücreti.",
              "Yakıt ek ücreti (fuel surcharge) - bazen ayrı yazılır, bazen her şey dahil (all-in) bir rate'in içindedir. Hangisinde anlaştığını bil.",
              "Ek ödemeler (accessorial) - ekstra iş için ekstra ödeme: detention, layover, ekstra duraklar, lumper, TONU. Rate con'da yazılı değilse, ödetmek için uğraşman gerekeceğini bil.",
              "Detention ve layover koşulları - kaç saatin ücretsiz olduğu, sonrasında saat ya da gün başına ne ödendiği ve broker'ın hangi kanıtı istediği (örneğin: 2 saat ücretsiz, sonra saati $50, giriş ve çıkış saatlerinin BOL'da yazılı olması şartıyla).",
              "TONU (truck ordered, not used) - sen yola çıkarıldıktan ya da yükleme yerine vardıktan sonra yük iptal edilirse sana ne ödeneceği.",
              "Ödeme koşulları - paranın kaç günde ödeneceği, quick pay olup olmadığı ve varsa ücretinin ne kadar olduğu.",
            ],
          },
          {
            h2: "Kabul etmeden önce uyarı işaretleri",
            p: [
              "Bunlara imzalamadan önce bak. Bir şey yanlışsa düzeltilmiş bir rate con iste: yük treylerine girdikten sonra pazarlık gücünün çoğu gider.",
            ],
            ul: [
              "Rate con'daki rate, telefonda anlaştığın rate'ten düşük.",
              "Detention, layover ya da TONU yok veya gerçekçi olarak uyamayacağın kurallara bağlanmış.",
              "Geç varış, takip (tracking) olmaması ya da evrak gecikmesi gibi şeyler için açıklanmamış cezalar veya kesintiler.",
              "Konuştuğun şirketle uyuşmayan bir broker adı ya da MC numarası.",
              "Sana söylenenden farklı duraklar, ağırlıklar ya da yük cinsi.",
            ],
          },
          {
            h2: "Kaydını sakla",
            p: [
              "Her rate con'u yüküyle birlikte sakla. Settlement eksik geldiğinde ya da detention kaybolduğunda elindeki kanıt odur. Load Zeta'da rate con'u (metin, PDF ya da fotoğraf) Telegram botu @truckerlogbot'a iletebilir ya da uygulamada Belgeden doldur'u kullanabilirsin: yük numarasını, broker'ı, durakları, tarihleri, milleri ve rate'i okur, sen de kaydetmeden önce hepsini kontrol edersin.",
            ],
          },
        ],
      },
      es: {
        title: "Cómo leer una confirmación de tarifa antes de aceptar la carga",
        description:
          "Qué significa cada parte de una confirmación de tarifa, del linehaul y los pagos adicionales al detention y los términos de pago, y las señales de alerta que revisar antes de firmar.",
        sections: [
          {
            p: [
              "La confirmación de tarifa (rate con) es el contrato de una sola carga: dice qué llevas, a dónde, cuándo y cuánto te pagan. Los brókers la envían rápido y esperan una firma rápida, pero dedicar unos minutos a leerla línea por línea es la forma de no mover una carga con condiciones que nunca aceptaste por teléfono.",
            ],
          },
          {
            h2: "Lo básico: quién, qué y el número de carga",
            p: [
              "Empieza por arriba. Revisa el número de carga (lo necesitarás en cada factura, mensaje y línea de la liquidación), el nombre de la empresa del bróker y su número MC, y el contacto que reservó la carga. Luego compara la mercancía, el peso y el tipo de equipo con lo que te dijeron y con lo que tu camión puede llevar legalmente.",
            ],
          },
          {
            h2: "Paradas y ventanas de cita",
            p: [
              "Cada parada debe tener dirección completa, fecha y una cita fija o una ventana (por ejemplo, recogida de 08:00 a 14:00). Fíjate en paradas extra que no se mencionaron en la llamada, en una hora de entrega que no deja margen para tus horas legales de manejo y en si la parada es FCFS (first come, first served, por orden de llegada) o con cita. Las millas del rate con deben parecerse a tu propia ruta; si salen cortas, pregunta antes de firmar.",
            ],
          },
          {
            h2: "El dinero: linehaul, combustible y pagos adicionales",
            p: ["La tarifa suele dividirse en partes. Asegúrate de saber qué número es el total que te van a pagar."],
            ul: [
              "Linehaul - el pago base por mover la carga del punto de recogida al de entrega.",
              "Recargo por combustible (fuel surcharge) - a veces aparece aparte y a veces va dentro de una tarifa todo incluido (all-in). Ten claro cuál acordaste.",
              "Pagos adicionales (accessorials) - pago extra por trabajo extra: detention, layover, paradas extra, lumper, TONU. Si no está por escrito en el rate con, prepárate para pelear por cobrarlo.",
              "Términos de detention y layover - cuántas horas son gratis, cuánto pagan por hora o por día después y qué prueba exige el bróker (por ejemplo: 2 horas gratis, luego $50 por hora, con las horas de entrada y salida en el BOL).",
              "TONU (truck ordered, not used) - lo que te pagan si cancelan la carga después de que te despacharon o de que llegaste.",
              "Términos de pago - en cuántos días te pagan, y si ofrecen quick pay y con qué comisión.",
            ],
          },
          {
            h2: "Señales de alerta antes de aceptar",
            p: [
              "Revisa esto antes de firmar. Si algo está mal, pide un rate con corregido: cuando la carga ya está en tu tráiler, pierdes casi todo tu poder de negociación.",
            ],
            ul: [
              "La tarifa del rate con es menor que la que acordaste por teléfono.",
              "Falta el detention, el layover o el TONU, o vienen con reglas que en la práctica no puedes cumplir.",
              "Multas o deducciones sin explicación por cosas como llegar tarde, no tener rastreo (tracking) o retrasos en el papeleo.",
              "Un nombre de bróker o un número MC que no coincide con la empresa con la que hablaste.",
              "Paradas, pesos o mercancía distintos de lo que te dijeron.",
            ],
          },
          {
            h2: "Guárdalo en tus registros",
            p: [
              "Guarda cada rate con junto con su carga. Es tu prueba cuando la liquidación llega corta o el detention desaparece. En Load Zeta puedes reenviar el rate con (texto, PDF o foto) al bot de Telegram @truckerlogbot o usar Rellenar desde documento en la app: lee el número de carga, el bróker, las paradas, las fechas, las millas y la tarifa, y tú lo revisas todo antes de guardar.",
            ],
          },
        ],
      },
      ru: {
        title: "Как читать rate confirmation, прежде чем брать груз",
        description:
          "Что означает каждая часть rate confirmation, от linehaul и доплат до detention и условий оплаты, и какие тревожные признаки проверить до подписи.",
        sections: [
          {
            p: [
              "Rate confirmation (rate con) - это договор на один груз: что вы везёте, куда, когда и сколько вам заплатят. Брокеры присылают его быстро и ждут быстрой подписи, но несколько минут построчного чтения спасают от рейса на условиях, о которых по телефону вы не договаривались.",
            ],
          },
          {
            h2: "Основное: кто, что и номер груза",
            p: [
              "Начните сверху. Проверьте номер груза (он понадобится в каждом счёте, сообщении и строке расчёта), название компании брокера и его номер MC, а также контакт, который оформил груз. Затем сверьте тип груза, вес и тип оборудования с тем, что вам сказали, и с тем, что ваш трак может законно везти.",
            ],
          },
          {
            h2: "Остановки и временные окна",
            p: [
              "У каждой остановки должны быть полный адрес, дата и либо точное время (appointment), либо окно (например, погрузка с 08:00 до 14:00). Обратите внимание на дополнительные остановки, о которых не говорили по телефону, на время доставки, которое не оставляет места для ваших законных часов вождения, и на то, работает ли остановка по FCFS (first come, first served, в порядке очереди) или по записи. Мили в rate con должны быть близки к вашему собственному маршруту; если их меньше, спросите до подписи.",
            ],
          },
          {
            h2: "Деньги: linehaul, топливо и доплаты",
            p: ["Ставка обычно делится на части. Убедитесь, что понимаете, какая цифра - это итог, который вам заплатят."],
            ul: [
              "Linehaul - базовая оплата за перевозку груза от погрузки до доставки.",
              "Топливная надбавка (fuel surcharge) - иногда указана отдельно, иногда входит в ставку «всё включено» (all-in). Знайте, о каком варианте вы договорились.",
              "Доплаты (accessorials) - дополнительная оплата за дополнительную работу: detention, layover, дополнительные остановки, lumper, TONU. Если этого нет в rate con письменно, готовьтесь выбивать оплату.",
              "Условия detention и layover - сколько часов бесплатно, сколько платят за час или за день после этого и какие доказательства требует брокер (например: 2 часа бесплатно, затем $50 в час, при условии, что время прибытия и убытия указано в BOL).",
              "TONU (truck ordered, not used) - сколько вам заплатят, если груз отменят после того, как вас отправили или вы уже приехали.",
              "Условия оплаты - через сколько дней вам заплатят, есть ли quick pay и с какой комиссией.",
            ],
          },
          {
            h2: "Тревожные признаки до того, как соглашаться",
            p: [
              "Проверьте это до подписи. Если что-то не так, попросите исправленный rate con: когда груз уже в трейлере, рычагов у вас почти не остаётся.",
            ],
            ul: [
              "Ставка в rate con ниже той, о которой вы договорились по телефону.",
              "Нет detention, layover или TONU, или к ним привязаны правила, которые на практике выполнить нельзя.",
              "Необъяснённые штрафы или удержания за опоздание, отсутствие трекинга или задержки с документами.",
              "Название брокера или номер MC не совпадают с компанией, с которой вы говорили.",
              "Остановки, вес или тип груза отличаются от того, что вам сказали.",
            ],
          },
          {
            h2: "Сохраняйте его",
            p: [
              "Храните каждый rate con вместе с его грузом. Это ваше доказательство, когда расчёт приходит меньше положенного или detention теряется. В Load Zeta можно переслать rate con (текст, PDF или фото) Telegram-боту @truckerlogbot или нажать «Заполнить из документа» в приложении: он прочитает номер груза, брокера, остановки, даты, мили и ставку, а вы всё проверите перед сохранением.",
            ],
          },
        ],
      },
    },
  },
  {
    slug: "owner-operator-vs-company-driver-pay",
    date: "2026-11-26",
    readMinutes: 7,
    content: {
      en: {
        title: "Owner-Operator vs Company Driver Pay: How to Compare Them Honestly",
        description:
          "How company drivers and owner-operators get paid, a worked example on the same load, and how to compare job offers fairly by net per mile after your costs.",
        sections: [
          {
            p: [
              "A company driver offer and a lease-on offer can both sound like good money, but they are measured in different units. One pays you for driving; the other pays your business, which then pays for the truck. To compare them, you have to bring both down to the same number.",
            ],
          },
          {
            h2: "How company drivers get paid",
            p: [
              "Most company drivers are paid in one of two ways. The company owns the truck and pays for fuel, insurance and repairs; your job is to drive, and nothing comes out of your pay for the truck.",
            ],
            ul: [
              "Cents per mile (CPM) - a fixed amount for each paid mile, for example $0.60. Check how miles are counted (practical, shortest or dispatched miles) and whether deadhead miles are paid at all.",
              "Percentage of the load - a share of what the load pays, for example 25%. Check whether it is taken from the linehaul only or also from the fuel surcharge and accessorials.",
              "Extras - detention, layover and extra stops may be paid as a flat amount, or not at all. Unpaid deadhead and unpaid waiting time are where company pay quietly shrinks.",
            ],
          },
          {
            h2: "How owner-operators get paid",
            p: [
              "Owner-operators are also usually paid in one of two ways. Leased on to a carrier, you often get a percentage of the gross, for example 75% of what the load pays. With your own authority, you get the full rate from the broker. Either way, that money is revenue, not pay: these costs come out of it before you keep a dollar:",
            ],
            ul: [
              "Truck payment or lease, and trailer rent if you do not own a trailer.",
              "Insurance, permits and plates.",
              "Fuel, the biggest cost that grows with every mile, loaded or empty.",
              "Maintenance, repairs and tires, which need money set aside every week.",
              "Settlement deductions such as ELD, dispatch fees or escrow, depending on the lease.",
            ],
          },
          {
            h2: "The same load, two ways (hypothetical)",
            p: [
              "Take one hypothetical load: 1,000 loaded miles plus 100 deadhead miles, paying $2,500 all in.",
              "Company driver at $0.60 per loaded mile: 1,000 × $0.60 = $600. The deadhead is unpaid, so that is $600 for 1,100 miles driven, about $0.55 per mile. Fuel and the truck are the company's cost.",
              "Owner-operator leased on at 75% of gross: 75% of $2,500 = $1,875 in revenue. With a hypothetical cost per mile of $1.20 (truck, insurance, fuel, maintenance), the 1,100 miles cost $1,320. Net: $555, about $0.50 per mile.",
              "Very different gross, nearly the same money left over. Change the rate or the cost per mile and the answer flips, which is why you have to run your own numbers.",
            ],
          },
          {
            h2: "How to compare offers fairly",
            p: ["Use the same yardstick for every offer:"],
            ul: [
              "Bring everything down to net per mile: what is left after your costs, divided by all miles, loaded and empty.",
              "Count the miles you are not paid for: deadhead, out-of-route miles and practical miles that come up short.",
              "Put a value on home time. More money for more weeks away may not be a better deal for you.",
              "Count the risk. An owner-operator carries a breakdown, a slow freight month or a jump in fuel prices; a company driver mostly does not.",
              "Look past the headline. A high percentage of a small gross, or a high CPM with few miles, can pay less than it sounds.",
            ],
          },
          {
            h2: "Track the real number",
            p: [
              "Whichever way you are paid, the honest number comes from your own records: every load with its pay and its loaded and deadhead miles and, for owner-operators, every expense. Load Zeta handles percentage, CPM and owner-operator gross percentage pay, team splits included, and shows cost per mile and net profit for owner-operators.",
            ],
          },
        ],
      },
      tr: {
        title: "Owner-Operator ile Şirket Şoförü Kazancı: Dürüstçe Nasıl Karşılaştırılır",
        description:
          "Şirket şoförlerinin ve owner-operator'ların nasıl ödeme aldığı, aynı yük üzerinde çözümlü bir örnek ve iş tekliflerini giderler sonrası mil başı netle adil şekilde nasıl karşılaştıracağın.",
        sections: [
          {
            p: [
              "Bir şirket şoförlüğü teklifi de bir lease-on teklifi de iyi para gibi görünebilir, ama ikisi farklı birimlerle ölçülür. Biri sana direksiyon başında geçirdiğin iş için öder; diğeri işletmene öder, işletmen de bu parayla kamyonun masraflarını karşılar. Karşılaştırmak için ikisini aynı rakama indirmen gerekir.",
            ],
          },
          {
            h2: "Şirket şoförleri nasıl ödeme alır",
            p: [
              "Çoğu şirket şoförü iki yoldan biriyle ödeme alır. Kamyon şirketindir; yakıtı, sigortayı ve tamiri şirket öder. Senin işin sürmektir ve kamyon için ödemenden hiçbir şey kesilmez.",
            ],
            ul: [
              "Mil başı sent (CPM) - ödenen her mil için sabit bir tutar, örneğin $0.60. Millerin nasıl sayıldığını (practical, en kısa ya da dispeçin verdiği miller) ve boş millerin ödenip ödenmediğini kontrol et.",
              "Yükün yüzdesi - yükün ödediği tutardan bir pay, örneğin %25. Bu yüzdenin yalnızca linehaul'dan mı, yoksa yakıt ek ücreti ve ek ödemelerden de mi alındığını kontrol et.",
              "Ekstralar - detention, layover ve ekstra duraklar sabit bir tutarla ödenebilir ya da hiç ödenmeyebilir. Şirket şoförünün kazancı en çok ödenmeyen boş millerde ve ödenmeyen beklemelerde sessizce erir.",
            ],
          },
          {
            h2: "Owner-operator'lar nasıl ödeme alır",
            p: [
              "Owner-operator'lar da genellikle iki yoldan biriyle ödeme alır. Bir taşıyıcıya (carrier) lease-on bağlıysan, çoğu zaman brütün bir yüzdesini alırsın, örneğin yükün ödediğinin %75'ini. Kendi otoriten (authority) varsa, rate'in tamamını broker'dan alırsın. Her iki durumda da bu para maaş değil, gelirdir: tek bir doları cebine koymadan önce şu giderler ondan çıkar:",
            ],
            ul: [
              "Kamyon taksiti ya da kirası, kendi treylerin yoksa treyler kirası.",
              "Sigorta, izinler ve plakalar.",
              "Yakıt: yüklü ya da boş, her milde büyüyen en büyük gider.",
              "Bakım, tamir ve lastikler; bunlar için her hafta para ayırman gerekir.",
              "Lease sözleşmesine göre ELD, dispeç ücretleri ya da escrow gibi settlement kesintileri.",
            ],
          },
          {
            h2: "Aynı yük, iki şekilde (varsayımsal)",
            p: [
              "Varsayımsal bir yük düşün: 1,000 yüklü mil artı 100 boş mil, her şey dahil $2,500 ödüyor.",
              "Yüklü mil başı $0.60 alan şirket şoförü: 1,000 × $0.60 = $600. Boş miller ödenmiyor, yani sürülen 1,100 mil için $600, mil başı yaklaşık $0.55. Yakıt ve kamyon şirketin gideri.",
              "Brütün %75'ini alan lease-on owner-operator: $2,500'ın %75'i = $1,875 gelir. Varsayımsal $1.20 mil başı maliyetle (kamyon, sigorta, yakıt, bakım) 1,100 mil $1,320 tutar. Net: $555, mil başı yaklaşık $0.50.",
              "Brütler çok farklı, elde kalan para neredeyse aynı. Rate'i ya da mil başı maliyeti değiştir, sonuç tersine döner; bu yüzden kendi rakamlarınla hesaplaman gerekir.",
            ],
          },
          {
            h2: "Teklifleri adil şekilde nasıl karşılaştırırsın",
            p: ["Her teklifi aynı ölçüyle değerlendir:"],
            ul: [
              "Her şeyi mil başı nete indir: giderlerinden sonra kalan tutarı yüklü ve boş tüm millere böl.",
              "Ödenmeyen milleri say: boş miller, rota dışı miller ve kısa kalan practical miles.",
              "Evde geçen zamana (home time) bir değer biç. Daha çok hafta yolda kalmak karşılığında daha çok para, senin için daha iyi bir anlaşma olmayabilir.",
              "Riski hesaba kat. Arızanın, yükün az olduğu bir ayın ya da yakıt fiyatındaki bir sıçramanın yükünü owner-operator taşır; şirket şoförü çoğunlukla taşımaz.",
              "Manşete aldanma. Küçük bir brütün yüksek yüzdesi ya da az mille gelen yüksek bir CPM, göründüğünden az kazandırabilir.",
            ],
          },
          {
            h2: "Gerçek rakamı takip et",
            p: [
              "Hangi şekilde ödeme alırsan al, dürüst rakam kendi kayıtlarından çıkar: her yük, ödemesi, yüklü ve boş milleriyle; owner-operator'lar için de her gider. Load Zeta yüzde, CPM ve owner-operator brüt yüzdesi ödeme modellerini, takım (team) paylaşımları dahil, destekler ve owner-operator'lar için mil başı maliyeti ve net kârı gösterir.",
            ],
          },
        ],
      },
      es: {
        title: "Pago de owner-operator vs conductor de compañía: cómo compararlos con honestidad",
        description:
          "Cómo cobran los conductores de compañía y los owner-operators, un ejemplo resuelto con la misma carga y cómo comparar ofertas de trabajo de forma justa por el neto por milla después de costos.",
        sections: [
          {
            p: [
              "Una oferta como conductor de compañía y una oferta de lease-on pueden sonar a buen dinero, pero se miden en unidades distintas. Una te paga a ti por manejar; la otra le paga a tu negocio, que con ese dinero paga el camión. Para compararlas, tienes que llevar las dos al mismo número.",
            ],
          },
          {
            h2: "Cómo cobra un conductor de compañía",
            p: [
              "La mayoría de los conductores de compañía cobra de una de dos formas. El camión es de la compañía, que paga el combustible, el seguro y las reparaciones; tu trabajo es manejar, y de tu pago no sale nada para el camión.",
            ],
            ul: [
              "Centavos por milla (CPM) - una cantidad fija por cada milla pagada, por ejemplo $0.60. Revisa cómo se cuentan las millas (practical, las más cortas o las que da el despacho) y si las millas vacías se pagan.",
              "Porcentaje de la carga - una parte de lo que paga la carga, por ejemplo el 25%. Revisa si se calcula solo sobre el linehaul o también sobre el recargo por combustible y los pagos adicionales.",
              "Extras - el detention, el layover y las paradas extra pueden pagarse con un monto fijo o no pagarse. Las millas vacías y las esperas sin pago son donde el sueldo de compañía se encoge sin que lo notes.",
            ],
          },
          {
            h2: "Cómo cobra un owner-operator",
            p: [
              "Los owner-operators también suelen cobrar de una de dos formas. Si estás en lease-on con un carrier, a menudo recibes un porcentaje del bruto, por ejemplo el 75% de lo que paga la carga. Con tu propia autoridad (authority), recibes la tarifa completa del bróker. En ambos casos ese dinero es ingreso, no sueldo: estos costos salen de él antes de que te quedes con un dólar:",
            ],
            ul: [
              "Pago o renta del camión, y renta del tráiler si no tienes uno propio.",
              "Seguro, permisos y placas.",
              "Combustible, el mayor costo que crece con cada milla, cargada o vacía.",
              "Mantenimiento, reparaciones y llantas, para los que hay que apartar dinero cada semana.",
              "Deducciones de la liquidación como ELD, comisiones de despacho o escrow, según el contrato de lease.",
            ],
          },
          {
            h2: "La misma carga, de dos formas (hipotético)",
            p: [
              "Toma una carga hipotética: 1,000 millas cargadas más 100 millas vacías, que paga $2,500 todo incluido.",
              "Conductor de compañía a $0.60 por milla cargada: 1,000 × $0.60 = $600. Las millas vacías no se pagan, así que son $600 por 1,100 millas manejadas, unos $0.55 por milla. El combustible y el camión los paga la compañía.",
              "Owner-operator en lease-on al 75% del bruto: el 75% de $2,500 = $1,875 de ingreso. Con un costo por milla hipotético de $1.20 (camión, seguro, combustible, mantenimiento), las 1,100 millas cuestan $1,320. Neto: $555, unos $0.50 por milla.",
              "Brutos muy distintos, casi el mismo dinero al final. Cambia la tarifa o el costo por milla y el resultado se invierte; por eso tienes que hacer tus propias cuentas.",
            ],
          },
          {
            h2: "Cómo comparar ofertas de forma justa",
            p: ["Mide cada oferta con la misma vara:"],
            ul: [
              "Lleva todo al neto por milla: lo que queda después de tus costos, dividido entre todas las millas, cargadas y vacías.",
              "Cuenta las millas que no te pagan: millas vacías, millas fuera de ruta y practical miles que se quedan cortas.",
              "Ponle valor al tiempo en casa (home time). Más dinero a cambio de más semanas fuera puede no ser mejor trato para ti.",
              "Cuenta el riesgo. El owner-operator carga con una avería, un mes flojo de carga o una subida del combustible; el conductor de compañía casi nunca.",
              "Mira más allá del titular. Un porcentaje alto de un bruto pequeño, o un CPM alto con pocas millas, puede pagar menos de lo que suena.",
            ],
          },
          {
            h2: "Lleva el número real",
            p: [
              "Cobres como cobres, el número honesto sale de tus propios registros: cada carga con su pago y sus millas cargadas y vacías y, si eres owner-operator, cada gasto. Load Zeta maneja pago por porcentaje, por CPM y por porcentaje del bruto de owner-operator, incluidas las divisiones de equipo (team), y muestra el costo por milla y la ganancia neta para owner-operators.",
            ],
          },
        ],
      },
      ru: {
        title: "Оплата owner-operator и водителя компании: как сравнить честно",
        description:
          "Как получают оплату водители компании и owner-operator'ы, разобранный пример на одном и том же грузе и как честно сравнивать предложения о работе по чистой сумме за милю после расходов.",
        sections: [
          {
            p: [
              "Предложение работать водителем компании и предложение lease-on могут звучать как хорошие деньги, но измеряются они в разных единицах. Одно платит вам за вождение; другое платит вашему бизнесу, который из этих денег оплачивает трак. Чтобы сравнить их, нужно привести оба к одному числу.",
            ],
          },
          {
            h2: "Как получает оплату водитель компании",
            p: [
              "Большинству водителей компании платят одним из двух способов. Трак принадлежит компании, она же платит за топливо, страховку и ремонт; ваша работа - вести машину, и на трак из вашей оплаты ничего не уходит.",
            ],
            ul: [
              "Центы за милю (CPM) - фиксированная сумма за каждую оплачиваемую милю, например $0.60. Проверьте, как считаются мили (practical, кратчайшие или мили диспетчера) и платят ли вообще за пустые мили.",
              "Процент от груза - доля от того, что платит груз, например 25%. Проверьте, берётся ли процент только с linehaul или ещё и с топливной надбавки и доплат.",
              "Дополнительно - detention, layover и дополнительные остановки могут оплачиваться фиксированной суммой, а могут не оплачиваться вовсе. Именно на неоплачиваемых пустых милях и ожидании заработок водителя компании незаметно тает.",
            ],
          },
          {
            h2: "Как получает оплату owner-operator",
            p: [
              "Owner-operator'ам тоже обычно платят одним из двух способов. Если вы на lease-on у перевозчика (carrier), вы часто получаете процент от гросса, например 75% того, что платит груз. Со своим authority вы получаете всю ставку от брокера. В любом случае эти деньги - выручка, а не зарплата: из неё уходят вот эти расходы, прежде чем у вас останется хоть доллар:",
            ],
            ul: [
              "Платёж или аренда трака и аренда трейлера, если своего нет.",
              "Страховка, пермиты и номера.",
              "Топливо - самый большой расход, который растёт с каждой милей, гружёной или пустой.",
              "Обслуживание, ремонт и шины, на которые нужно откладывать каждую неделю.",
              "Удержания в расчёте, такие как ELD, оплата диспетчера или escrow, в зависимости от договора lease.",
            ],
          },
          {
            h2: "Один груз, два способа (гипотетически)",
            p: [
              "Возьмём гипотетический груз: 1,000 гружёных миль плюс 100 пустых миль, оплата $2,500 всё включено.",
              "Водитель компании за $0.60 за гружёную милю: 1,000 × $0.60 = $600. Пустые мили не оплачиваются, значит $600 за 1,100 пройденных миль, около $0.55 за милю. Топливо и трак - расходы компании.",
              "Owner-operator на lease-on за 75% гросса: 75% от $2,500 = $1,875 выручки. При гипотетической стоимости мили $1.20 (трак, страховка, топливо, обслуживание) 1,100 миль стоят $1,320. Чистыми: $555, около $0.50 за милю.",
              "Гросс совсем разный, а на руках остаётся почти одно и то же. Измените ставку или стоимость мили, и ответ перевернётся, поэтому считать нужно на своих цифрах.",
            ],
          },
          {
            h2: "Как честно сравнивать предложения",
            p: ["Мерьте каждое предложение одной меркой:"],
            ul: [
              "Приводите всё к чистой сумме за милю: что остаётся после расходов, делённое на все мили, гружёные и пустые.",
              "Считайте мили, за которые вам не платят: пустые мили, мили вне маршрута и заниженные practical miles.",
              "Оцените время дома (home time). Больше денег за большее число недель в рейсе - не обязательно лучшая сделка для вас.",
              "Учитывайте риск. Поломку, слабый месяц по грузам или скачок цен на топливо несёт owner-operator; водитель компании в основном нет.",
              "Смотрите дальше заголовка. Высокий процент от маленького гросса или высокий CPM при малом пробеге может принести меньше, чем звучит.",
            ],
          },
          {
            h2: "Следите за реальной цифрой",
            p: [
              "Как бы вам ни платили, честная цифра берётся из ваших собственных записей: каждый груз с оплатой, гружёными и пустыми милями, а для owner-operator'ов ещё и каждый расход. Load Zeta поддерживает оплату процентом, CPM и процентом от гросса для owner-operator'ов, включая разделение в команде (team), и показывает owner-operator'ам стоимость мили и чистую прибыль.",
            ],
          },
        ],
      },
    },
  },
  {
    slug: "detention-layover-tonu",
    date: "2026-11-26",
    readMinutes: 6,
    content: {
      en: {
        title: "Detention, Layover and TONU: How to Get Paid for the Time You Lose",
        description:
          "What detention, layover and TONU mean on a rate con, how to document your times so the claim holds up, and how to make sure the pay reaches your settlement.",
        sections: [
          {
            p: [
              "Waiting at a dock, sitting overnight for a delayed delivery, or rolling to a pickup that gets cancelled all cost you hours and money. Rate cons usually promise something for that time, but the pay rarely shows up on its own. It shows up when you know the terms and can prove the times.",
            ],
          },
          {
            h2: "What each one means",
            ul: [
              "Detention - pay for waiting at a shipper or receiver beyond the free time, usually per hour after a set number of free hours.",
              "Layover - pay when you are held a full day or overnight, for example when a delivery is pushed to the next day. Usually a flat amount per day.",
              "TONU (truck ordered, not used) - a flat payment when a load is cancelled after you were dispatched or arrived at the shipper.",
            ],
          },
          {
            h2: "How it is written on the rate con",
            p: [
              "Look for the exact wording before you accept. A hypothetical example: \"Detention: 2 hours free, then $50 per hour, max 8 hours. Layover: $250 per day. TONU: $150. Request detention within 24 hours, with in and out times on the BOL.\"",
              "The details matter as much as the amounts: when the clock starts (your arrival or the appointment time), whether there is a cap, whether you must tell the broker while you are still waiting, and what proof they accept. If there is no detention line at all, ask for one before you sign.",
            ],
          },
          {
            h2: "Document the time while it happens",
            p: ["A detention claim is only as good as your proof. Collect it as you go:"],
            ul: [
              "Arrival: check in at the gate or the window and note the exact time. If you arrive before your appointment, the clock often starts at the appointment time, not at your arrival.",
              "BOL in and out times: ask the shipper or receiver to write or stamp your in and out times on the BOL, and take a photo of it.",
              "ELD records: your duty status and location history back up the times on paper.",
              "Messages: tell dispatch or the broker when you arrive, when the free time runs out and when you leave. A short text with the times is a timestamped record.",
            ],
          },
          {
            h2: "Request it and follow it through",
            p: [
              "Send the request as soon as you are released, while the details are fresh: load number, location, arrival and departure times, hours past the free time, the rate from the rate con, and a photo of the signed BOL. Keep the reply.",
              "Then add the detention, layover or TONU to the load in your own records, so you know exactly what the week should pay. In Load Zeta you add it to the load as accessorial pay, next to the rate, so you can check the company's settlement against it line by line.",
            ],
          },
        ],
      },
      tr: {
        title: "Detention, Layover ve TONU: Kaybettiğin Zamanın Parasını Nasıl Alırsın",
        description:
          "Rate con'da detention, layover ve TONU'nun ne anlama geldiği, talebin sağlam olsun diye saatlerini nasıl belgeleyeceğin ve ödemenin settlement'a girdiğinden nasıl emin olacağın.",
        sections: [
          {
            p: [
              "Rampada beklemek, ertelenen bir teslimat yüzünden geceyi orada geçirmek ya da sonradan iptal edilen bir yüklemeye yola çıkmak; hepsi sana saat ve para kaybettirir. Rate con'lar genellikle bu zaman için bir ödeme vaat eder, ama ödeme nadiren kendiliğinden gelir. Koşulları bildiğinde ve saatleri kanıtlayabildiğinde gelir.",
            ],
          },
          {
            h2: "Her biri ne anlama gelir",
            ul: [
              "Detention - yükleyicide (shipper) ya da alıcıda (receiver) ücretsiz sürenin ötesinde beklemenin ücreti; genellikle belirli sayıda ücretsiz saatten sonra saat başına ödenir.",
              "Layover - bütün bir gün ya da bir gece bekletildiğinde ödenen ücret, örneğin teslimat ertesi güne kaydırıldığında. Genellikle gün başına sabit bir tutardır.",
              "TONU (truck ordered, not used) - sen yola çıkarıldıktan ya da yükleyiciye vardıktan sonra yük iptal edildiğinde ödenen sabit tutar.",
            ],
          },
          {
            h2: "Rate con'da nasıl yazılır",
            p: [
              "Kabul etmeden önce ifadenin tam olarak ne dediğine bak. Varsayımsal bir örnek: \"Detention: 2 saat ücretsiz, sonra saati $50, en fazla 8 saat. Layover: günlük $250. TONU: $150. Detention 24 saat içinde, giriş ve çıkış saatleri BOL'da yazılı olarak talep edilmelidir.\"",
              "Ayrıntılar tutarlar kadar önemlidir: sürenin ne zaman başladığı (senin varışın mı, randevu saati mi), bir üst sınır olup olmadığı, hâlâ beklerken broker'a haber vermen gerekip gerekmediği ve hangi kanıtı kabul ettikleri. Hiç detention satırı yoksa, imzalamadan önce eklenmesini iste.",
            ],
          },
          {
            h2: "Süreyi yaşarken belgele",
            p: ["Bir detention talebi, kanıtın kadar güçlüdür. Kanıtı iş sürerken topla:"],
            ul: [
              "Varış: kapıda ya da gişede giriş yap ve saati tam olarak not et. Randevundan önce varırsan, süre çoğu zaman senin varışından değil, randevu saatinden başlar.",
              "BOL giriş ve çıkış saatleri: yükleyiciden ya da alıcıdan giriş ve çıkış saatlerini BOL'a yazmasını veya damgalamasını iste ve fotoğrafını çek.",
              "ELD kayıtları: görev durumu ve konum geçmişin, kâğıttaki saatleri destekler.",
              "Mesajlar: vardığında, ücretsiz süre dolduğunda ve ayrıldığında dispeçe ya da broker'a haber ver. Saatlerin yazılı olduğu kısa bir mesaj, zaman damgalı bir kayıttır.",
            ],
          },
          {
            h2: "Talep et ve peşini bırakma",
            p: [
              "Talebi, ayrıntılar tazeyken, seni bırakır bırakmaz gönder: yük numarası, yer, varış ve çıkış saatleri, ücretsiz süreden sonraki saatler, rate con'daki ücret ve imzalı BOL'un fotoğrafı. Gelen cevabı sakla.",
              "Sonra detention, layover ya da TONU'yu kendi kayıtlarında yüke ekle; böylece haftanın tam olarak ne ödemesi gerektiğini bilirsin. Load Zeta'da bunu yüke, rate'in yanına ek ödeme (accessorial) olarak eklersin; böylece şirketin settlement'ını onunla satır satır karşılaştırabilirsin.",
            ],
          },
        ],
      },
      es: {
        title: "Detention, layover y TONU: cómo cobrar el tiempo que pierdes",
        description:
          "Qué significan detention, layover y TONU en un rate con, cómo documentar tus horas para que el reclamo se sostenga y cómo asegurarte de que el pago llegue a tu liquidación.",
        sections: [
          {
            p: [
              "Esperar en un muelle, pasar la noche por una entrega retrasada o ir a una recogida que luego se cancela te cuesta horas y dinero. Los rate cons suelen prometer algo por ese tiempo, pero el pago casi nunca llega solo. Llega cuando conoces los términos y puedes probar las horas.",
            ],
          },
          {
            h2: "Qué significa cada uno",
            ul: [
              "Detention - pago por esperar en el shipper o el receiver más allá del tiempo libre; normalmente por hora después de un número fijo de horas gratis.",
              "Layover - pago cuando te retienen un día completo o una noche, por ejemplo cuando la entrega se pasa al día siguiente. Normalmente es un monto fijo por día.",
              "TONU (truck ordered, not used) - un pago fijo cuando la carga se cancela después de que te despacharon o de que llegaste al shipper.",
            ],
          },
          {
            h2: "Cómo aparece en el rate con",
            p: [
              "Busca la redacción exacta antes de aceptar. Un ejemplo hipotético: \"Detention: 2 horas gratis, luego $50 por hora, máximo 8 horas. Layover: $250 por día. TONU: $150. Solicitar el detention dentro de las 24 horas, con las horas de entrada y salida en el BOL.\"",
              "Los detalles importan tanto como los montos: cuándo empieza a correr el reloj (tu llegada o la hora de la cita), si hay un tope, si tienes que avisar al bróker mientras todavía esperas y qué prueba aceptan. Si no hay ninguna línea de detention, pídela antes de firmar.",
            ],
          },
          {
            h2: "Documenta el tiempo mientras pasa",
            p: ["Un reclamo de detention vale lo que vale tu prueba. Reúnela sobre la marcha:"],
            ul: [
              "Llegada: regístrate en la caseta o en la ventanilla y anota la hora exacta. Si llegas antes de tu cita, el reloj a menudo empieza a la hora de la cita, no a la de tu llegada.",
              "Horas de entrada y salida en el BOL: pide al shipper o al receiver que escriba o selle tus horas de entrada y salida en el BOL, y tómale una foto.",
              "Registros del ELD: tu historial de estado de servicio y de ubicación respalda las horas del papel.",
              "Mensajes: avisa al despacho o al bróker cuando llegas, cuando se acaba el tiempo libre y cuando sales. Un mensaje corto con las horas es un registro con fecha y hora.",
            ],
          },
          {
            h2: "Solicítalo y dale seguimiento",
            p: [
              "Envía la solicitud en cuanto te liberen, con los detalles frescos: número de carga, lugar, horas de llegada y salida, horas después del tiempo libre, la tarifa del rate con y una foto del BOL firmado. Guarda la respuesta.",
              "Luego agrega el detention, el layover o el TONU a la carga en tus propios registros, para saber exactamente cuánto debe pagar la semana. En Load Zeta lo agregas a la carga como pago adicional, junto a la tarifa, y así puedes comparar con él la liquidación de la compañía línea por línea.",
            ],
          },
        ],
      },
      ru: {
        title: "Detention, layover и TONU: как получить оплату за потерянное время",
        description:
          "Что означают detention, layover и TONU в rate con, как фиксировать время, чтобы претензия была убедительной, и как убедиться, что оплата попадёт в расчёт.",
        sections: [
          {
            p: [
              "Ожидание у рампы, ночёвка из-за перенесённой доставки или поездка на погрузку, которую потом отменили, - всё это стоит вам часов и денег. Rate con обычно что-то обещает за это время, но оплата редко приходит сама. Она приходит, когда вы знаете условия и можете доказать время.",
            ],
          },
          {
            h2: "Что означает каждый термин",
            ul: [
              "Detention - оплата за ожидание у отправителя (shipper) или получателя (receiver) сверх бесплатного времени; обычно почасовая после определённого числа бесплатных часов.",
              "Layover - оплата, когда вас задерживают на целый день или на ночь, например когда доставку переносят на следующий день. Обычно это фиксированная сумма за день.",
              "TONU (truck ordered, not used) - фиксированная выплата, когда груз отменяют после того, как вас отправили или вы приехали к отправителю.",
            ],
          },
          {
            h2: "Как это записано в rate con",
            p: [
              "Перед тем как соглашаться, найдите точную формулировку. Гипотетический пример: «Detention: 2 часа бесплатно, затем $50 в час, максимум 8 часов. Layover: $250 в день. TONU: $150. Запрос на detention - в течение 24 часов, с временем прибытия и убытия в BOL».",
              "Детали важны не меньше сумм: когда начинается отсчёт (ваше прибытие или время appointment), есть ли лимит, нужно ли сообщить брокеру, пока вы ещё ждёте, и какие доказательства принимаются. Если строки о detention нет совсем, попросите добавить её до подписи.",
            ],
          },
          {
            h2: "Фиксируйте время по ходу дела",
            p: ["Претензия по detention сильна ровно настолько, насколько сильны ваши доказательства. Собирайте их по ходу:"],
            ul: [
              "Прибытие: отметьтесь на воротах или в окне и запишите точное время. Если вы приехали раньше appointment, отсчёт часто начинается со времени appointment, а не с вашего прибытия.",
              "Время прибытия и убытия в BOL: попросите отправителя или получателя вписать или проштамповать ваше время прибытия и убытия в BOL и сфотографируйте его.",
              "Записи ELD: история статусов и местоположения подтверждает время на бумаге.",
              "Сообщения: пишите диспетчеру или брокеру, когда приехали, когда закончилось бесплатное время и когда уехали. Короткое сообщение со временем - это запись с отметкой времени.",
            ],
          },
          {
            h2: "Запросите оплату и доведите дело до конца",
            p: [
              "Отправьте запрос сразу, как вас отпустили, пока детали свежи: номер груза, место, время прибытия и убытия, часы сверх бесплатного времени, ставку из rate con и фото подписанного BOL. Сохраните ответ.",
              "Затем добавьте detention, layover или TONU к грузу в своих записях, чтобы точно знать, сколько должна принести неделя. В Load Zeta это добавляется к грузу как доплата рядом со ставкой, и вы можете построчно сверить с ней расчёт компании.",
            ],
          },
        ],
      },
    },
  },
  {
    slug: "ifta-basics-for-truckers",
    date: "2026-11-26",
    readMinutes: 6,
    content: {
      en: {
        title: "IFTA Basics for Truckers: Miles, Fuel and Quarterly Returns",
        description:
          "What IFTA is, who needs it, what goes into a quarterly return and which fuel and trip records to keep, explained in plain terms for drivers and owner-operators.",
        sections: [
          {
            p: [
              "IFTA, the International Fuel Tax Agreement, lets a carrier that runs in several U.S. states and Canadian provinces report fuel tax in one place instead of filing with each one separately. Your base jurisdiction then shares the tax among the others based on where the miles were driven.",
              "This guide is general information, not tax or legal advice. Rules, rates and deadlines are set by the jurisdictions and can change, so check with your base jurisdiction's IFTA office or a tax professional before you file.",
            ],
          },
          {
            h2: "Who needs IFTA",
            p: [
              "In general, IFTA covers qualified motor vehicles in interstate operation: trucks above a set weight or number of axles that travel in more than one member jurisdiction. Your base jurisdiction (usually the state where the truck is registered and your records are kept) issues the IFTA license and a set of decals for each truck.",
              "Who holds the license depends on how you run. A company driver normally does not deal with IFTA, because the carrier files. An owner-operator leased on to a carrier may be covered by the carrier's account or may need their own, depending on the lease. An owner-operator with their own authority usually files their own.",
            ],
          },
          {
            h2: "How the quarterly return works",
            p: [
              "IFTA returns are filed every quarter. For each quarter you report your total miles and total fuel, plus, for each jurisdiction you ran in, the miles you drove there (empty miles included) and the gallons of fuel you bought there.",
              "The return uses your average miles per gallon to work out how much fuel you burned in each state or province, compares that with the fuel you bought there (where you already paid tax at the pump), and shows whether you owe tax or have a credit in each one.",
              "Returns are generally due by the last day of the month after the quarter ends, for example the first quarter's return by the end of April. If a due date falls on a weekend or holiday it may move, and a return is usually expected even for a quarter with no miles. Confirm the exact dates with your base jurisdiction.",
            ],
          },
          {
            h2: "Records to keep",
            p: ["Your return is only as good as the records behind it, and your base jurisdiction can ask to see them in an audit:"],
            ul: [
              "Fuel receipts for every purchase: date, seller and location, gallons, price and the truck's unit number.",
              "Trip records for every trip: dates, start and end points, route, the states crossed, odometer or ELD readings, and miles by state.",
              "A copy of each filed return and proof of payment.",
              "Keep everything for as long as your base jurisdiction requires; ask them for the exact period.",
            ],
          },
          {
            h2: "Make the quarter easier",
            p: [
              "Collect records as you go, not at the end of the quarter. Take a photo of every fuel receipt the day you get it, and keep the ELD data or trip notes that show where you crossed state lines.",
              "Load Zeta does not prepare or file IFTA returns. What it can do is keep your fuel and other business expenses in one place: photograph a receipt and it reads the details for you. For the return itself, work with your base jurisdiction's IFTA office or a tax professional.",
            ],
          },
        ],
      },
      tr: {
        title: "Kamyoncular İçin IFTA'nın Temelleri: Miller, Yakıt ve Üç Aylık Beyannameler",
        description:
          "IFTA'nın ne olduğu, kimin buna ihtiyaç duyduğu, üç aylık beyannameye neyin girdiği ve hangi yakıt ve yolculuk kayıtlarını saklaman gerektiği; şoförler ve owner-operator'lar için sade bir dille.",
        sections: [
          {
            p: [
              "IFTA (International Fuel Tax Agreement, Uluslararası Yakıt Vergisi Anlaşması), birden fazla ABD eyaletinde ve Kanada eyaletinde çalışan bir taşıyıcının yakıt vergisini her biriyle ayrı ayrı uğraşmak yerine tek bir yerde beyan etmesini sağlar. Ana yetki bölgen (base jurisdiction) de vergiyi, millerin nerede sürüldüğüne göre diğerleri arasında paylaştırır.",
              "Bu rehber genel bilgi amaçlıdır; vergi ya da hukuki danışmanlık değildir. Kurallar, oranlar ve son tarihler yetki bölgeleri tarafından belirlenir ve değişebilir; bu yüzden beyanname vermeden önce ana yetki bölgenin IFTA ofisine ya da bir vergi uzmanına danış.",
            ],
          },
          {
            h2: "IFTA kimlere gerekir",
            p: [
              "Genel olarak IFTA, eyaletler arası çalışan nitelikli motorlu araçları (qualified motor vehicles) kapsar: belirli bir ağırlığın ya da aks sayısının üzerinde olup birden fazla üye yetki bölgesinde yol alan kamyonlar. IFTA lisansını ve her kamyon için bir çift çıkartmayı (decal) ana yetki bölgen verir; bu genellikle kamyonun kayıtlı olduğu ve kayıtlarının tutulduğu eyalettir.",
              "Lisansın kimde olacağı nasıl çalıştığına bağlıdır. Şirket şoförü normalde IFTA ile uğraşmaz, çünkü beyannameyi taşıyıcı verir. Bir taşıyıcıya lease-on bağlı owner-operator, lease sözleşmesine göre taşıyıcının hesabı kapsamında olabilir ya da kendi hesabına ihtiyaç duyabilir. Kendi otoritesi (authority) olan owner-operator genellikle beyannamesini kendisi verir.",
            ],
          },
          {
            h2: "Üç aylık beyanname nasıl işler",
            p: [
              "IFTA beyannameleri üç ayda bir verilir. Her çeyrek için toplam milini ve toplam yakıtını, ayrıca çalıştığın her yetki bölgesi için orada sürdüğün milleri (boş miller dahil) ve orada aldığın yakıtı galon olarak beyan edersin.",
              "Beyanname, ortalama MPG'ni kullanarak her eyalette ne kadar yakıt yaktığını hesaplar, bunu orada satın aldığın yakıtla (vergisini pompada zaten ödediğin yakıtla) karşılaştırır ve her biri için vergi borcun mu yoksa alacağın mı olduğunu gösterir.",
              "Beyannameler genellikle çeyreğin bitişini izleyen ayın son gününe kadar verilir; örneğin ilk çeyreğin beyannamesi nisan sonuna kadar. Son tarih hafta sonuna ya da resmi tatile denk gelirse kayabilir ve hiç mil sürülmeyen bir çeyrek için de genellikle beyanname beklenir. Kesin tarihleri ana yetki bölgenle teyit et.",
            ],
          },
          {
            h2: "Saklaman gereken kayıtlar",
            p: ["Beyannamen, arkasındaki kayıtlar kadar sağlamdır ve ana yetki bölgen bir denetimde (audit) bunları görmek isteyebilir:"],
            ul: [
              "Her alım için yakıt fişi: tarih, satıcı ve yer, galon, fiyat ve kamyonun ünite numarası.",
              "Her sefer için yolculuk kayıtları: tarihler, başlangıç ve bitiş noktaları, rota, geçilen eyaletler, odometre ya da ELD okumaları ve eyalet bazında miller.",
              "Verilen her beyannamenin bir kopyası ve ödeme belgesi.",
              "Hepsini ana yetki bölgenin istediği süre boyunca sakla; kesin süreyi onlara sor.",
            ],
          },
          {
            h2: "Çeyreği kendine kolaylaştır",
            p: [
              "Kayıtları çeyreğin sonunda değil, yol boyunca topla. Her yakıt fişinin fotoğrafını aldığın gün çek ve eyalet sınırlarını nerede geçtiğini gösteren ELD verilerini ya da yolculuk notlarını sakla.",
              "Load Zeta IFTA beyannamesi hazırlamaz ya da vermez. Yapabildiği şey, yakıt ve diğer işletme giderlerini tek bir yerde tutmaktır: fişin fotoğrafını çekersin, ayrıntıları senin için okur. Beyannamenin kendisi için ana yetki bölgenin IFTA ofisiyle ya da bir vergi uzmanıyla çalış.",
            ],
          },
        ],
      },
      es: {
        title: "IFTA básico para camioneros: millas, combustible y declaraciones trimestrales",
        description:
          "Qué es IFTA, quién lo necesita, qué lleva la declaración trimestral y qué registros de combustible y de viaje guardar, explicado en palabras sencillas para conductores y owner-operators.",
        sections: [
          {
            p: [
              "IFTA (International Fuel Tax Agreement, el Acuerdo Internacional del Impuesto sobre Combustibles) permite que un transportista que opera en varios estados de EE. UU. y provincias de Canadá declare el impuesto al combustible en un solo lugar, en vez de hacerlo con cada uno por separado. Tu jurisdicción base (base jurisdiction) luego reparte el impuesto entre las demás según dónde se manejaron las millas.",
              "Esta guía es información general, no asesoría fiscal ni legal. Las reglas, las tasas y los plazos los fijan las jurisdicciones y pueden cambiar, así que consulta con la oficina de IFTA de tu jurisdicción base o con un profesional de impuestos antes de declarar.",
            ],
          },
          {
            h2: "Quién necesita IFTA",
            p: [
              "En general, IFTA cubre los vehículos motorizados calificados (qualified motor vehicles) en operación interestatal: camiones por encima de cierto peso o número de ejes que circulan en más de una jurisdicción miembro. Tu jurisdicción base (normalmente el estado donde está registrado el camión y donde se guardan tus registros) emite la licencia IFTA y un juego de calcomanías (decals) para cada camión.",
              "Quién tiene la licencia depende de cómo trabajas. Un conductor de compañía normalmente no se ocupa de IFTA, porque declara el carrier. Un owner-operator en lease-on con un carrier puede estar cubierto por la cuenta del carrier o necesitar la suya, según el contrato de lease. Un owner-operator con su propia autoridad (authority) normalmente declara por su cuenta.",
            ],
          },
          {
            h2: "Cómo funciona la declaración trimestral",
            p: [
              "Las declaraciones de IFTA se presentan cada trimestre. En cada trimestre declaras tus millas totales y tu combustible total y, para cada jurisdicción donde operaste, las millas que manejaste allí (incluidas las vacías) y los galones de combustible que compraste allí.",
              "La declaración usa tu promedio de millas por galón para calcular cuánto combustible quemaste en cada estado o provincia, lo compara con el combustible que compraste allí (donde ya pagaste el impuesto en la bomba) y muestra si debes impuesto o tienes un crédito en cada uno.",
              "Las declaraciones suelen vencer el último día del mes siguiente al cierre del trimestre; por ejemplo, la del primer trimestre a finales de abril. Si la fecha cae en fin de semana o feriado puede moverse, y normalmente se espera una declaración incluso en un trimestre sin millas. Confirma las fechas exactas con tu jurisdicción base.",
            ],
          },
          {
            h2: "Registros que debes guardar",
            p: ["Tu declaración vale lo que valen los registros que la respaldan, y tu jurisdicción base puede pedirlos en una auditoría:"],
            ul: [
              "Recibos de combustible de cada compra: fecha, vendedor y ubicación, galones, precio y el número de unidad del camión.",
              "Registros de cada viaje: fechas, puntos de inicio y fin, ruta, estados recorridos, lecturas del odómetro o del ELD y millas por estado.",
              "Una copia de cada declaración presentada y el comprobante de pago.",
              "Guarda todo durante el tiempo que exija tu jurisdicción base; pregúntales el plazo exacto.",
            ],
          },
          {
            h2: "Hazte el trimestre más fácil",
            p: [
              "Reúne los registros sobre la marcha, no al final del trimestre. Toma una foto de cada recibo de combustible el mismo día y guarda los datos del ELD o las notas de viaje que muestran dónde cruzaste cada línea estatal.",
              "Load Zeta no prepara ni presenta declaraciones de IFTA. Lo que sí puede hacer es tener tu combustible y tus demás gastos del negocio en un solo lugar: le tomas foto a un recibo y lee los datos por ti. Para la declaración en sí, trabaja con la oficina de IFTA de tu jurisdicción base o con un profesional de impuestos.",
            ],
          },
        ],
      },
      ru: {
        title: "IFTA для дальнобойщиков: мили, топливо и квартальные отчёты",
        description:
          "Что такое IFTA, кому она нужна, что входит в квартальный отчёт и какие записи о топливе и поездках хранить, простыми словами для водителей и owner-operator'ов.",
        sections: [
          {
            p: [
              "IFTA (International Fuel Tax Agreement, Международное соглашение о топливном налоге) позволяет перевозчику, который работает в нескольких штатах США и провинциях Канады, отчитываться по топливному налогу в одном месте, а не в каждой юрисдикции отдельно. Ваша базовая юрисдикция (base jurisdiction) затем распределяет налог между остальными в зависимости от того, где были пройдены мили.",
              "Это руководство - общая информация, а не налоговая или юридическая консультация. Правила, ставки и сроки устанавливают юрисдикции, и они могут меняться, поэтому перед подачей уточните всё в офисе IFTA вашей базовой юрисдикции или у налогового специалиста.",
            ],
          },
          {
            h2: "Кому нужна IFTA",
            p: [
              "В общем случае IFTA распространяется на квалифицированные транспортные средства (qualified motor vehicles) в межштатных перевозках: траки выше определённого веса или числа осей, которые ездят по нескольким юрисдикциям-участницам. Лицензию IFTA и комплект наклеек (decals) на каждый трак выдаёт ваша базовая юрисдикция (обычно штат, где зарегистрирован трак и хранятся ваши записи).",
              "У кого будет лицензия, зависит от того, как вы работаете. Водитель компании обычно IFTA не занимается: отчёт подаёт перевозчик. Owner-operator на lease-on у перевозчика может быть покрыт учётной записью перевозчика или нуждаться в своей, в зависимости от договора lease. Owner-operator со своим authority обычно подаёт отчёт сам.",
            ],
          },
          {
            h2: "Как устроен квартальный отчёт",
            p: [
              "Отчёты IFTA подаются каждый квартал. За каждый квартал вы указываете общий пробег и общее количество топлива, а для каждой юрисдикции, где вы работали, - мили, пройденные там (включая пустые), и галлоны топлива, купленного там.",
              "По вашему среднему расходу (миль на галлон) отчёт считает, сколько топлива вы сожгли в каждом штате или провинции, сравнивает это с топливом, купленным там (налог за которое вы уже заплатили на заправке), и показывает, должны ли вы налог или у вас есть кредит по каждой из них.",
              "Отчёты обычно нужно подать до последнего дня месяца, следующего за концом квартала, например за первый квартал - до конца апреля. Если срок выпадает на выходной или праздник, он может сдвинуться, а отчёт обычно ждут даже за квартал без пробега. Точные даты уточняйте в своей базовой юрисдикции.",
            ],
          },
          {
            h2: "Какие записи хранить",
            p: ["Отчёт надёжен ровно настолько, насколько надёжны записи за ним, и базовая юрисдикция может запросить их при аудите:"],
            ul: [
              "Чеки за топливо по каждой покупке: дата, продавец и место, галлоны, цена и номер юнита трака.",
              "Записи по каждой поездке: даты, точки начала и конца, маршрут, пересечённые штаты, показания одометра или ELD и мили по штатам.",
              "Копия каждого поданного отчёта и подтверждение оплаты.",
              "Храните всё столько, сколько требует ваша базовая юрисдикция; точный срок уточните у них.",
            ],
          },
          {
            h2: "Облегчите себе квартал",
            p: [
              "Собирайте записи по ходу, а не в конце квартала. Фотографируйте каждый топливный чек в тот же день и сохраняйте данные ELD или заметки о поездках, где видно, где вы пересекали границы штатов.",
              "Load Zeta не готовит и не подаёт отчёты IFTA. Зато приложение может хранить ваши расходы на топливо и другие расходы бизнеса в одном месте: сфотографируйте чек, и оно само прочитает данные. Для самого отчёта обращайтесь в офис IFTA вашей базовой юрисдикции или к налоговому специалисту.",
            ],
          },
        ],
      },
    },
  },
];

// One guide in one language (English if that language is missing).
export function getGuide(slug, lang = "en") {
  const g = GUIDES.find((x) => x.slug === slug);
  if (!g) return null;
  const c = g.content[lang] || g.content.en;
  return { slug: g.slug, date: g.date, readMinutes: g.readMinutes, ...c };
}

export function listGuides(lang = "en") {
  return GUIDES.map((g) => getGuide(g.slug, lang));
}

// Every language must carry every guide, with the same structure as English:
// a missing translation would silently serve English under a /tr URL. Fails
// the build instead.
for (const g of GUIDES) {
  const en = g.content.en.sections;
  for (const l of ALL_LANGS) {
    const c = g.content[l];
    if (!c || !c.title || !c.description || !c.sections?.length) {
      throw new Error(`guides.js: "${g.slug}" has no complete "${l}" version`);
    }
    c.sections.forEach((s, i) => {
      const e = en[i];
      if (!e || !!s.h2 !== !!e.h2 || (s.p?.length || 0) !== (e.p?.length || 0) || (s.ul?.length || 0) !== (e.ul?.length || 0)) {
        throw new Error(`guides.js: "${g.slug}" (${l}) section ${i} does not match the English structure`);
      }
    });
    if (c.sections.length !== en.length) {
      throw new Error(`guides.js: "${g.slug}" (${l}) has ${c.sections.length} sections, English has ${en.length}`);
    }
  }
}

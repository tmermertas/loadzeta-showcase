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
              "Ask ten owner-operators what their cost per mile is and most will guess. But CPM is the number every single rate decision depends on: a load that pays above your cost per mile makes you money, and a load below it costs you money to haul — no matter how big the gross looks.",
            ],
          },
          {
            h2: "What goes into cost per mile",
            p: ["Your total cost per mile is the sum of two very different kinds of cost:"],
            ul: [
              "Fixed costs — truck payment, insurance, permits, trailer rent, parking, software. You pay these whether the wheels turn or not.",
              "Variable costs — fuel, maintenance, tires, tolls. These scale with every mile you run.",
            ],
          },
          {
            h2: "The five-minute calculation",
            p: [
              "Add up your fixed costs for one month and divide by the miles you actually run in a month. Then add your fuel cost per mile (fuel price divided by your truck's MPG) and a maintenance reserve per mile.",
              "Example: $4,100/month fixed ÷ 10,000 miles = $0.41. Fuel at $3.60/gal ÷ 6.5 MPG = $0.55. Maintenance reserve $0.18. Total: $1.14 per mile — every mile, loaded or empty.",
            ],
          },
          {
            h2: "The mistake that hides losses",
            p: [
              "Most drivers divide costs by loaded miles only. But your truck doesn't care whether the trailer is full — deadhead miles burn the same fuel. Divide by ALL miles, then judge rates against total miles for the round trip, not just the loaded leg.",
            ],
          },
          {
            h2: "Using CPM on every rate call",
            p: [
              "Once you know your number, negotiation gets simple: rate per total mile above CPM = profit; below = loss. A $2,000 load for 700 loaded miles looks like $2.86/mi — but if it takes 300 deadhead miles to get there, it's really $2.00/mi against 1,000 miles. At $1.14 CPM you still profit; at $1.90 CPM you're working for pocket change.",
              "Recalculate monthly. Fuel prices move, insurance renews, miles change — a CPM from last winter can quietly turn wrong.",
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
              "Sabit giderler — kamyon ödemesi, sigorta, izinler, treyler kirası, park, yazılım. Tekerlekler dönse de dönmese de bunları ödersin.",
              "Değişken giderler — yakıt, bakım, lastik, otoyol geçişleri. Bunlar sürdüğün her milde artar.",
            ],
          },
          {
            h2: "Beş dakikalık hesap",
            p: [
              "Bir aylık sabit giderlerini topla ve ayda gerçekten sürdüğün mile böl. Sonra mil başı yakıt maliyetini (yakıt fiyatı ÷ kamyonunun MPG'si) ve mil başı bakım payını ekle.",
              "Örnek: aylık $4,100 sabit gider ÷ 10,000 mil = $0.41. Galonu $3.60 olan yakıt ÷ 6.5 MPG = $0.55. Bakım payı $0.18. Toplam: mil başı $1.14 — yüklü ya da boş, her mil için.",
            ],
          },
          {
            h2: "Zararı gizleyen hata",
            p: [
              "Çoğu şoför giderleri yalnızca yüklü millere böler. Ama kamyonun treylerin dolu olup olmadığına bakmaz — boş miller (deadhead) de aynı yakıtı yakar. Giderleri TÜM millere böl, sonra rate'leri yalnızca yüklü bacağa göre değil, gidiş-dönüşün toplam miline göre değerlendir.",
            ],
          },
          {
            h2: "CPM'i her rate görüşmesinde kullan",
            p: [
              "Rakamını bildiğinde pazarlık basitleşir: toplam mil başına düşen rate CPM'in üzerindeyse kâr, altındaysa zarar. 700 yüklü mil için $2,000'lık bir yük mil başı $2.86 gibi görünür — ama oraya ulaşmak 300 boş mil gerektiriyorsa, aslında 1,000 mile karşılık mil başı $2.00'dır. CPM'in $1.14 ise hâlâ kârdasın; $1.90 ise cep harçlığına çalışıyorsun.",
              "Her ay yeniden hesapla. Yakıt fiyatları değişir, sigorta yenilenir, miller değişir — geçen kışın CPM'i sessizce yanlışa dönebilir.",
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
              "Costos fijos — pago del camión, seguro, permisos, renta del tráiler, estacionamiento, software. Los pagas ruede o no ruede el camión.",
              "Costos variables — combustible, mantenimiento, llantas, peajes. Crecen con cada milla que manejas.",
            ],
          },
          {
            h2: "El cálculo de cinco minutos",
            p: [
              "Suma tus costos fijos de un mes y divídelos entre las millas que realmente manejas en un mes. Luego súmales tu costo de combustible por milla (precio del combustible dividido entre las MPG de tu camión) y una reserva de mantenimiento por milla.",
              "Ejemplo: $4,100/mes de costos fijos ÷ 10,000 millas = $0.41. Combustible a $3.60/gal ÷ 6.5 MPG = $0.55. Reserva de mantenimiento: $0.18. Total: $1.14 por milla — cada milla, cargada o vacía.",
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
              "Спросите десять owner-operator'ов, какая у них стоимость мили, и большинство назовёт число наугад. А ведь CPM — это число, от которого зависит каждое решение по ставке: груз, который платит выше вашей стоимости мили, приносит деньги, а груз ниже неё возить себе в убыток, каким бы большим ни выглядел гросс.",
            ],
          },
          {
            h2: "Из чего складывается стоимость мили",
            p: ["Полная стоимость мили — это сумма двух очень разных видов расходов:"],
            ul: [
              "Постоянные расходы — платёж за трак, страховка, пермиты, аренда трейлера, парковка, софт. Вы платите их, крутятся колёса или нет.",
              "Переменные расходы — топливо, обслуживание, шины, платные дороги. Они растут с каждой пройденной милей.",
            ],
          },
          {
            h2: "Расчёт за пять минут",
            p: [
              "Сложите постоянные расходы за месяц и разделите на мили, которые вы реально проезжаете за месяц. Затем прибавьте стоимость топлива на милю (цена топлива, делённая на MPG вашего трака) и резерв на обслуживание на милю.",
              "Пример: $4,100 постоянных расходов в месяц ÷ 10,000 миль = $0.41. Топливо по $3.60/галлон ÷ 6.5 MPG = $0.55. Резерв на обслуживание — $0.18. Итого: $1.14 за милю — за каждую милю, гружёную или пустую.",
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
              "Когда вы знаете своё число, торговаться просто: ставка за общую милю выше CPM — прибыль, ниже — убыток. Груз за $2,000 на 700 гружёных миль выглядит как $2.86 за милю, но если до него 300 пустых миль, на деле это $2.00 за милю на 1,000 миль. При CPM $1.14 вы всё ещё в плюсе; при CPM $1.90 вы работаете за копейки.",
              "Пересчитывайте каждый месяц. Цены на топливо меняются, страховка продлевается, пробег меняется — CPM прошлой зимы может незаметно стать неверным.",
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
              "A deadhead mile costs you exactly as much as a loaded one — same fuel, same tire wear, same hours — and pays you nothing. If your cost per mile is $1.14, every 100 empty miles is $114 straight out of your pocket before the next load pays a cent.",
            ],
          },
          {
            h2: "Know your deadhead percentage",
            p: [
              "Deadhead % = empty miles ÷ total miles. Under 10% is strong; 15% is common; above 20% means your routing — not your rates — is the biggest leak in the business. You can't improve it if you don't track loaded and empty miles separately on every single load.",
            ],
          },
          {
            h2: "Habits that cut empty miles",
            ul: [
              "Book the next load before you deliver the current one — the worst deadhead decisions happen when you're already empty and burning hours.",
              "Price the deadhead into the rate: judge every offer against total miles (deadhead + loaded), not the loaded leg alone.",
              "Learn your dead zones. Certain markets pay well inbound and terribly outbound — a great rate into a bad market is often a bad round trip.",
              "Prefer triangles over out-and-backs: three decent legs that keep the trailer full usually beat one great leg with a long empty return.",
              "Review your own history monthly: which brokers, lanes and regions actually produced the empty miles?",
            ],
          },
          {
            h2: "Measure it, then manage it",
            p: [
              "Drivers who track deadhead on every load start seeing patterns in weeks: the same broker who shorts the reload, the same city that strands the truck. The fix isn't heroic negotiating — it's refusing round trips that were losers before you ever picked up.",
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
              "Bir boş mil (deadhead) sana tam olarak yüklü bir mil kadar mal olur — aynı yakıt, aynı lastik aşınması, aynı saatler — ve sana hiçbir şey ödemez. Mil başı maliyetin $1.14 ise, her 100 boş mil, bir sonraki yük tek kuruş ödemeden önce doğrudan cebinden çıkan $114 demektir.",
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
              "Elindeki yükü teslim etmeden bir sonrakini ayarla — en kötü boş mil kararları, zaten boşken ve saatler yanarken verilir.",
              "Boş mili rate'e kat: her teklifi yalnızca yüklü bacağa göre değil, toplam mile (boş + yüklü) göre değerlendir.",
              "Ölü bölgelerini öğren. Bazı pazarlar gelen yüke iyi, çıkan yüke çok kötü öder — kötü bir pazara giden harika bir rate, çoğu zaman kötü bir gidiş-dönüştür.",
              "Git-gel yerine üçgen rotaları tercih et: treyleri dolu tutan üç makul bacak, genellikle uzun bir boş dönüşü olan tek harika bacaktan iyidir.",
              "Kendi geçmişini her ay gözden geçir: boş milleri gerçekte hangi aracılar (broker), hatlar ve bölgeler üretti?",
            ],
          },
          {
            h2: "Önce ölç, sonra yönet",
            p: [
              "Her yükte boş mili takip eden şoförler birkaç hafta içinde kalıpları görmeye başlar: dönüş yükünde hep eksik bırakan aynı broker, kamyonu hep mahsur bırakan aynı şehir. Çözüm kahramanca pazarlık değil — daha yükü almadan zararına olan gidiş-dönüşleri reddetmektir.",
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
              "Una milla vacía te cuesta exactamente lo mismo que una cargada — el mismo combustible, el mismo desgaste de llantas, las mismas horas — y no te paga nada. Si tu costo por milla es de $1.14, cada 100 millas vacías son $114 que salen directo de tu bolsillo antes de que la siguiente carga pague un centavo.",
            ],
          },
          {
            h2: "Conoce tu porcentaje de deadhead",
            p: [
              "Deadhead % = millas vacías ÷ millas totales. Menos del 10% es muy bueno; 15% es lo común; más del 20% significa que tu ruteo — no tus tarifas — es la mayor fuga del negocio. No puedes mejorarlo si no registras las millas cargadas y las vacías por separado en cada carga.",
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
              "Пустая миля обходится вам ровно во столько же, во сколько гружёная, — то же топливо, тот же износ шин, те же часы, — и не приносит ни цента. Если ваша стоимость мили $1.14, каждые 100 пустых миль — это $114 прямо из вашего кармана ещё до того, как следующий груз заплатит хоть что-то.",
            ],
          },
          {
            h2: "Знайте свой процент deadhead",
            p: [
              "Deadhead % = пустые мили ÷ общий пробег. Меньше 10% — отлично; 15% — обычное дело; больше 20% значит, что главная утечка в бизнесе — маршруты, а не ставки. Улучшить это не получится, если не учитывать гружёные и пустые мили отдельно по каждому грузу.",
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
              "Водители, которые учитывают deadhead по каждому грузу, уже через несколько недель видят закономерности: один и тот же брокер, который подводит с обратным грузом, один и тот же город, где трак застревает. Решение — не героические торги, а отказ от рейсов, которые были убыточными ещё до погрузки.",
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
          "Line by line: gross, deductions, accessorials, advances and escrow — and the checks that catch settlement errors before they cost you.",
        sections: [
          {
            p: [
              "Your settlement is the weekly truth of your business — and settlement errors are common enough that reading it line by line pays better per minute than driving. Here's what each block means and what to check.",
            ],
          },
          {
            h2: "The blocks of a settlement",
            ul: [
              "Gross revenue — every load delivered in the period, at the agreed rate. Check it against your own records load by load, not as a lump sum.",
              "Accessorial pay — detention, layover, extra stops, TONU. The most commonly missing line: if you waited 4 hours and it's not here, that's your money.",
              "Deductions — fuel advances, insurance, trailer rent, ELD, dispatch fees. Verify recurring ones didn't double-charge and one-time ones actually end.",
              "Escrow/maintenance holds — money moved, not money spent. Track the running balance; you're owed it back eventually.",
              "Net pay — what actually hits the bank.",
            ],
          },
          {
            h2: "The three checks that catch most errors",
            p: [
              "First: does every delivered load appear, at the rate on the rate con? Second: are the miles right — was pay calculated on the miles you agreed to, not a shorter practical-miles figure? Third: do this week's deductions match last week's, and can you explain every difference?",
            ],
          },
          {
            h2: "Keep your own books",
            p: [
              "The only way to audit a settlement is to have your own number for what the week should have paid — before the settlement arrives. That means logging every load with its rate, miles and accessorials as it happens, not reconstructing the week from memory on Friday.",
              "Whether you do that in a notebook, a spreadsheet, or an app that builds the weekly settlement for you automatically, the habit is the same: your records first, their paperwork second.",
            ],
          },
        ],
      },
      tr: {
        title: "Haftalık Settlement'ını Nasıl Okursun (Eksik Ödeme Almadan)",
        description:
          "Satır satır: brüt, kesintiler, ek ödemeler (accessorial), avanslar ve escrow — ve settlement hatalarını sana mal olmadan yakalayan kontroller.",
        sections: [
          {
            p: [
              "Settlement'ın, işinin haftalık gerçeğidir — ve settlement hataları o kadar yaygındır ki onu satır satır okumak, dakika başına direksiyondan daha çok kazandırır. İşte her bölümün ne anlama geldiği ve neyi kontrol etmen gerektiği.",
            ],
          },
          {
            h2: "Bir settlement'ın bölümleri",
            ul: [
              "Brüt gelir — dönem içinde teslim edilen her yük, anlaşılan rate üzerinden. Toplu bir tutar olarak değil, kendi kayıtlarınla yük yük karşılaştır.",
              "Ek ödemeler (accessorial) — detention, layover, ekstra duraklar, TONU. En sık eksik çıkan satır budur: 4 saat beklediysen ve burada yoksa, o senin paran.",
              "Kesintiler — yakıt avansları, sigorta, treyler kirası, ELD, dispeç ücretleri. Düzenli kesintilerin iki kez alınmadığını, tek seferlik olanların gerçekten bittiğini doğrula.",
              "Escrow/bakım blokajları — harcanan değil, kenara ayrılan para. Birikmiş bakiyeyi takip et; eninde sonunda sana geri ödenmesi gerekir.",
              "Net ödeme — hesabına gerçekten yatan tutar.",
            ],
          },
          {
            h2: "Hataların çoğunu yakalayan üç kontrol",
            p: [
              "Birincisi: teslim edilen her yük, rate confirmation'daki rate ile yer alıyor mu? İkincisi: miller doğru mu — ödeme daha kısa bir practical miles rakamına göre değil, anlaştığın millere göre mi hesaplandı? Üçüncüsü: bu haftanın kesintileri geçen haftakilerle uyuşuyor mu ve her farkı açıklayabiliyor musun?",
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
              "Ingreso bruto — cada carga entregada en el periodo, a la tarifa acordada. Compáralo carga por carga con tus propios registros, no como una suma global.",
              "Pagos adicionales (accessorials) — detention, layover, paradas extra, TONU. Es la línea que más falta: si esperaste 4 horas y no aparece aquí, es tu dinero.",
              "Deducciones — adelantos de combustible, seguro, renta del tráiler, ELD, comisiones de despacho. Verifica que las recurrentes no se cobren dos veces y que las únicas realmente terminen.",
              "Retenciones de escrow/mantenimiento — dinero apartado, no gastado. Lleva el saldo acumulado; tarde o temprano te lo deben devolver.",
              "Pago neto — lo que realmente llega al banco.",
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
          "Строка за строкой: гросс, удержания, доплаты (accessorials), авансы и escrow — и проверки, которые ловят ошибки в расчёте, пока они не стоили вам денег.",
        sections: [
          {
            p: [
              "Расчёт (settlement) — это еженедельная правда о вашем бизнесе, а ошибки в нём встречаются так часто, что построчная проверка приносит за минуту больше, чем вождение. Вот что означает каждый блок и что в нём проверять.",
            ],
          },
          {
            h2: "Из каких блоков состоит расчёт",
            ul: [
              "Гросс — каждый груз, доставленный за период, по согласованной ставке. Сверяйте его со своими записями по каждому грузу, а не одной суммой.",
              "Доплаты (accessorials) — detention, layover, дополнительные остановки, TONU. Чаще всего пропадает именно эта строка: если вы ждали 4 часа, а здесь этого нет, — это ваши деньги.",
              "Удержания — топливные авансы, страховка, аренда трейлера, ELD, оплата диспетчера. Проверьте, что регулярные удержания не списаны дважды, а разовые действительно закончились.",
              "Escrow и резерв на обслуживание — деньги отложенные, а не потраченные. Следите за накопленным балансом: рано или поздно его должны вернуть.",
              "Чистая оплата — то, что реально приходит на счёт.",
            ],
          },
          {
            h2: "Три проверки, которые ловят большинство ошибок",
            p: [
              "Первая: есть ли в расчёте каждый доставленный груз и по ставке из rate confirmation? Вторая: верны ли мили — посчитана ли оплата по милям, о которых вы договорились, а не по меньшей цифре practical miles? Третья: совпадают ли удержания этой недели с прошлой и можете ли вы объяснить каждое отличие?",
            ],
          },
          {
            h2: "Ведите собственный учёт",
            p: [
              "Единственный способ проверить расчёт — иметь собственную цифру того, сколько должна была принести неделя, ещё до того, как придёт расчёт. Это значит записывать каждый груз со ставкой, милями и доплатами сразу, а не восстанавливать неделю по памяти в пятницу.",
              "Ведёте ли вы учёт в блокноте, в таблице или в приложении, которое само собирает еженедельный расчёт, привычка одна: сначала ваши записи, потом их бумаги.",
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

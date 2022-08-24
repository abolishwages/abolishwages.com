// react import
import React from 'react'

// home component
export default function Home() {
    return (
        <div id='home'>
            <div id='content'>
                <section id='intro'>
                    <h1 id='fancy'>Abolish Wages</h1>
                    <p id='abstract'>
                        Why? Because the wages system is exploitative 
                        by its very nature. 
                    </p>
                </section>
                <section id='the-wages-system'>
                    <h2>The Wages System</h2>
                    <p>
                        When I refer to the wages system, I am referencing 
                        how labor is generally compensated for their work.
                        Of course, there are exceptions to what I am about 
                        to say. However, the vast majority of people earn
                        their living through wages paid by a company that
                        they don't own even partially. As a result, there
                        is a stark divide between the owners (capitalists)
                        and the laborers in our society.
                    </p>
                </section>
                <section id='surplus-value'>
                    <h2>Surplus Value</h2>
                    <p>
                        Suppose you are a capitalist. You own a business, as 
                        well as some land rich in resources that you can use
                        to produce some valuable product. Suppose that one 
                        unit of the raw materials you own can be sold for $10,
                        but the equivalent amount that has been refined into 
                        your product can sell for $100. You hire
                        workers who can transform the raw materials you own 
                        into a finished product ready to sell, and you pay 
                        them for their time.
                    </p>
                    <p>
                        Naturally, for each unit of your product produced,
                        the worker has generated $90 in value by transforming
                        $10 in raw materials into a $100 product. Suppose your 
                        average worker can complete one unit of product per 
                        hour. If you pay each worker $50 per hour (generous, 
                        I know), you are still profiting $40 per worker per
                        hour without even lifting a finger. This is the worker's
                        surplus value. If you have 10 workers, you make $400 
                        per hour without doing anything.
                    </p>
                </section>
                <section id='initial-objection'>
                    <h2>An Initial Objection</h2>
                    <p>
                        "Surely in real life the surplus value isn't so comically
                        large," you may argue. In response to this point I would 
                        simply ask you how billionaires could exist without this
                        being the case. Even smaller companies have been shown to 
                        extract huge amounts in surplus value from their workers.
                        One <a href='https://www.wtol.com/article/news/local/findlay-pizzeria-owner-gives-entire-day-of-profits-to-employees-to-show-his-appreciation/512-5fa193d2-b88a-44ea-9351-b61af44c35f8'>pizzeria</a> famously
                        paid their workers $78 per hour on one day only when the 
                        owner took no profits. 
                    </p>
                    <p>
                        I even have personal experience with egregious exploitation. 
                        I worked for a tutoring company that paid me $15 per hour.
                        A client who was discontinuing tutoring mentioned that it 
                        was cost-prohibitive for his family because it was $75 per 
                        hour. I was floored. I was angry. This company was paying 
                        me 20% of the value I was producing.
                    </p>
                </section>
                <section id='exploitation'>
                    <h2>Exploitation</h2>
                    <p>
                        This kind of exploitation is everywhere in our society, and
                        it's only getting worse. Wages have stagnated; in fact, 
                        they have actually decreased when inflation is taken into 
                        account. All the while, the wealthy have gotten massively
                        wealthier.
                    </p>
                    <p>
                        In the short term, most people have no choice but to participate 
                        in this system, even if they know they are being exploited. 
                        However, it is important to be aware that this system is 
                        getting even more unfair with time. The owner class is never 
                        satisfied. They have been waging a one-sided class war for longer
                        than any of us have been alive. It is time for those of us that
                        actually create value to reclaim that value for ourselves.
                    </p>
                </section>
            </div>
            <footer id='footer'>
                <div id='footer-border'/>
                <p id='description'>
                    <a href='https://github.com/abolishwages/abolishwages.com/'>Made</a> with 
                    {'<3'} by <a href='https://twitter.com/abolishwages'>Matt</a>.
                </p>
            </footer>
        </div>
    )
}

---
title: "CSS Printing"
description: "Styling COID reports for printing - how to handle table headers and footers spanning multiple pages"
pubDate: "April 30 2024"
heroImage: "/post_img.webp"
order: 9
---

For COID we're recreating over 20 financial and water rights reports in HTML and CSS that need to be printable through the web application. A challenge I'm running into is that many of these reports have tables, or table like data, that span multiple pages. A nice feature of html tables is that thead and tfoot will automatically print on each page. However, if information in the header changes, such as in the rotations report, is there a way to use variables so that when a new record is pulled from the database, the header will update the Patron Name?

Using the fact that thead and tfoot print on each page, I can put report titles and date and timestamps that appear at the top of each report inside of thead. I do this in the transaction-print report which works well as the header information is consistent and doesn't change across the report. However, I cannot do table wrapping with multiple html tables this way as the report heading will be at the top of each table.

Alternatively, on beneficial-uses I'm currently using thead to only take up white space at the top of each report and then I use position: fixed divs to place the header at the top of each page of the report. I don't have to use this method, as the thead can replicate the header for me as beneficial-uses does not have a changing header. However, the data for this report has multiple tables, one for each patron. The Patron Name and ID appear at the top before each table, thus making it similar to the rotations report, although, on the rotations report each rotation takes up an entire page. If I want the beneficial uses report to wrap, so that each page is not a separate Patron, I need to deal with tables overlapping onto two or more pages.

# CSS Questions

1. What are the main differences between external, internal, and inline CSS?
    - external: css that is referrenced from a another file with a css extension.
    - internal: css that is referrenced from the same file as the html but in betweem style tags.
    - inline: css applied directly to an html element.
2. What is the syntax for class and ID selectors?
    - class: .class
    - ID: #id
3. How would you apply a single rule to two different selectors?
    - do grouping of the selectors.
    - ex: ``p, span { color: green; }``
4. Given an element that has an id of title and a class of primary, how would you use both
attributes for a single rule?
    - #id.class
5. What does the descendant combinator do?
    - it applies a css rule to a specified descendent of a parent element.
    - ex: ``list-container list-item a{ text-decoration: none; }``
6. Between a rule that uses one class selector and a rule that uses three type selectors,
which rule has the higher specificity?
    - the class is has higher specificity than type selectors.
7. From inside to outside, what is the order of box-model properties?
    - actual content, padding, border, margin
8. What does the box-sizing CSS property do?
    - sets how the total width and height of an element is calculated.
9. What is the difference between the standard and alternative box model?
    - standard: the size of the border is added to the width and height of the box.
    - alternative: the size of the border makes the content box smaller as it takes
     up some of that available width and height.
10. Would you use margin or padding to create more space between 2 elements?
    - i would use magrin.
11. Would you use margin or padding to create more space between the contents of an
element and its border?
    - i would use padding.
12. Would you use margin or padding if you wanted two elements to overlap each other?
    - i would use margin.
13. What is the difference between a block element and an inline element?
    - block: they start from a new line and takes up the full width available
    - inline: they never start a new line and they only take space bounded by its html tags.
14. What is the difference between an inline element and an inline-block element?
    - inline-block: allows to set a width and height on the element and top and bottom of margins 
    and padding are also respected.
    - inline: ignores width and height set and does not respect top and bottom of margins and padding
    - they both allow side-by-side elements.
15. Is an h1 block or inline?
    - h1 is a block element.
16. Is button block or inline?
    - a button is an inline-block element.
17. Is div block or inline?
    - a div is a block element.
18. Is span block or inline?
    - a span is an inline element.
19. What’s the difference between a flex container and a flex item?
    - flex container: is a the parent element.
    - flex item: represents the child of the flex conatiner.
20. How do you create a flex item?
    - by setting the parent element of that flex item to display flex.
    - ex ``<div class="parent" style="display:flex"><div class="flex-item"></div></div>``
21. What are the 3 values defined in the shorthand flex property?
    - flex-grow, flex-shrink and flex-basis
22. How do you make flex items arrange themselves vertically instead of horizontally?
    - by using flex property flex-direction set to column on the flex container.
23. What is the difference between justify-content and align-items?
    - justify-content: aligns the elements in any direction horizontally.
    - align-items: aligns the elements in any direction vertically.
24. How do you use flexbox to completely center a div inside a flex container?
    - by setting justify-content to center and align-items to center
25. What’s the difference between justify-content: space-between and justify-content:
space-around?
    - space-between: items are evenly distributed in the line; first item is on the start line,
    last item on the end line. 
    - space-around: items are evenly distributed in the line with equal space around them.

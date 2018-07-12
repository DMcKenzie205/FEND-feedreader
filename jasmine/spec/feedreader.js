/*******************************************************************************
 * Set References
 
https://www.youtube.com/watch?reload=9&v=Ut_L8YUImbw&feature=youtu.be&t=1
https://github.com/MOhammedRiaad/Feed-Test/blob/master/jasmine/spec/feedreader.js
/*******************************************************************************

/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {

    describe('RSS Feeds', () => {

        /* This test is to make sure that the allFeeds variable has been defined 
         * and that it is not empty.
         */
        it('are defined', () => {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* This test loops through each feed in the allFeeds object and ensures 
         * it has a URL defined and that the URL is not empty.
         */
        it('hasURL', () => {
            for(const feed of allFeeds) {     
                
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe('');
            }
        });

        /* This test loops through each feed in the allFeeds object and ensures 
         * it has a name defined and that the name is not empty.
         */
        it('hasName', () => {
            for(const feed of allFeeds) {
            
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe('');
            }
        });
    });

    describe('The Menu', () => {

        /* This test ensures the menu element is hidden by default. 
         */
        it('defaultHidden', () => {
            const classList = document.body.classList;

            expect(classList.contains('menu-hidden')).toBe(true);
        });

        /* This test ensures the menu changes visibility when the menu icon is 
         * clicked. This test has two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it('menuChanges', () => {
            const menuIcon = document.querySelector('.menu-icon-link');

            menuIcon.click() 
            expect(document.body.classList.contains('menu-hidden')).toBe(false);
        
            menuIcon.click() 
            expect(document.body.classList.contains('menu-hidden')).toBe(true);
        });
    });

/* This test suite section was based on the code written by Mohammed Riaad.
 * He hosted a Study Jam that is referenced at the top of this file, as is his
 * code repository.
 */
    describe('Initial Entries', () => {

        /* This test ensures when the loadFeed function is called and completes 
         * its work, there is at least a single .entry element within the .feed 
         * container.
         */
        beforeEach((done) => {
            loadFeed(0, () => {
                done();
            });
        });

        it('there is at least a single .entry element within the .feed container', ((done) => {
            let entriesList = document.querySelector('.feed').getElementsByClassName('entry').length;
            expect(entriesList).toBeGreaterThan(0);
            done();
        }));
    });

    describe('New Feed Selection', () => {
        /* This test ensures when a new feed is loaded by the loadFeed function 
         * that the content actually changes.
         */
        let initFeedSelection;

        beforeEach((done) => {
            loadFeed(0, () => {
                initFeedSelection = document.querySelector('.feed').innerHTML;

                loadFeed(1, () => {
                    done();
                });
            });
        });

        it('content changes on loadFeed()', ((done) => {
            let newFeedSelection = document.querySelector('.feed').innerHTML;
            expect(initFeedSelection).not.toBe(newFeedSelection);
            done();   
        }));
    })
}())

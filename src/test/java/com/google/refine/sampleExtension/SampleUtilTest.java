package com.google.refine.sampleExtension;

import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class SampleUtilTest {

    @Test
    public void testDummyMethod() {
        assertEquals(42, SampleUtil.dummyMethod());
    }

    @Test
    public void testFailing() {
        assertEquals(10, 7);
    }
}

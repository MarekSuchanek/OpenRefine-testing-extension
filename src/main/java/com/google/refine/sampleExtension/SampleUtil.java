package com.google.refine.sampleExtension;

import com.google.refine.util.ParsingUtilities;

import org.apache.jena.ontology.OntModel;
import org.apache.jena.rdf.model.ModelFactory;

import java.time.OffsetDateTime;

public class SampleUtil {
    static public int stringArrayLength(String[] a) {
        return a.length;
    }

    static public void testRefine() {
        final OffsetDateTime offsetDateTime = ParsingUtilities.stringToDate("01-01-1990");
    }

    static public void testApacheJena() {
        OntModel model = ModelFactory.createOntologyModel();
    }

    static public int dummyMethod() {
        return 42;
    }
}

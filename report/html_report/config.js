report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Entire_document-0.png",
        "test": "..\\bitmaps_test\\20200826-222001\\Entire_document-0.png",
        "selector": "document",
        "fileName": "Entire_document-0.png",
        "label": "Entire document",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/html-form/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "4.49",
          "analysisTime": 51
        },
        "diffImage": "..\\bitmaps_test\\20200826-222001\\failed_diff_Entire_document-0.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Form-0.png",
        "test": "..\\bitmaps_test\\20200826-222001\\Form-0.png",
        "selector": "form",
        "fileName": "Form-0.png",
        "label": "Form",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/html-form/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -667,
            "height": -454
          },
          "misMatchPercentage": "12.38",
          "analysisTime": 63
        },
        "diffImage": "..\\bitmaps_test\\20200826-222001\\failed_diff_Form-0.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Fieldset_tag-0.png",
        "test": "..\\bitmaps_test\\20200826-222001\\Fieldset_tag-0.png",
        "selector": "fieldset",
        "fileName": "Fieldset_tag-0.png",
        "label": "Fieldset tag",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/html-form/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -663,
            "height": 83
          },
          "misMatchPercentage": "33.64",
          "analysisTime": 72
        },
        "diffImage": "..\\bitmaps_test\\20200826-222001\\failed_diff_Fieldset_tag-0.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Submit_button-0.png",
        "test": "..\\bitmaps_test\\20200826-222001\\Submit_button-0.png",
        "selector": "[type=\"submit\"]",
        "fileName": "Submit_button-0.png",
        "label": "Submit button",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/html-form/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -283,
            "height": -245
          },
          "misMatchPercentage": "1.34",
          "analysisTime": 20
        },
        "diffImage": "..\\bitmaps_test\\20200826-222001\\failed_diff_Submit_button-0.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Email_with_placeholder-0.png",
        "test": "..\\bitmaps_test\\20200826-222001\\Email_with_placeholder-0.png",
        "selector": "[type=\"email\"][placeholder]",
        "fileName": "Email_with_placeholder-0.png",
        "label": "Email with placeholder",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/html-form/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -168,
            "height": -245
          },
          "misMatchPercentage": "4.01",
          "analysisTime": 41
        },
        "diffImage": "..\\bitmaps_test\\20200826-222001\\failed_diff_Email_with_placeholder-0.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Number_with_value-0.png",
        "test": "..\\bitmaps_test\\20200826-222001\\Number_with_value-0.png",
        "selector": "[type=\"number\"][value]",
        "fileName": "Number_with_value-0.png",
        "label": "Number with value",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/html-form/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -272,
            "height": -245
          },
          "misMatchPercentage": "1.60",
          "analysisTime": 29
        },
        "diffImage": "..\\bitmaps_test\\20200826-222001\\failed_diff_Number_with_value-0.png"
      },
      "status": "fail"
    }
  ]
});
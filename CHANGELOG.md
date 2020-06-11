# Changelog

## 0.2.0 (2020-06-11)

### Fixed

* Replaced `target.offsetTop` with `target.getBoundingClientRect().top` for more accurate position calculation.

### Added

* Added configurable offset `threshold`.
* Added log information when the form gets loaded.

## 0.1.2 (2020-05-29)

### Fixed

* Increased top offset threshold.

## 0.1.1 (2020-05-29)

### Fixed

* Fixed broken `template.ejs` path.

## 0.1.0 (2020-05-29)

### Added

* Added support for embedding Convertkit JavaScript form code.

### Improvement

* JavaScript form code gets loaded on scroll to the form placement. (Fixes counting visitors.)


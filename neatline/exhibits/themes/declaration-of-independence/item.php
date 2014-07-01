<?php

/* vim: set linebreak wrap nolist tabstop=2 shiftwidth=2 softtabstop=2: */

/**
 * @package     omeka
 * @subpackage  neatline-NeatLight
 * @copyright   2014 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

?>

<div class="header">

  <h1 class="name">
    <?php echo metadata('item', array(
        'Dublin Core', 'Title'
    )); ?>
  </h1>

  <div class="state">
    <?php echo metadata('item', array(
        'Item Type Metadata', 'State'
    )); ?>
  </div>

</div>

<hr />

<div class="content">

  <div class="picture">
    <?php echo files_for_item(); ?>
  </div>

  <div class="text summary">
    <?php echo metadata('item', array(
        'Item Type Metadata', 'Biographical Summary'
    )); ?>
  </div>

  <div class="text biography">
    <?php echo metadata('item', array(
        'Item Type Metadata', 'Biographical Text'
    )); ?>
  </div>

</div>
